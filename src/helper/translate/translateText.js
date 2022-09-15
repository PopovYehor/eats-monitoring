import { arrLangText } from "./translate-array"
const translateText = (index, textUK, TextEn)=>{
    let text = ''
    index == 0 ? text = textUK : text = TextEn
    return text
}
const getLang = ()=>localStorage.getItem('translateCount')

const TranslateTextes = (index, item)=>arrLangText[index][item]

export {translateText, TranslateTextes, getLang}