import {translateText, translateCount} from "../translate/translate"
import {createOption, createInput, createSelectParam} from "../createElement"
import {localStorageUser} from "./user-data"
import {account} from "../../components/account/index"





const arrSex = {
    value :['male', 'female']
        ,
    text: [ translateText(translateCount,'Чоловік', 'Male'),translateText(translateCount,'Жінка', 'Female')]
}
const arrActiv = {
    value: ["none","low","middle","hight", "veryHight"],
    text : [translateText(translateCount,'Малорухливий спосіб життя', 'Sedentary lifestyle'),
    translateText(translateCount,'Мала активність (1-3 тренування на тиждень)', 'Low activity (1-3 workouts per week)'),
    translateText(translateCount,'Середня активність (3-5 тренувань на тиждень)', 'Moderate activity (3-5 training sessions per week)'),
    translateText(translateCount,'Висока активність (5-7 тренувань на тиждень)', 'High activity (5-7 training sessions per week)'), 
    translateText(translateCount,'Дуже висока активність', 'Very high activity')
    ]
}

const user = [
    {id: localStorageUser('id') || 0},
    {userName: localStorageUser('userName') || ''},
    {name: localStorageUser('name') || ''},
    {surname: localStorageUser('surname') || ''},
    {sex: localStorageUser('sex') || ''},
    {age: localStorageUser('age') || ''},
    {height: localStorageUser('height') || ''},
    {heightParam: localStorageUser('heightParam') || ''},
    {weight: localStorageUser('weight') || ''},
    {weightParam: localStorageUser('weightParam') || ''},
    {wantWeight: localStorageUser('wantWeight') || ''},
    {wantWeightParam: localStorageUser('wantWeightParam') || ''},
    {active: localStorageUser('active') || ''},
    {photo: localStorageUser('photo') || ''},
    {dateRegist: localStorageUser('dateRegist') || ''},
    {wantDate: localStorageUser('wantDate') || ''},
    {languageCount: localStorageUser('languageCount') || ''},
]

const userObjectValue = (keys)=>{
    let element = ''
    user.forEach(elem => {if (Object.keys(elem) == keys) element = Object.values(elem)})
    return element
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
    const dateReist = document.getElementById('regist-day-item')
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
    createInput('input', 'regist-day-input item-input', null, userObjectValue('dateRegist'), dateReist, 'dateRegist')
    createInput('input', 'want-day-input item-input', null, userObjectValue('wantDate'), wantDate, 'wantDate')
    
    let selectSex = createInput('select', 'select-sex select-item', null, null, sexItem, 'sex')
    arrSex.value.forEach((elem, i) => createOption('sex-item', elem, arrSex.text[i], selectSex, userObjectValue('sex')))

    let selectActive = createInput('select', 'select-active select-item', null, null, activItem, 'active')
    arrActiv.value.forEach((elem, i)=>{createOption('activ-item', elem , arrActiv.text[i] , selectActive, userObjectValue('active'))})
    
}
const sameHeightTable = ()=>{
    const profileDescription = document.querySelectorAll('.profile-description')
    const profileItem = document.querySelectorAll('.profile-item')
    const active = document.getElementById('activ')
    profileDescription.forEach((elem , i) => {
        elem.style.height = profileItem[i+1].getBoundingClientRect().height + 'px'
        if (active.style.height == `${72.1719}px`) {
            active.style.height = 109+'px'
        }
        })
    }


const loadFile = (event)=> {
    const profileImg = document.querySelector('.img-profile')
    profileImg.src = URL.createObjectURL(event.target.files[0]);
    fetch(profileImg.src).then(r => r.blob()).then(blobFile =>{
         let files = new File([blobFile], `avatarUser-${localStorageUser('id')}`, { type: "image/png" })
        })
    
}

const changeProfileData = (profile, addImgInput, labelChangePhoto, changeBtn, profileItem)=>{
    profile.classList.add('change')
    addImgInput.addEventListener('change', (e)=>{loadFile(e)})
    profileItem.forEach(elem => elem.textContent = '')
    labelChangePhoto.classList.add('active')
    addInputForChange()
    sameHeightTable()
    changeBtn.textContent = 'Save'
}

const saveProfileData = (profile, labelChangePhoto, changeBtn, profileItem, addImgInput)=>{
    const itemInput = document.querySelectorAll('.item-input')
    if (itemInput.length > 0) {
        profile.classList.remove('change')
        labelChangePhoto.classList.remove('active')
        changeBtn.textContent = 'Change'
        if (addImgInput) addImgInput.removeEventListener('change', (e)=>loadFile(e))
        profileItem.forEach(elem=> {
            const child = elem.childNodes
        if(child[0].nodeName == 'INPUT' || child[0].nodeName == 'SELECT'){ 
            for (let i = 0; i< user.length; i++){
                if (child[0].getAttribute('key') == Object.keys(user[i])){
                    const UserValue = child[0].getAttribute('key')
                    user[i][UserValue] = child[0].value
                }
            }
        }
        if (child[1] != undefined){
            for (let i = 0; i< user.length; i++){
                if (child[1].getAttribute('key') == Object.keys(user[i])){
                    const UserValue = child[1].getAttribute('key')
                    user[i][UserValue] = child[1].value
                }
            }
        }
        })
        user.forEach(elem => {
            localStorage.setItem(`${Object.keys(elem)}`, Object.values(elem))
        })
        profile.innerHTML = ''
        account()
        sameHeightTable()
    }
}

const changeAccountData = (e)=>{

    const changeBtn = document.querySelector('.changeBtn')
    const profile = document.querySelector('.profile')
    const profileItem = document.querySelectorAll('.profile-item')
    const addImgInput = document.querySelector('.add-img')
    const labelChangePhoto = document.querySelector('.label-change')
    const target = e.target
    if (target.textContent == 'Change'){
        changeProfileData(profile, addImgInput, labelChangePhoto, changeBtn, profileItem)
    }else{
        saveProfileData(profile, labelChangePhoto, changeBtn, profileItem, addImgInput)
    }
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
            saveProfileData(profile, labelChangePhoto, changeBtn, profileItem)
        }
        })
    }

export {upAccount, changeAccountData, arrSex, arrActiv, sameHeightTable}