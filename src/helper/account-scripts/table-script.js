import { localStorageUser } from "./user-data"
import { TranslateTexts, getLang } from "../translate/translateText"
import { arrActiv } from "./changeDataUser"

const sameHeightTable = ()=>{
    const sameDesc = document.querySelectorAll('.same-height-description')
    const sameItem = document.querySelectorAll('.same-height-item')
    sameItem.forEach((elem , i) => {
        setTimeout(()=>{
             elem.style.height = sameDesc[i].getBoundingClientRect().height + 'px'
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