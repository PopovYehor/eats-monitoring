import { getLang, TranslateTexts } from "../../helper/translate/translateText"
const formInput = (name, wrap, value = '', type= false)=>{
    const input = document.createElement('input')
    input.className = 'input'
    input.type = type ? 'password' : 'text'
    input.name = name
    input.setAttribute('required', 'required')
    if (value) input.value = value
    wrap.prepend(input)
}

export default formInput