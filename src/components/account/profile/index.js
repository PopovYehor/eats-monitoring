import "./style.scss"
import { changeAccountData,  arrSex, arrActiv } from "../../../helper/account-scripts/changeDataUser"
import {sameHeightTable, keySelectParam, userParam, userSelectParam, upAccount} from "../../../helper/account-scripts/table-script"
import { localStorageUser} from "../../../helper/account-scripts/user-data"
import {  TranslateTexts, getLang } from "../../../helper/translate/translateText"

const account = ()=>{
    const elem = `
        <figure class="figure-img-profile">
            <img class="img-profile" src= '${localStorageUser('photo') || 'https://i.ibb.co/G5VTwDZ/1625890.png'}'>
            <input class="add-img" id="changeImg" type="file">
            <label class="label-change" for="changeImg">
                <span class="change-img-span">Change photo</span>
            </label>
        </figure>
        <div class="title-name">
            <h1 class="profile-item" id="name" data-validate = "${TranslateTexts(getLang(), 'nameSurmaneValidation')}"</h1>
        </div>
        <div class="toggle">
            <input class="view_details dropdown-toggle" id="view_details" type="checkbox">
            <label class="view-label" for="view_details">☰</label>
        </div>
        <div class="mainen active">
            <dl class="list">
            <tr>
                <dt class= "profile-description" id="Login" key = "logins">${TranslateTexts(getLang(), 'logins')}</dt>
                    <dd class="profile-item" id="login-item"  data-validate = "${TranslateTexts(getLang(), 'loginValidate')}" >${localStorageUser('userName')}</dd>
            </tr>
            <tr>        
                <dt class= "profile-description" id="age" key = "age">${TranslateTexts(getLang(), 'age')}</dt>
                    <dd class="profile-item" id="age-item"   data-validate = "${TranslateTexts(getLang(), 'ageValidate')}">${localStorageUser('age')} <span class = "lang" key= "oldYears">${TranslateTexts(getLang(), 'oldYears')}</span></dd>
            </tr>
            <tr>   
                <dt class= "profile-description" id="sex" key = "sex">${TranslateTexts(getLang(), 'sex')}</dt>
                    <dd class="profile-item lang" id="sex-item" key ="${keySelectParam(arrSex().value, 'sex')}">${userSelectParam(arrSex().value, 'sex', arrSex().text, )}</dd>
            </tr>
            <tr>        
                <dt class= "profile-description" id="height" key = "height">${TranslateTexts(getLang(), 'height')}</dt>
                    <dd class="profile-item" id="height-item" data-validate = "${keySelectParam(arrSex().value, 'heightValidate')}">${localStorageUser('height')} <span class = "lang" key= "sm">${userParam('heightParam', 'sm', 'sm', 'inches')}</span></dd>
            </tr>
                    
            <tr>    
                <dt class= "profile-description" id="weight" key = "weight">${TranslateTexts(getLang(), 'weight')}</dt>
                    <dd class="profile-item" id="weight-item" data-validate = "${TranslateTexts(getLang(), 'weightValidate')}">${localStorageUser('weight')} <span class = "lang" key= "kg">${userParam('weightParam', 'kg', 'kg', 'pounds')}</span></dd>
            </tr>
            <tr>    
                <dt class= "profile-description" id="last-weight" key = "lastWeight">${TranslateTexts(getLang(), 'lastWeight')}</dt>
                    <dd class="profile-item" id="last-weight-item">${localStorageUser('lastWeighing')}</dd>
            </tr>
            <tr>    
                <dt class= "profile-description" id="perfect-weight" key = "perfectWeight">${TranslateTexts(getLang(), 'perfectWeight')}</dt>
                    <dd class="profile-item" id="perfect-weight-item">${localStorageUser('perfectWeight')} <span class = "lang" key= "kg">${userParam('weightParam', 'kg',  'kg', 'pounds')}</span></dd>
            </tr>
            <tr>    
                <dt class= "profile-description" id="wantWeight" key = "wantWeight">${TranslateTexts(getLang(), 'wantWeight')}</dt>
                    <dd class="profile-item" id="want-weight-item" data-validate = "${TranslateTexts(getLang(), 'weightValidate')}">${localStorageUser('wantWeight')} <span class = "lang" key= "kg">${userParam('wantWeightParam', 'kg', 'kg', 'pounds')}</span></dd>
            </tr>
            <tr>
                <dt class= "profile-description" id="activ" key = "activ">${TranslateTexts(getLang(), 'activ')}</dt>
                    <dd class="profile-item lang" id="activ-item" key ="${keySelectParam(arrActiv().value, 'active')}">${userSelectParam(arrActiv().value, 'active', arrActiv().text)}</dd>
            </tr>
            <tr>       
                <dt class= "profile-description" id="dataRegistr" key = "dataRegistr">${TranslateTexts(getLang(), 'dataRegistr')}</dt>
                    <dd class="profile-item" id="regist-day-item" data-validate = "${TranslateTexts(getLang(), 'dateValidation')}">${localStorageUser('dateRegist')}</dd>
            </tr>
            <tr>    
                <dt class= "profile-description" id="wantDay" key = "wantDay">${TranslateTexts(getLang(), 'wantDay')}</dt>
                    <dd class="profile-item" id="want-day-item" data-validate = "${TranslateTexts(getLang(), 'dateValidation')}"  >${localStorageUser('wantDate')}</dd> 
            </tr>
            </dl>
            <button class="changeBtn lang" key = "changeBtn">${TranslateTexts(getLang(), 'changeBtn')}</button>
        </div>
    `
    const wrap = document.querySelector('.profile')
    wrap.innerHTML = elem
    const mainem = document.querySelector('.mainen')

    if (window.innerWidth <=1024){
        mainem.classList.remove('active')
    }
    upAccount()
    const changeBtn = document.querySelector('.changeBtn')
    changeBtn.addEventListener('click', ()=>{changeAccountData()})
    sameHeightTable()

}

export {account}
