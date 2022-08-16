import {arrLangText, arrLangPlaceholder, arrLangValidate } from "./translate-array"

let translateCount = 0

const translate = ()=>{
    const placeHolders = document.querySelectorAll('.focus-input')
    const selectParam = document.querySelectorAll('.select-choise-param')
    const translateItem = document.querySelectorAll('.lang')
    console.log(translateItem)

    const translateBtn = document.querySelectorAll('.translate')
    translateBtn.forEach(elem =>{
        elem.addEventListener('click',(e)=>{
            const target = e.target
            if (target.id == 'en'){
                translateCount = 1
                translateItem.forEach(elem => elem.textContent = arrLangText.en[elem.getAttribute('key')])
                console.log(translateCount)
            }
            if (target.id == 'uk'){
                translateCount = 0
                translateItem.forEach(elem => elem.textContent = arrLangText.uk[elem.getAttribute('key')])
                console.log(translateCount)
            }
        })
    })
}
/* languageButton.forEach(function(elem){
    elem.addEventListener('click', function(e){
        let target = e.target
        if(target.id == 'en'){
            langItem.forEach(elem => elem.textContent = arrLangText['en'][elem.getAttribute('key')])
            focusInput.forEach(elem => elem.dataset.placeholder = arrLangPlaceholder['en'][elem.getAttribute('key')])
            inputWrap.forEach(elem => elem.dataset.validate = arrLangValidate['en'][elem.getAttribute('key')])
        }
        else if (target.id == 'uk'){
            langItem.forEach(elem => elem.textContent = arrLangText['uk'][elem.getAttribute('key')])
            focusInput.forEach(elem => elem.dataset.placeholder = arrLangPlaceholder['uk'][elem.getAttribute('key')])
            inputWrap.forEach(elem => elem.dataset.validate = arrLangValidate['uk'][elem.getAttribute('key')])
        }
    })
})
} */
export {translate, translateCount}