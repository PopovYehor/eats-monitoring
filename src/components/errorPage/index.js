import { TranslateTexts, getLang } from "../../helper/translate/translateText"
import "./style"
const errorPage = ()=>{
    const element = `
    <div class = "error-page-wrap">
    <span class= "error-page-text">${TranslateTexts(getLang(), 'error')} :(</span>
    </div>
    `
    const wrap = document.querySelector('.error-wrap')
    wrap.innerHTML= element
}

export default errorPage