import { localStorageUser } from "./user-data"
import { TranslateTexts, getLang } from "../translate/translateText"
import { arrActiv } from "./changeDataUser"

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
//check selected user parametr
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
                    const [userActiveCoef] = Object.values(arrActiv().coef[i])
                    localStorage.setItem('activeCoef', JSON.stringify(userActiveCoef))
                }
            })
        }
    return element
}
//set key on account table
const keySelectParam = (arr, item)=>{
    let element = ''
    arr.forEach((elem) => {
        if (elem == localStorageUser(item)){
            element = elem
        }
    })
    return element
}
//check default user parametr
const userParam = (store, item, langItem1, langItem2)=>localStorageUser(store) == item ? TranslateTexts(getLang(), langItem1) :  TranslateTexts(getLang(), langItem2)

//change height account
const upAccount = ()=>{
    const openProf = document.getElementById('view_details')
    const main = document.querySelector('.mainen')
    const profile = document.querySelector('.profile')
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

export {sameHeightTable, userSelectParam, keySelectParam, userParam, upAccount}