import createAllCharts from "../../components/main/charts/createAllCharts"
import {arrLangText, arrLangPlaceholder, arrLangValidate } from "./translate-array"
import {localStorageUser} from "../account-scripts/user-data"
import Foods from "../../views/foods"


let translateCount = setTimeout(()=>Number(localStorageUser('languageCount')), 500) || 0



const translate = ()=>{
    const placeHolders = document.querySelectorAll('.focus-input')
    const progressInput = document.querySelectorAll('.progress-input')
    const translateItem = document.querySelectorAll('.lang')
    const inputWrap = document.querySelectorAll('.wrap-input')
    const profileDescription = document.querySelectorAll('.profile-description')
    const translateBtn = document.querySelectorAll('.translate')
    const lastWeightItem = document.getElementById('last-weight-item')
    translateBtn.forEach(elem =>{
        elem.addEventListener('click',(e)=>{
            const target = e.target
            if (target.id == 'en'){
                translateCount = 1
                if (translateItem) translateItem.forEach(elem => elem.textContent = arrLangText.en[elem.getAttribute('key')])
                if (placeHolders) placeHolders.forEach(elem => elem.dataset.placeholder = arrLangPlaceholder.en[elem.getAttribute('key')])
                if (progressInput) progressInput.forEach(elem => elem.dataset.placeholder = arrLangPlaceholder.en[elem.getAttribute('key')])
                if (inputWrap) inputWrap.forEach(elem => elem.dataset.validate = arrLangValidate['en'][elem.getAttribute('key')])
                if (profileDescription) profileDescription.forEach(elem => {
                    elem.textContent = arrLangText.en[elem.getAttribute('key')]
                    if (elem.id == 'last-weight'){
                        elem.style.height = 55+ 'px'
                    }
                    })
            }
            if (target.id == 'uk'){
                translateCount = 0
                if (translateItem) translateItem.forEach(elem => elem.textContent = arrLangText.uk[elem.getAttribute('key')])
                if (placeHolders) placeHolders.forEach(elem => elem.dataset.placeholder = arrLangPlaceholder.uk[elem.getAttribute('key')])
                if (progressInput) progressInput.forEach(elem => elem.dataset.placeholder = arrLangPlaceholder.uk[elem.getAttribute('key')])
                if (inputWrap) inputWrap.forEach(elem => elem.dataset.validate = arrLangValidate.uk[elem.getAttribute('key')])
                if (profileDescription) profileDescription.forEach(elem => {
                    elem.textContent = arrLangText.uk[elem.getAttribute('key')]
                    if (elem.id == 'last-weight'){
                        elem.style.height = 55+ 'px'
                        lastWeightItem.style.height = 55+ 'px'
                    }
                    })

            }
            localStorage.setItem('languageCount', translateCount)
            const chartContainer = document.querySelector('.chart-container')
            const food = document.querySelector('.food-wrap')
            const userWrap = document.querySelector('.container-user')
            if(chartContainer) createAllCharts()
            if (food) Foods()
            if (userWrap){
                
            }
        })
    })
}



export {translate, translateCount}