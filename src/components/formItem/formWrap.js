import { TranslateTexts, getLang } from "../../helper/translate/translateText"

const formWrap = (id, key, validate, wrap, keyPlace, select = false)=>{
    const element = 
    !select ? `
    <div class="wrap-input validate-input" id = '${id}' key = '${key}' data-validate="${TranslateTexts(getLang(), validate)}">
    <span class= 'select-item'></span>
    `
    :
    `
    <div class="wrap-input validate-input" id = '${id}' key = '${key}' data-validate="${TranslateTexts(getLang(), validate)}">
    <span class= "focus-input"   key =  '${keyPlace}' data-placeholder="${TranslateTexts(getLang(), keyPlace)}"></span>
    </div>`
    wrap.innerHTML = element
    const wrapper = document.getElementById(id)
    return wrapper
}

export default formWrap