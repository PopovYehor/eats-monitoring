import createAllCharts from "../../components/main/charts/createAllCharts"
import {arrLangText, arrLangPlaceholder, arrLangValidate } from "./translate-array"
import Food from "../../components/food"
import { createAllChartsUser } from "../../components/account/charts/createAllChartsUser"
import HeaderSwitch from "../../components/header/login"
const translate = ()=>{
    const placeHolders = document.querySelectorAll('.focus-input')
    const progressInput = document.querySelectorAll('.progress-input')
    const inputWrap = document.querySelectorAll('.wrap-input')
    const profileDescription = document.querySelectorAll('.profile-description')
    const translateBtn = document.querySelectorAll('.translate')
    
    translateBtn.forEach(elem =>{
        elem.addEventListener('click',(e)=>{
            const translateItem = document.querySelectorAll('.lang')
            const target = e.target
            if (target.id == 'en'){
                localStorage.setItem('languageCount', 1)
                if (translateItem) translateItem.forEach(elem =>{
                    const text = arrLangText.en[elem.getAttribute('key')]
                    if (elem.classList.contains('profile-item')) {elem.textContent = text.replace(/\((.*?)\)/, '')}
                    else {elem.textContent = text}
                })
                if (placeHolders) placeHolders.forEach(elem => elem.dataset.placeholder = arrLangPlaceholder.en[elem.getAttribute('key')])
                if (progressInput) progressInput.forEach(elem => elem.dataset.placeholder = arrLangPlaceholder.en[elem.getAttribute('key')])
                if (inputWrap) inputWrap.forEach(elem => elem.dataset.validate = arrLangValidate['en'][elem.getAttribute('key')])
                if (profileDescription) profileDescription.forEach(elem => {elem.textContent = arrLangText.en[elem.getAttribute('key')]})
            }
            if (target.id == 'uk'){
                localStorage.setItem('languageCount', 0)
                if (translateItem) translateItem.forEach(elem =>{
                    const text = arrLangText.uk[elem.getAttribute('key')]
                    if (elem.classList.contains('profile-item')) {elem.textContent = text.replace(/\((.*?)\)/, '')}
                    else {elem.textContent = text}
                })
                if (placeHolders) placeHolders.forEach(elem => elem.dataset.placeholder = arrLangPlaceholder.uk[elem.getAttribute('key')])
                if (progressInput) progressInput.forEach(elem => elem.dataset.placeholder = arrLangPlaceholder.uk[elem.getAttribute('key')])
                if (inputWrap) inputWrap.forEach(elem => elem.dataset.validate = arrLangValidate.uk[elem.getAttribute('key')])
                if (profileDescription) profileDescription.forEach(elem => {elem.textContent = arrLangText.uk[elem.getAttribute('key')]})
            }

            const chartContainer = document.querySelector('.chart-container')
            const food = document.querySelector('.food-wrap')
            const userWrap = document.querySelector('.container-user')
            const headerLogin = document.getElementById('route-menu')
            if (headerLogin) HeaderSwitch()
            if(chartContainer) createAllCharts()
            if (food) Food()
            if (userWrap) createAllChartsUser()
        })
    })
}



export {translate}