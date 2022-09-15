import { arrLangText } from "./translate-array"

const translateText = (index, textUK, TextEn)=> index == 'uk' ? textUK : TextEn
    
const getLang = ()=>localStorage.getItem('translateCount')

const TranslateTexts = (index, item)=>{
    
    const element = arrLangText[JSON.parse(index)][item]
    return element
}

export {translateText, TranslateTexts, getLang}