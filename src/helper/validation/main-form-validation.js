import { formsData } from "../form-canculate/formTranformationData"
import { callArrLangPlaceholder } from "../translate/translate-array"
import { translateCount } from "../translate/translate"
const addOrRemoveAlertValidate = (flag, elem)=>{
    flag == false ? elem.classList.add('alert-validate') : elem.classList.remove('alert-validate')
}

const addEvent = (elem, func, elem2)=>{
    if (elem2) elem.addEventListener('focus', function(){ elem.addEventListener('keyup', func) })  
}
const addBlur = (elem, func)=>{elem.addEventListener('blur', func )  }


//Регулярна для возраста
const verAge = ()=>{
const regAge = /^[3-9]$|^[1-9][0-9]$/
const ageUser = formsData().age
const vereficationAge = ()=>{
    const ageForm = document.getElementById('age-input')
    console.log(callArrLangPlaceholder(translateCount))
    /* const key = ageForm.getAttribute('key')
    console.log(arrLangPlaceholder.uk[key]) */
    let flag = ''
    regAge.test(ageUser.value) ? (addOrRemoveAlertValidate(true, ageForm), flag = true) : (addOrRemoveAlertValidate(false, ageForm), flag = false);
    if (flag == false){
        addEvent(ageUser, vereficationAge, ageForm.classList.contains('alert-validate'))
        ageUser.value != '' && ageUser.value < 3 || ageUser.value > 99 ? ageForm.dataset.validate = 'Вище або нижче ліміту (3-99)' : ageForm.dataset.validate = 'Некоректний формат'
    }
}
addBlur(ageUser , vereficationAge)
}
//Регулярка для роста
const verHeight = ()=>{
const regHeight = /^([3-9][0-9])$|^1([0-9][0-9])$|^2([0-4][0-9])$|^250$/
const heightUser = formsData().height
const vereficationHeight = ()=>{
    let flag = ''
    const heightForm = document.getElementById('height-input')
    regHeight.test(heightUser.value) ? (addOrRemoveAlertValidate(true, heightForm), flag = true) : (addOrRemoveAlertValidate(false, heightForm), flag = false);
    if (flag == false){
        addEvent(heightUser, vereficationHeight, heightForm.classList.contains('alert-validate'))
        heightUser.value != '' && heightUser.value < 30 || heightUser.value > 299 ? heightForm.dataset.validate = 'Вище або нижче ліміту (30-250)' : heightForm.dataset.validate = 'Некоректний формат'
    }
}
addBlur(heightUser , vereficationHeight)
}
//Регулярка для веса
const verWeight = ()=>{
const regWeight = /^\d{2,3}([\.,][\d]){0,1}$/
const weightUser = formsData().weight
const vereficationWeight = ()=>{
    let flag = ''
    const weightForm = document.getElementById('weight-input')
    regWeight.test(weightUser.value) ? (addOrRemoveAlertValidate(true, weightForm), flag = true) : (addOrRemoveAlertValidate(false,weightForm), flag = false);
    if (flag == false){
        addEvent(weightUser, vereficationWeight, weightForm.classList.contains('alert-validate'))
        weightUser.value != '' && weightUser.value < 10 || weightUser.value > 999 ? weightForm.dataset.validate = 'Вище або нижче ліміту' : weightForm.dataset.validate = 'Некоректний формат'
    }
}
addBlur(weightUser , vereficationWeight)
}

//Валидация уровня активности


const verActiv= ()=>{
    const activLevel = document.getElementById('active-level')
    const vereficationActiv = ()=>{
        let flag = ''
        const activLevelForm = document.getElementById('activ-input')
        activLevel.value != 'choise' ? (addOrRemoveAlertValidate(true, activLevelForm), flag = true) : (addOrRemoveAlertValidate(false,activLevelForm), flag = false);
    }
    addBlur(activLevel, vereficationActiv)
}


//Валидация выбора пола

const verSex= ()=>{
    
    const sexUser = document.getElementById('sex')
    const vereficationSex = ()=>{
        let flag = ''
        const sexUserForm = document.getElementById('sex-input')
        sexUser.value != 'choise' ? (addOrRemoveAlertValidate(true, sexUserForm), flag = true) : (addOrRemoveAlertValidate(false, sexUserForm), flag = false);
    }
    addBlur(sexUser, vereficationSex)
}

//Валидация желаемых дней

const verWantDay = ()=>{
    const regWeight = /^\d+$/
    const wantDayUser = formsData().wantDay
    const vereficationWantDay = ()=>{
        let flag = ''
        const wantDayForm = document.getElementById('want-day-input')
        regWeight.test(wantDayUser.value) ? (addOrRemoveAlertValidate(true, wantDayForm), flag = true) : (addOrRemoveAlertValidate(false,wantDayForm), flag = false);
        if (flag == false)addEvent(wantDayUser, vereficationWantDay, wantDayForm.classList.contains('alert-validate'))
    }
    addBlur(wantDayUser , vereficationWantDay)
}

//Валидация желаймого веса

const verWantWeight = ()=>{
    const regWeight = /^\d{2,3}([\.,][\d]){0,1}$/
    const weightUser = formsData().wantWeight
    const vereficationWantWeight = ()=>{
    let flag = ''
    const weightForm = document.getElementById('want-weight-input')
    regWeight.test(weightUser.value) ? (addOrRemoveAlertValidate(true, weightForm), flag = true) : (addOrRemoveAlertValidate(false,weightForm), flag = false);
    if (flag == false){
        addEvent(weightUser, vereficationWantWeight, weightForm.classList.contains('alert-validate'))
        weightUser.value != '' && weightUser.value < 10 || weightUser.value > 999 ? weightForm.dataset.validate = 'Вище або нижче ліміту' : weightForm.dataset.validate = 'Некоректний формат'
    }
    addBlur(weightUser , vereficationWantWeight)
    }
}

const verAll = ()=>{
    verAge()
    verHeight()
    verWeight()
    verActiv()
    verSex()
    verWantWeight()
    verWantDay()
}
const valueVer = ()=>{
    const inputes = document.querySelectorAll('.input')
    let flagInput = ''
    const selectInputes =  document.querySelectorAll('.select-input')
    let flagSelectInput = ''
    for (let i = 0; i< inputes.length; i++){
        if (inputes[i].value == ""){
            flagInput = false
            inputes[i].parentElement.classList.add('alert-validate')
            break
        }else{flagInput = true}
    }
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

export {verAll, valueVer}