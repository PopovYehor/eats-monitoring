import { formsData } from "../form-canculate/formTranformationData"
import { getLang,TranslateTextes } from "../translate/translateText"

const addEvent = (elem, func, elem2)=>{
    if (elem2) elem.addEventListener('focus', function(){ elem.addEventListener('keyup', func) })  
}
const addBlur = (elem, func)=>{elem.addEventListener('blur', func )  }


const addOrRemoveAlertValidate = (flag, elem)=>{
    flag == false ? elem.classList.add('alert-validate') : elem.classList.remove('alert-validate')
}

const regArr = {
    login : /(?=[a-zа-яёі0-9]{5,})/im,
    password: /((?=.*([a-z]|[а-яё]))(?=.*([A-Z]|[А-ЯЁ]))(?=.*\d)(?=.*[!@#$%^&*]{0,})){8,}/,
    name: /^([A-Z]{1})([a-z]{1,}$)|^([А-ЯЁІЇЄ]{1})([а-яёіїє]{1,}$)/,
    age: /^[3-9]$|^[1-9][0-9]$/,
    height: /^([3-9][0-9])$|^1([0-9][0-9])$|^2([0-4][0-9])$|^250$/,
    weight: /^\d{2,3}([\.,][\d]){0,1}$/,
    wantWeight: /^\d{2,3}([\.,][\d]){0,1}$/,
    wantDay: /^\d+$/,
    date: /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{2}$/,
    email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
}

const findReg = (item)=>{
    let regEx = ''
    regEx = regArr[item]
    return regEx
}
const veref = (elem, id, item)=>{

    const element = elem
    if (elem){
        const verefFunction = ()=>{
            const form = document.getElementById(id)
            let flag = ''
            findReg(item).test(element.value) ? (addOrRemoveAlertValidate(true, form, item), flag = true) : (addOrRemoveAlertValidate(false, form, item), flag = false)
            if(flag == false) {
                addEvent(element, verefFunction, form.classList.contains('alert-validate'))
                if(element.value == "") form.dataset.validate = TranslateTextes(getLang(), 'requiredField')
            }
        }
        addBlur(element, verefFunction)
    }
}
const verefSelect = (elem,id, item)=>{
    const element = elem
    if (element){
        const verefecationFunction = ()=>{
            let flag = ''
            const form = document.getElementById(id)
            element.value != 'choise' ? (addOrRemoveAlertValidate(true, form, item), flag = true) : (addOrRemoveAlertValidate(false,form, item), flag = false)
        }
        addBlur(element, verefecationFunction)
    }
}

//повтор пароля
const verRepeatPassword = ()=>{
const repeatPassword = formsData().repeatPassword
if (repeatPassword){
    const vereficationRepeatPassword = ()=>{
        const repeatPasswordForm = document.getElementById('repeat-password-input')
        let flag = ''
        repeatPassword.value == formsData().pass.value ? (addOrRemoveAlertValidate(true, repeatPasswordForm, 'repeatPassword'), flag = true) : (addOrRemoveAlertValidate(false, repeatPasswordForm, 'repeatPassword'), flag = false);
        if (flag == false)addEvent(repeatPassword, vereficationRepeatPassword, repeatPasswordForm.classList.contains('alert-validate'))
    }
    addBlur(repeatPassword, vereficationRepeatPassword)
    }
}

//Регулярка для веса
/* const verWeight = ()=>{
const regWeight = /^\d{2,3}([\.,][\d]){0,1}$/
const weightUser = formsData().weight
const vereficationWeight = ()=>{
    let flag = ''
    const weightForm = document.getElementById('weight-input')
    regWeight.test(weightUser.value) ? (addOrRemoveAlertValidate(true, weightForm, 'weight'), flag = true) : (addOrRemoveAlertValidate(false,weightForm, 'weight'), flag = false);
    if (flag == false){
        addEvent(weightUser, vereficationWeight, weightForm.classList.contains('alert-validate'))
        weightUser.value != '' && weightUser.value < 10 || weightUser.value > 999 ? weightForm.dataset.validate = 'Вище або нижче ліміту' : weightForm.dataset.validate = 'Некоректний формат'
        
    }
}
addBlur(weightUser , vereficationWeight)
} */





const verAll = ()=>{
    veref(formsData().login,'login-input', 'login')
    veref(formsData().pass, 'password-input', 'password')
    verRepeatPassword()
    veref(formsData().email, 'email-input', 'email')
    veref(formsData().userName, 'name-input', 'name')
    veref(formsData().surname, 'surname-input', 'name')
    veref(formsData().age, 'age-input', 'age')
    veref(formsData().height, 'height-input', 'height')
    veref(formsData().weight, 'weight-input', 'weight')
    veref(formsData().wantWeight, 'want-weight-input', 'wantWeight')
    veref(formsData().wantDay, 'want-day-input', 'wantDay')
    verefSelect(formsData().activeLevel, 'activ-input', 'activ')
    verefSelect(formsData().sex, 'sex-input', 'sex')
}

const findSelector = (tag)=>{
    const element = document.querySelector(tag)
    return element
}
const validationAccount = ()=>{
    veref(findSelector('.name-item-input'), 'name', 'name')
    veref(findSelector('.surname-item-input'), 'name', 'name')
    veref(findSelector('.login-item-input'), 'login-item', 'login')
    veref(findSelector('.age-item-input'), 'age-item', 'age')
    veref(findSelector('.height-item-input'), 'height-item', 'height')
    veref(findSelector('.weight-item-input'), 'weight-item', 'weight')
    veref(findSelector('.want-weight-input'), 'want-weight-item', 'weight')
    veref(findSelector('.regist-day-input'), 'regist-day-item', 'date')
    veref(findSelector('.want-day-input'), 'want-day-item', 'date')
}

const validationFoodCount = (id)=>{
    const caloriesInput = document.getElementById(`calories-input-${id}`)
    veref(caloriesInput, `calories-input-wrap-${id}`, 'wantDay')
}

const valueVer = (inputes)=>{

    let flagInput = ''
    for (let i = 0; i< inputes.length; i++){
        if (inputes[i].value == ""){
            flagInput = false
            inputes[i].parentElement.classList.add('alert-validate')
            break
        }else{flagInput = true}
    }
    const selectInputes =  document.querySelectorAll('.select-input')
    let flagSelectInput = ''
    for (let i = 0; i< selectInputes.length; i++){
        if (selectInputes[i].value == "choise"){
            flagSelectInput = false
            selectInputes[i].parentElement.classList.add('alert-validate')
            break
        }else{flagSelectInput = true}
    }
    
    let sumFlag = ''
    flagInput == true && flagSelectInput == true ? sumFlag = true : sumFlag = false
    return sumFlag
}

export {verAll, valueVer, validationAccount, validationFoodCount}