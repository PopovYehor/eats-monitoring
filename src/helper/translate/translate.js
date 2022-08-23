import createAllCharts from "../../components/main/charts/createAllCharts"
import {arrLangText, arrLangPlaceholder, arrLangValidate } from "./translate-array"
import {localStorageUser} from "../account-scripts/user-data"
let translateCount = Number(localStorageUser('languageCount')) || 0

const translate = ()=>{
    const placeHolders = document.querySelectorAll('.focus-input')
    const progressInput = document.querySelectorAll('.progress-input')
    const translateItem = document.querySelectorAll('.lang')
    const inputWrap = document.querySelectorAll('.wrap-input')

    const translateBtn = document.querySelectorAll('.translate')
    translateBtn.forEach(elem =>{
        elem.addEventListener('click',(e)=>{
            const target = e.target
            if (target.id == 'en'){
                translateCount = 1
                translateItem.forEach(elem => elem.textContent = arrLangText.en[elem.getAttribute('key')])
                placeHolders.forEach(elem => elem.dataset.placeholder = arrLangPlaceholder.en[elem.getAttribute('key')])
                progressInput.forEach(elem => elem.dataset.placeholder = arrLangPlaceholder.en[elem.getAttribute('key')])
                inputWrap.forEach(elem => elem.dataset.validate = arrLangValidate['en'][elem.getAttribute('key')])
            }
            if (target.id == 'uk'){
                translateCount = 0
                translateItem.forEach(elem => elem.textContent = arrLangText.uk[elem.getAttribute('key')])
                placeHolders.forEach(elem => elem.dataset.placeholder = arrLangPlaceholder.uk[elem.getAttribute('key')])
                progressInput.forEach(elem => elem.dataset.placeholder = arrLangPlaceholder.uk[elem.getAttribute('key')])
                inputWrap.forEach(elem => elem.dataset.validate = arrLangValidate.uk[elem.getAttribute('key')])
            }
            localStorage.setItem('languageCount', translateCount)
            const chartContainer = document.querySelector('.chart-container')
            if(chartContainer) createAllCharts()
        })
    })
}

const translateText = (index, textUK, TextEn)=>{
    let text = ''
    index == 0 ? text = textUK : text = TextEn
    return text
}

export {translate, translateCount, translateText}