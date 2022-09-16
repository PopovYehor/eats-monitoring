
import {localStorageUser, user} from "./user-data"
import {createOption, createInput, createSelectParam, createElem} from "../createElement"
import { changeAccount } from "../form-scrypts/enterLogin"
import {validationAccount} from "../validation/main-form-validation"
import { sameHeightTable } from "./table-script"
import moment from "moment"
import Preloader from "../../components/preloader"
import { TranslateTexts, getLang } from "../translate/translateText"

const arrSex = ()=> {
    const arr = {
        value :['male', 'female'],
        text: [ TranslateTexts(getLang(), 'male'),TranslateTexts(getLang(), 'female')]
    }
    return arr
}
const arrActiv = ()=>{
    const arr = {
        value: ["none","low","middle","hight", "veryHight"],
        coef: [{none: 1.2}, {low: 1.375}, {middle: 1.55}, {hight: 1.725},{veryHight: 1.9}, ],
        text : [
            TranslateTexts(getLang(), 'none'),
            TranslateTexts(getLang(), 'low'),
            TranslateTexts(getLang(), 'middle'),
            TranslateTexts(getLang(), 'higth'), 
            TranslateTexts(getLang(), 'veryHight')
        ]
    }
    return arr
}

const addInputForChange = ()=>{
    const heightItem = document.getElementById('height-item')
    const weightItem = document.getElementById('weight-item')
    const wantWeightItem = document.getElementById('want-weight-item')
    const nameItem = document.getElementById('name')
    const loginItem = document.getElementById('login-item')
    const ageItem = document.getElementById('age-item')
    const sexItem = document.getElementById('sex-item')
    const activItem = document.getElementById('activ-item')
    const wantDate = document.getElementById('want-day-item')

    createInput('input', 'name-item-input item-input', null, localStorageUser('name'), nameItem, 'name')
    createInput('input', 'surname-item-input item-input', null, localStorageUser('surname'), nameItem, 'surname')
    createInput('input', 'height-item-input item-input', null, localStorageUser('height'), heightItem, 'height')
    createSelectParam('weight-choise-param', heightItem, 'sm', 'inches', TranslateTexts(getLang(), 'sm'),TranslateTexts(getLang(), 'inches'),localStorageUser('heightParam'), 'heightParam')
    createInput('input', 'weight-item-input item-input', null, localStorageUser('weight'), weightItem, 'weight')
    createSelectParam('weight-choise-param', weightItem, 'kg', 'pounds', TranslateTexts(getLang(), 'kg'),TranslateTexts(getLang(), 'pound'), localStorageUser('weightParam'), 'weightParam' )
    createInput('input', 'login-item-input item-input', null, localStorageUser('userName'), loginItem, 'userName')
    createInput('input', 'age-item-input item-input', null, localStorageUser('age'), ageItem, 'age')
    createInput('input', 'want-weight-input item-input', null, localStorageUser('wantWeight'), wantWeightItem, 'wantWeight')
    createSelectParam('want-weight-choise-param', wantWeightItem, 'kg', 'pounds',TranslateTexts(getLang(), 'kg'),TranslateTexts(getLang(), 'pound'), localStorageUser('wantWeightParam'), 'wantWeightParam' )
    createInput('input', 'want-day-input item-input', null, localStorageUser('wantDate'), wantDate, 'wantDate')
    
    let selectSex = createInput('select', 'select-sex select-item', null, null, sexItem, 'sex')
    arrSex().value.forEach((elem, i) => createOption('sex-item lang', elem, arrSex().text[i], selectSex, localStorageUser('sex')))

    let selectActive = createInput('select', 'select-active select-item', null, null, activItem, 'active')
    arrActiv().value.forEach((elem, i)=>{createOption('activ-item lang', elem , arrActiv().text[i] , selectActive, localStorageUser('active'))})
    
}

//change photo profile
const loadFile = (event)=> {
    const profileImg = document.querySelector('.img-profile')
    profileImg.src = URL.createObjectURL(event.target.files[0]);
    localStorage.setItem('photo', JSON.stringify(profileImg.src))
    fetch(profileImg.src).then(r => r.blob()).then(blobFile =>{
         let files = new File([blobFile], `avatarUser-${localStorageUser('id')}`, { type: "image/png" })
        })
}

const changeProfileData = (profile, addImgInput, labelChangePhoto, changeBtn, profileItem)=>{
    profile.classList.add('change')
    addImgInput.addEventListener('change', (e)=>{loadFile(e)})
    profileItem.forEach(elem =>{ if(elem.id != 'regist-day-item' && elem.id != 'perfect-weight-item' && elem.id != 'last-weight-item') elem.textContent = ''})
    labelChangePhoto.classList.add('active')
    addInputForChange()
    sameHeightTable()
    validationAccount()
    changeBtn.textContent = TranslateTexts(getLang(), 'save')
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
            localStorage.setItem('selectedItem', JSON.stringify([]))
            localStorage.setItem('plateCount', JSON.stringify(0))
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