import "./style.scss"
import { changeAccountData } from "../../helper/account-scripts/scrypt"
import { localStorageUser } from "../../helper/account-scripts/user-data"
import { translateText, translateCount } from "../../helper/translate/translate.js"
import { arrSex, arrActiv, sameHeightTable, upAccount } from "../../helper/account-scripts/scrypt"
import { logIn } from "../../helper/form-scrypts/enterLogin"
const userSelectParam = (arr, item, arrText)=>{
    let element = ''
    arr.forEach((elem, i) => {
        if (elem == localStorageUser(item)){
            element = arrText[i].replace(/\((.*?)\)/, '')
        }
    })
    return element
}

const userParam = (store, item, text1, text2, text3, text4)=>{
    let elem = ''
    localStorageUser(store) == item ? elem = translateText(translateCount, text1, text2) :  elem = translateText(translateCount, text3, text4)
    return elem
} 
const account = ()=>{
    logIn()
    console.log(arrActiv.text[1].replace(/\((.*?)\)/, ''))
    const elem = `
        <figure class="figure-img-profile">
            <img class="img-profile" src= '${localStorageUser('photo') || 'https://i.ibb.co/G5VTwDZ/1625890.png'}'>
            <input class="add-img" id="changeImg" type="file">
            <label class="label-change" for="changeImg">
                <span class="change-img-span">Change photo</span>
            </label>
        </figure>
        <div class="title-name">
            <h1 class="profile-item" id="name">${localStorageUser('name')} ${localStorageUser('name')}</h1>
        </div>
        <div class="toggle">
            <input class="view_details dropdown-toggle" id="view_details" type="checkbox">
            <label for="view_details">☰</label>
        </div>
        <div class="mainen active">
            <dl class="list">
            <tr>
                <dt class= "profile-description" id="Login">Login</dt>
                    <dd class="profile-item" id="login-item">${localStorageUser('userName')}</dd>
            </tr>
            <tr>        
                <dt class= "profile-description" id="age">Age</dt>
                    <dd class="profile-item" id="age-item">${localStorageUser('age')} ${translateText(translateCount, 'років', 'old years')}</dd>
            </tr>
            <tr>   
                <dt class= "profile-description" id="sex">Sex</dt>
                    <dd class="profile-item" id="sex-item">${userSelectParam(arrSex.value, 'sex', arrSex.text, )}</dd>
            </tr>
            <tr>        
                <dt class= "profile-description" id="height">Height</dt>
                    <dd class="profile-item" id="height-item">${localStorageUser('height')} ${userParam('heightParam', 'sm', 'см', 'sm', 'дюймів', 'inches')}</dd>
            </tr>
                    
            <tr>    
                <dt class= "profile-description" id="weight">Weight</dt>
                    <dd class="profile-item" id="weight-item">${localStorageUser('weight')} ${userParam('weightParam', 'kg', 'кг', 'kg', 'фунтів', 'pounds')}</dd>
            </tr>
            <tr>    
                <dt class= "profile-description" id="wantWeight">Want weight</dt>
                    <dd class="profile-item" id="want-weight-item">${localStorageUser('wantWeight')} ${userParam('wantWeightParam', 'kg', 'кг', 'kg', 'фунтів', 'pounds')}</dd>
            </tr>
            <tr>
                <dt class= "profile-description" id="activ">Activity level</dt>
                    <dd class="profile-item" id="activ-item">${userSelectParam(arrActiv.value, 'active', arrActiv.text)}</dd>
            </tr>
            <tr>       
                <dt class= "profile-description" id="dataRegistr">Date of registration</dt>
                    <dd class="profile-item" id="regist-day-item">${localStorageUser('dateRegist')}</dd>
            </tr>
            <tr>    
                <dt class= "profile-description" id="wantDay">Desired weight loss date</dt>
                    <dd class="profile-item" id="want-day-item">${localStorageUser('wantDate')}</dd> 
            </tr>
            </dl>
            <a class="changeBtn">Change</a>
        </div>
    `
    
    const wrap = document.querySelector('.profile')
    wrap.innerHTML = elem
    upAccount()
    const changeBtn = document.querySelector('.changeBtn')
    changeBtn.addEventListener('click', (e)=>{changeAccountData(e)})

    sameHeightTable()
}

export {account}
