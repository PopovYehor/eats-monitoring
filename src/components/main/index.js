import "./style.scss"
import "./newStyle"
import createAllCharts from "./charts/createAllCharts"
import { verAll, valueVer} from "../../helper/validation/main-form-validation"
import { placeholderClickUp, placeholderUp, selectHasVal } from "../../helper/form-scrypts/placeholderUp"
import { onHandleRoute } from "../../helper/route"
import { defheight, formsData } from "../../helper/form-canculate/formTranformationData"
import { selectParam } from "../../helper/form-canculate/formChangeParametr"
import { TranslateTexts, getLang } from "../../helper/translate/translateText"
import { createElem } from "../../helper/createElement"
import formWrap from "../formItem/formWrap"
import formInput from "../formItem/formInput"
import sexSelect from "../formItem/sex/sexSelect"
import heightForm from "../formItem/height/heightForm"
import weightForm from "../formItem/weight/weightForm"
import activeForm from "../formItem/active/activeForm"
const mainComponent = ()=>{
    //form
    const wrap = document.querySelector('.limiter')
    const mainContainer = createElem('div', 'container-login', null, wrap)
    const mainWrap = createElem('div', 'wrap-main', null, mainContainer, 'id', 'main-wrapper')
    const form  = createElem ('form', 'login-form validate-form', null, mainWrap, 'id', 'singUpForm')
    form.setAttribute('name', 'singUpForm')
    createElem('span', 'login-form-title', 'Eats Monitoring', form)
    //sex
    const sexSelectWrap = createElem('div', null, null, form, 'id', 'sexSelectWrap')
    sexSelect(sexSelectWrap)
    //age
    const ageWrapper = createElem('div', null, null, form, 'id', 'ageWrapper')
    const ageWrap = formWrap('age-input', 'age', 'ageValidate', ageWrapper, 'age', true)
    formInput('age', ageWrap)
    //height
    const heightWrapper = createElem('div', null, null, form, 'id', 'heightSelectWrap')
    heightForm(heightWrapper)
    //weight
    const weightWrapper = createElem('div', null, null, form, 'id', 'weightWrapper')
    weightForm(weightWrapper, 'weight-input', 'weight', 'weight', 'choiseWeight', 'weight')
    //activ
    const activWrapper = createElem('div', null, null, form, 'id', 'activWrapper')
    activeForm(activWrapper)
    //wantWeight
    const wantWeightWrapper = createElem('div', null, null, form, 'id', 'wantWeightWrapper')
    weightForm(wantWeightWrapper, 'want-weight-input', 'wantWeight', 'wantWeight', 'wantWeightSelect', 'wantWeight')
    //wantDay
    const wantDayWrapper = createElem('div', null, null, form, 'id', 'wantDayWrapper')
    const wantDayWrap = formWrap('want-day-input', 'wantDay', 'dateValidation', wantDayWrapper, 'wantDayNumber', true)
    formInput('wantDay', wantDayWrap)
    //canculateBtn
    const containerLoginFormBtn = createElem('div', 'container-login-form-btn', null, form)
    const wrapLoginFormBtn = createElem('div', 'wrap-login-form-btn', null, containerLoginFormBtn)
    createElem('div', 'login-form-bgbtn', null, wrapLoginFormBtn)
    const calcBtn = createElem('button', 'login-form-btn lang', TranslateTexts(getLang(), 'calculate'),wrapLoginFormBtn , 'key', 'calculate')
    calcBtn.type = 'button'
    const registerMassageWrap = createElem('div', 'register-massage-wrap', null, containerLoginFormBtn)
    const massageText = `<p class = "register-massage" ><a class = "register-massage-link lang" href = "/signUp" key = "registerLink">${TranslateTexts(getLang(), 'registerLink')}</a> <span class = "lang" key = "massageLink">${TranslateTexts(getLang(), 'massageLink')}</span></p>`
    registerMassageWrap.innerHTML = massageText

    placeholderUp()
    placeholderClickUp()
    selectHasVal()
    verAll()
    
    const signUpBtn = document.querySelector('.register-massage-link')
    signUpBtn.addEventListener('click', (e)=>onHandleRoute(e))
    
    calcBtn.addEventListener('click', ()=>{
      const dontValid = document.querySelectorAll('.alert-validate')
      const inputes = document.querySelectorAll('.input')
      if (valueVer(inputes) == true && dontValid.length == 0){
          defheight()
          sessionStorage.setItem('selectHeight',selectParam(formsData().choiseHeight).value)
          sessionStorage.setItem('selectWeight',selectParam(formsData().choiseWeight).value)
          sessionStorage.setItem('selectWantWeight',selectParam(formsData().wantWeightSelect).value)
          createAllCharts()
        }
    })
}

export {mainComponent}