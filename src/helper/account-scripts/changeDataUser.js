
import {localStorageUser, userObjectValue, user} from "./user-data"
import {createOption, createInput, createSelectParam, createElem} from "../createElement"
import { changeAccount } from "../form-scrypts/enterLogin"
import {validationAccount} from "../validation/main-form-validation"
import { sameHeightTable } from "./table-script"
import moment from "moment"
import Preloader from "../../components/preloader"
import { translateText } from "../translate/translateText"
let translateCount = localStorage.getItem('languageCount')
const arrSex = {
    value :['male', 'female'],
    text: [ translateText(translateCount,'Чоловік', 'Male'),translateText(translateCount,'Жінка', 'Female')]
}
const arrActiv = {
    value: ["none","low","middle","hight", "veryHight"],
    coef: [{none: 1.2}, {low: 1.375}, {middle: 1.55}, {hight: 1.725},{veryHight: 1.9}, ],
    text : [translateText(translateCount,'Малорухливий спосіб життя', 'Sedentary lifestyle'),
    translateText(translateCount,'Мала активність (1-3 тренування на тиждень)', 'Low activity (1-3 workouts per week)'),
    translateText(translateCount,'Середня активність (3-5 тренувань на тиждень)', 'Moderate activity (3-5 training sessions per week)'),
    translateText(translateCount,'Висока активність (5-7 тренувань на тиждень)', 'High activity (5-7 training sessions per week)'), 
    translateText(translateCount,'Дуже висока активність', 'Very high activity')
    ]
}

const addInputForChange = ()=>{
    let translateCount = localStorage.getItem('languageCount')
    const heightItem = document.getElementById('height-item')
    const weightItem = document.getElementById('weight-item')
    const wantWeightItem = document.getElementById('want-weight-item')
    const nameItem = document.getElementById('name')
    const loginItem = document.getElementById('login-item')
    const ageItem = document.getElementById('age-item')
    const sexItem = document.getElementById('sex-item')
    const activItem = document.getElementById('activ-item')
    const wantDate = document.getElementById('want-day-item')

    createInput('input', 'name-item-input item-input', null, userObjectValue('name'), nameItem, 'name')
    createInput('input', 'surname-item-input item-input', null, userObjectValue('surname'), nameItem, 'surname')
    createInput('input', 'height-item-input item-input', null, userObjectValue('height'), heightItem, 'height')
    createSelectParam('weight-choise-param', heightItem, 'sm', 'inches', translateText(translateCount, 'См', 'Sm'),translateText(translateCount, 'Дюйми', 'Inches'),userObjectValue('heightParam'), 'heightParam')
    createInput('input', 'weight-item-input item-input', null, userObjectValue('weight'), weightItem, 'weight')
    createSelectParam('weight-choise-param', weightItem, 'kg', 'pounds', translateText(translateCount, 'Кг', 'Kg'),translateText(translateCount, 'Фунти', 'Pounds'), userObjectValue('weightParam'), 'weightParam' )
    createInput('input', 'login-item-input item-input', null, userObjectValue('userName'), loginItem, 'userName')
    createInput('input', 'age-item-input item-input', null, userObjectValue('age'), ageItem, 'age')
    createInput('input', 'want-weight-input item-input', null, userObjectValue('wantWeight'), wantWeightItem, 'wantWeight')
    createSelectParam('want-weight-choise-param', wantWeightItem, 'kg', 'pounds', translateText(translateCount, 'Кг', 'Kg'),translateText(translateCount, 'Фунти', 'Pounds'), userObjectValue('wantWeightParam'), 'wantWeightParam' )
    createInput('input', 'want-day-input item-input', null, userObjectValue('wantDate'), wantDate, 'wantDate')
    
    let selectSex = createInput('select', 'select-sex select-item', null, null, sexItem, 'sex')
    arrSex.value.forEach((elem, i) => createOption('sex-item', elem, arrSex.text[i], selectSex, userObjectValue('sex')))

    let selectActive = createInput('select', 'select-active select-item', null, null, activItem, 'active')
    arrActiv.value.forEach((elem, i)=>{createOption('activ-item', elem , arrActiv.text[i] , selectActive, userObjectValue('active'))})
    
}



const loadFile = (event)=> {
    const profileImg = document.querySelector('.img-profile')
    profileImg.src = URL.createObjectURL(event.target.files[0]);
    fetch(profileImg.src).then(r => r.blob()).then(blobFile =>{
         let files = new File([blobFile], `avatarUser-${localStorageUser('id')}`, { type: "image/png" })
        })
    
}

const changeProfileData = (profile, addImgInput, labelChangePhoto, changeBtn, profileItem)=>{
    let translateCount = localStorage.getItem('languageCount')
    profile.classList.add('change')
    addImgInput.addEventListener('change', (e)=>{loadFile(e)})
    profileItem.forEach(elem =>{ if(elem.id != 'regist-day-item' && elem.id != 'perfect-weight-item' && elem.id != 'last-weight-item') elem.textContent = ''})
    labelChangePhoto.classList.add('active')
    addInputForChange()
    sameHeightTable()
    validationAccount()
    changeBtn.textContent = translateText(translateCount, 'Зберегти', 'Save')
}

const saveWeight = (wightInput)=>{
    let weightDataDete = localStorageUser('dataDate')
    const today = moment().format('DD/MM/YY')
    weightDataDete.push(today)
    localStorage.setItem('dataDate', JSON.stringify(weightDataDete))
    localStorage.setItem('lastWeighing', JSON.stringify(today))
    user.dataDate = weightDataDete
    user.lastWeighing = today

    let weightData = localStorageUser('dataWeight')
    weightData.push(wightInput)
    localStorage.setItem('dataWeight', JSON.stringify(weightData))
    user.dataWeight = weightData
}

const saveInputData = (child, i)=>{
    const keyInput = child[i].getAttribute('key')
    const valueInput = child[i].value
    user[keyInput] = valueInput   
    localStorage.setItem(keyInput, JSON.stringify(valueInput))
}

const saveProfileData = (profile, labelChangePhoto, changeBtn, profileItem, addImgInput)=>{
    const itemInput = document.querySelectorAll('.item-input')
    if (itemInput.length > 0 ) {
        profile.classList.remove('change')
        labelChangePhoto.classList.remove('active')
        changeBtn.textContent = 'Change'
        if (addImgInput){ addImgInput.removeEventListener('change', (e)=>loadFile(e))}
        const wightInput = document.querySelector('.weight-item-input').value
        if (wightInput != localStorageUser('weight')) {
            saveWeight(wightInput)
        }
        profileItem.forEach(elem=> {
            const child = elem.childNodes
            if(child[0].nodeName == 'INPUT' || child[0].nodeName == 'SELECT'){
                saveInputData(child, 0)
            }
            if (child[1] != undefined){
                saveInputData(child, 1)
            }

        })
            profile.innerHTML = ''
            const preloaderWrap = createElem('div', 'profile-preloader-wrap', null, profile)
            Preloader(preloaderWrap)
            changeAccount(user, (user.id)) 
    }
}

const changeAccountData = ()=>{

    const changeBtn = document.querySelector('.changeBtn')
    const profile = document.querySelector('.profile')
    const profileItem = document.querySelectorAll('.profile-item')
    const addImgInput = document.querySelector('.add-img')
    const labelChangePhoto = document.querySelector('.label-change')
    const alert = document.querySelectorAll('.alert-validate')

    if (!changeBtn.classList.contains('change')){
        changeProfileData(profile, addImgInput, labelChangePhoto, changeBtn, profileItem)
        changeBtn.classList.add('change')
    }else if (alert.length == 0 && changeBtn.classList.contains('change')){
        saveProfileData(profile, labelChangePhoto, changeBtn, profileItem, addImgInput)
        changeBtn.classList.remove('change')
    }
}



export { changeAccountData, arrActiv, arrSex}