import { localStorageUser } from "./user-data"
import { translateText } from "../translate/translateText"
import { arrActiv } from "./changeDataUser"
import { fromTodayToWantDate } from "../../components/account/charts/progresChartAcc/dataForProgresChart"
const sameHeightTable = ()=>{
    const profileDescription = document.querySelectorAll('.profile-description')
    
    const profileItem = document.querySelectorAll('.profile-item')
    profileDescription.forEach((elem , i) => {
        const lastWeightItem = document.getElementById('last-weight-item')
        const lastWeightDescription = document.getElementById('last-weight')
        
        setTimeout(()=>{
            if (elem==lastWeightDescription)
                if (window.innerWidth > 1440){
                    lastWeightDescription.style.height = 55 + 'px'
                    lastWeightItem.style.height = 55 + 'px'
                }
                if (window.innerWidth <= 1440){
                    lastWeightDescription.style.height = 50 + 'px'
                    lastWeightItem.style.height = 50 + 'px'
                }
                if (window.innerWidth <= 1300){
                    lastWeightDescription.style.height = 40 + 'px'
                    lastWeightItem.style.height = 40 + 'px'
                }
             else{
            elem.style.height = profileItem[i+1].getBoundingClientRect().height + 'px'
             }
        }, 250)
        
    })
}

const caloriesFormulaAccount = ()=>{
    const sex = localStorageUser('sex')
    let weight = Number(localStorageUser('weight'))
    const weightParam = localStorageUser('weightParam')
    if (weightParam == 'pounds') weight = weight/2.2

    let wantWeight = Number(localStorageUser('wantWeight'))
    const wantWeightParam = localStorageUser('wantWeightParam')
    if (wantWeightParam == 'pounds') wantWeight = wantWeight/2.2

    let height = Number(localStorageUser('height'))
    const heightParam = localStorageUser('heightParam')
    if (heightParam == 'inches') height = height*2.54

    const years = Number(localStorageUser('age'))
    const active = Number(localStorageUser('activeCoef'))

    let calcCalories = ''
    sex == 'female' ? calcCalories = (((10*weight) + (6.25*height) + (5*years) - 161)*active) : calcCalories = (((10*weight) + (6.25*height) + (5*years) + 5)*active)

    let wantResult = ''
    wantWeight < weight ? wantResult = (calcCalories - ((7700*( weight-wantWeight))/fromTodayToWantDate())) : wantResult = (calcCalories + ((7700*(wantWeight - weight))/fromTodayToWantDate()))
    
    localStorage.setItem('needCalories', Math.round(wantResult))
    localStorage.setItem('calories', Math.round(wantResult))

    localStorage.setItem('fats', Math.round(wantResult * 0.25))
    localStorage.setItem('needFats', Math.round(wantResult * 0.25))

    localStorage.setItem('protein', Math.round(wantResult * 0.30))
    localStorage.setItem('needProtein', Math.round(wantResult * 0.30))

    localStorage.setItem('carbohydrates', Math.round(wantResult * 0.45))
    localStorage.setItem('needCarbohydrates', Math.round(wantResult * 0.45))

}

const weightIndexAccount = ()=>{
    let weight = Number(localStorageUser('weight'))
    const weightParam = localStorageUser('weightParam')
    if (weightParam == 'pounds') weight = weight/2.2

    let height = Number(localStorageUser('height'))
    const heightParam = localStorageUser('heightParam')
    if (heightParam == 'inches') height = height*2.54

    const weightIndex = Math.round(weight/(Math.pow((height/100), 2)))

    localStorage.setItem('weightIndex', weightIndex)
    return weightIndex
}

const fatPercentAccount = ()=>{
    const sex = localStorageUser('sex')
    const years = Number(localStorageUser('age'))

    let fatPercent = ''
    sex == 'male' ? fatPercent = Math.round((1.2*weightIndexAccount())+(0.23*years)-16.2) : fatPercent = Math.round((1.2*weightIndexAccount())+(0.23*years)-5.4)

    localStorage.setItem('fatPercent', fatPercent)
    return fatPercent
}

const fatWeightAccount = ()=>{
    let weight = Number(localStorageUser('weight'))
    const weightParam = localStorageUser('weightParam')

    let fatWeight = ''
    weightParam == 'pounds' ? fatWeight = Math.floor((weight * (fatPercentAccount()/100))*2.54) : fatWeight = Math.floor(weight * (fatPercentAccount()/100))

    localStorage.setItem('fatWeight', fatWeight)
    return fatWeight
}

const userSelectParam = (arr, item, arrText)=>{
    let element = ''
        arr.forEach((elem, i) => {
            if (elem == localStorageUser(item)){
                element = arrText[i].replace(/\((.*?)\)/, '')
                
            }
        })
        if (item == 'active'){
            arr.forEach((element, i) => {
                if (element == localStorageUser(item)){
                    const [userActiveCoef] = Object.values(arrActiv.coef[i])
                    localStorage.setItem('activeCoef', JSON.stringify(userActiveCoef))
                }
            })
        }
    return element
}

const keySelectParam = (arr, item)=>{
    let element = ''
    arr.forEach((elem) => {
        if (elem == localStorageUser(item)){
            element = elem
        }
    })
    return element
}

const userParam = (store, item, text1, text2, text3, text4)=>{
    let translateCount = localStorage.getItem('languageCount')
    let elem = ''
    localStorageUser(store) == item ? elem = translateText(translateCount, text1, text2) :  elem = translateText(translateCount, text3, text4)
    return elem
} 

const upAccount = ()=>{
    const openProf = document.getElementById('view_details')
    const main = document.querySelector('.mainen')
    const profile = document.querySelector('.profile')
    const labelChangePhoto = document.querySelector('.label-change')
    const changeBtn = document.querySelector('.changeBtn')
    const profileItem = document.querySelectorAll('.profile-item')
        openProf.addEventListener('click', ()=>{
        if(!profile.classList.contains('active') && !main.classList.contains('active') ){
            main.classList.add('active')
            profile.classList.add('active')

        }else{
            main.classList.remove('active')
            profile.classList.remove('active')
        }
        })
    }

export {sameHeightTable, caloriesFormulaAccount, fatWeightAccount, userSelectParam, keySelectParam, userParam, upAccount}