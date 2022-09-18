import moment from "moment"
import { formsData } from "../form-canculate/formTranformationData"
import { getLang,TranslateTexts } from "../translate/translateText"


//delete alert on input
const addEvent = (elem, func, elem2)=>{if (elem2) elem.addEventListener('focus', function(){ elem.addEventListener('keyup', func) })}
//adding a primary alert on blur
const addBlur = (elem, func)=> elem.addEventListener('blur', func )
//add or remove alert
const addOrRemoveAlertValidate = (flag, elem)=>flag == false ? elem.classList.add('alert-validate') : elem.classList.remove('alert-validate')
//regular expressions
const regArr = {
    login : /(?=[a-zа-яёі0-9]{6,})/im,
    password: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]{0,}).{8,}$/,
    name: /^([a-z]{1,}$)|^([а-яёіїє]{1,}$)/i,
    age: /^[3-9]$|^[1-9][0-9]$/,
    height: /^([3-9][0-9])$|^1([0-9][0-9])$|^2([0-4][0-9])$|^250$/,
    weight: /^\d{2,3}([\.,][\d]){0,1}$/,
    wantWeight: /^\d{2,3}([\.,][\d]){0,1}$/,
    wantDay: /^\d+$/,
    date: /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{2}$/,
    email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
}
//find regular expressions
const findReg = (item)=> regArr[item]

//function validation input
const veref = (elem, id, item)=>{
    const element = elem
    if (elem){
        const verefFunction = ()=>{
            const form = document.getElementById(id)
            let flag 
            findReg(item).test(element.value) ? (addOrRemoveAlertValidate(true, form), flag = true) : (addOrRemoveAlertValidate(false, form), flag = false)
            if(flag == false) {
                addEvent(element, verefFunction, form.classList.contains('alert-validate'))
                if(element.value == "") form.dataset.validate = TranslateTexts(getLang(), 'requiredField')
            }
        }
        addBlur(element, verefFunction)
    }
}
//function validation selects
const verefSelect = (elem,id, item)=>{
    const element = elem
    if (element){
        const verefecationFunction = ()=>{
            let flag 
            const form = document.getElementById(id)
            element.value != 'choise' ? (addOrRemoveAlertValidate(true, form), flag = true) : (addOrRemoveAlertValidate(false,form), flag = false)
        }
        addBlur(element, verefecationFunction)
    }
}

//vaidation repeat password
const verRepeatPassword = ()=>{
const repeatPassword = formsData().repeatPassword
if (repeatPassword){
    const vereficationRepeatPassword = ()=>{
        const repeatPasswordForm = document.getElementById('repeat-password-input')
        let flag 
        repeatPassword.value == formsData().pass.value ? (addOrRemoveAlertValidate(true, repeatPasswordForm), flag = true) : (addOrRemoveAlertValidate(false, repeatPasswordForm), flag = false);
        if (flag == false)addEvent(repeatPassword, vereficationRepeatPassword, repeatPasswordForm.classList.contains('alert-validate'))
    }
    addBlur(repeatPassword, vereficationRepeatPassword)
    }
}

//validation data select
const verDateSelect = (item, formID, condition1, condition2, minus = false)=>{
    if (item){
        const vereficationDateSelect = ()=>{
        let form = document.getElementById(formID)
        let flag
            if (item.nodeType == 1){
                let diffDate = moment().diff(item.value, 'days')
                if (diffDate < 0 && minus == true) diffDate*=(-1)
                diffDate >= condition1 && diffDate <= condition2 ? (addOrRemoveAlertValidate(true, form), flag = true) : (addOrRemoveAlertValidate(false, form), flag = false);
                if (flag == false)addEvent(item, vereficationDateSelect, form.classList.contains('alert-validate')) 
            }else{
                let diffDate = moment().diff(item.target.value, 'days')
                if (diffDate < 0 && minus) diffDate*=(-1)
                diffDate >= condition1 && diffDate <= condition2 ? (addOrRemoveAlertValidate(true, form), flag = true) : (addOrRemoveAlertValidate(false, form), flag = false);
                if (flag == false)addEvent(item.target, vereficationDateSelect, form.classList.contains('alert-validate'))
            }
        }
        if (item.nodeType == 1){
            addBlur(item, vereficationDateSelect)
        }else{
            addBlur(item.target, vereficationDateSelect)
        }
    }
}

//validation all inputes on main and sign up pages
const verAll = ()=>{
    veref(formsData().login,'login-input', 'login')
    veref(formsData().pass, 'password-input', 'password')
    verRepeatPassword()
    veref(formsData().email, 'email-input', 'email')
    veref(formsData().userName, 'name-input', 'name')
    veref(formsData().surname, 'surname-input', 'name')
    veref(formsData().age, 'age-input', 'age')
    verDateSelect(formsData().birdth, 'birdth-input', 1095, 36500)
    veref(formsData().height, 'height-input', 'height')
    veref(formsData().weight, 'weight-input', 'weight')
    veref(formsData().wantWeight, 'want-weight-input', 'wantWeight')
    veref(formsData().wantDay, 'want-day-input', 'wantDay')
    verDateSelect(formsData().wantDate, 'want-date-item', 1, 365, true)
    verefSelect(formsData().activeLevel, 'activ-input', 'activ')
    verefSelect(formsData().sex, 'sex-input', 'sex')
}

const findSelector = (tag)=> document.querySelector(tag)
//validation all inputes on account pages    
const validationAccount = ()=>{
    veref(findSelector('.name-item-input'), 'name', 'name')
    veref(findSelector('.surname-item-input'), 'name', 'name')
    veref(findSelector('.login-item-input'), 'login-item', 'login')
    veref(findSelector('.height-item-input'), 'height-item', 'height')
    veref(findSelector('.weight-item-input'), 'weight-item', 'weight')
    veref(findSelector('.want-weight-input'), 'want-weight-item', 'weight')
    veref(findSelector('.regist-day-input'), 'regist-day-item', 'date')
    veref(findSelector('.want-day-input'), 'want-day-item', 'date')

    verDateSelect(findSelector('.age-item-input'), 'age-item', 1095, 36500)
    verDateSelect(findSelector('.want-day-input'), 'want-day-item', 1, 365, true)
}
//validation food count input
const validationFoodCount = (id)=>{
    const caloriesInput = document.getElementById(`calories-input-${id}`)
    veref(caloriesInput, `calories-input-wrap-${id}`, 'wantDay')
}
//empty field check
const valueVer = (inputes)=>{

    let flagInput
    for (let i = 0; i< inputes.length; i++){
        if (inputes[i].value == ""){
            flagInput = false
            inputes[i].parentElement.classList.add('alert-validate')
            break
        }else{flagInput = true}
    }
    const selectInputes =  document.querySelectorAll('.select-input')
    let flagSelectInput
    for (let i = 0; i< selectInputes.length; i++){
        if (selectInputes[i].value == "choise"){
            flagSelectInput = false
            selectInputes[i].parentElement.classList.add('alert-validate')
            break
        }else{flagSelectInput = true}
    }
    
    let sumFlag 
    flagInput == true && flagSelectInput == true ? sumFlag = true : sumFlag = false
    return sumFlag
}

export {verAll, valueVer, validationAccount, validationFoodCount}