import "./style.scss"
import { translateText, translateCount } from "../../helper/translate/translate.js"
import { changeAccountData, upAccount,  arrSex, arrActiv } from "../../helper/account-scripts/changeDataUser"
import {sameHeightTable} from "../../helper/account-scripts/table-script"
import { localStorageUser} from "../../helper/account-scripts/user-data"


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
    const elem = `
        <figure class="figure-img-profile">
            <img class="img-profile" src= '${localStorageUser('photo') || 'https://i.ibb.co/G5VTwDZ/1625890.png'}'>
            <input class="add-img" id="changeImg" type="file">
            <label class="label-change" for="changeImg">
                <span class="change-img-span">Change photo</span>
            </label>
        </figure>
        <div class="title-name">
            <h1 class="profile-item" id="name" data-validate = "${translateText(translateCount, `Некоректне ім'я або призвище`, "Incorrect name or surname")}">${localStorageUser('name')} ${localStorageUser('surname')}</h1>
        </div>
        <div class="toggle">
            <input class="view_details dropdown-toggle" id="view_details" type="checkbox">
            <label for="view_details">☰</label>
        </div>
        <div class="mainen active">
            <dl class="list">
            <tr>
                <dt class= "profile-description" id="Login" key = "logins">${translateText(translateCount, 'Логін', "Login")}</dt>
                    <dd class="profile-item" id="login-item"  data-validate = "${translateText(translateCount, 'Має бути більше 6 символів та без !@#$%^&*?/,.', "Must be more than 6 characters and without !@#$%^&*?/,.")}" >${localStorageUser('userName')}</dd>
            </tr>
            <tr>        
                <dt class= "profile-description" id="age" key = "age">${translateText(translateCount, 'Вік', "Age")}</dt>
                    <dd class="profile-item" id="age-item"   data-validate = "${translateText(translateCount, 'Некоректний вік', "Incorrect age")}">${localStorageUser('age')} ${translateText(translateCount, 'років', 'old years')}</dd>
            </tr>
            <tr>   
                <dt class= "profile-description" id="sex" key = "sex">${translateText(translateCount, 'Стать', "Sex")}</dt>
                    <dd class="profile-item" id="sex-item">${userSelectParam(arrSex.value, 'sex', arrSex.text, )}</dd>
            </tr>
            <tr>        
                <dt class= "profile-description" id="height" key = "height">${translateText(translateCount, 'Зріст', "Height")}</dt>
                    <dd class="profile-item" id="height-item" data-validate = "${translateText(translateCount, 'Некоректний зріст', "Incorrect height")}">${localStorageUser('height')} ${userParam('heightParam', 'sm', 'см', 'sm', 'дюймів', 'inches')}</dd>
            </tr>
                    
            <tr>    
                <dt class= "profile-description" id="weight" key = "weight">${translateText(translateCount, 'Вага', "Weight")}</dt>
                    <dd class="profile-item" id="weight-item" data-validate = "${translateText(translateCount, 'Некоректна вага', "Incorrect weight")}">${localStorageUser('weight')} ${userParam('weightParam', 'kg', 'кг', 'kg', 'фунтів', 'pounds')}</dd>
            </tr>
            <tr>    
                <dt class= "profile-description" id="last-weight" key = "lastWeight">${translateText(translateCount, 'Останнє зважування', "Last weighing")}</dt>
                    <dd class="profile-item" id="last-weight-item">${localStorageUser('lastWeighing')}</dd>
            </tr>
            <tr>    
                <dt class= "profile-description" id="perfect-weight" key = "perfectWeight">${translateText(translateCount, 'Ідеальна вага', "Perfect weight")}</dt>
                    <dd class="profile-item" id="perfect-weight-item">${localStorageUser('perfectWeight')} ${userParam('weightParam', 'kg', 'кг', 'kg', 'фунтів', 'pounds')}</dd>
            </tr>
            <tr>    
                <dt class= "profile-description" id="wantWeight" key = "wantWeight">${translateText(translateCount, 'Бажана вага', "Want weight")}</dt>
                    <dd class="profile-item" id="want-weight-item" data-validate = "${translateText(translateCount, 'Некоректна вага', "Incorrect weight")}">${localStorageUser('wantWeight')} ${userParam('wantWeightParam', 'kg', 'кг', 'kg', 'фунтів', 'pounds')}</dd>
            </tr>
            <tr>
                <dt class= "profile-description" id="activ" key = "activ">${translateText(translateCount, 'Рівень активності', "Activity level")}</dt>
                    <dd class="profile-item" id="activ-item">${userSelectParam(arrActiv.value, 'active', arrActiv.text)}</dd>
            </tr>
            <tr>       
                <dt class= "profile-description" id="dataRegistr" key = "dataRegistr">${translateText(translateCount, 'Дата реєстрації', "Date of registration")}</dt>
                    <dd class="profile-item" id="regist-day-item" data-validate = "${translateText(translateCount, 'Не вірний формат (ДД/ММ/РР)', "Invalid format (DD/MM/YY)")}">${localStorageUser('dateRegist')}</dd>
            </tr>
            <tr>    
                <dt class= "profile-description" id="wantDay" key = "wantDay">${translateText(translateCount, 'Бажана дата схуднення', "Desired date to lose weight")}</dt>
                    <dd class="profile-item" id="want-day-item" data-validate = "${translateText(translateCount, 'Не вірний формат (ДД/ММ/РР)', "Invalid format (DD/MM/YY)")}"  >${localStorageUser('wantDate')}</dd> 
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
