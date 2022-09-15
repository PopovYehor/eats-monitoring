
import { getAllFood, getSelected } from "../../../helper/food-script/select-items-script"
import {  TranslateTexts, getLang } from "../../../helper/translate/translateText"
import foodCount from "../food-count"
import "./style"

const foodSelect = ()=>{
    const elem =`
    <div class = "food-select-item-wrap">
        <select class =" food-select-item">
            <option class= "food-select-option" value = "choise" selected>${TranslateTexts(getLang(), 'AllTypes')}</option>
            <option class= "food-select-option" value = "alcohol">${TranslateTexts(getLang(), 'Alcohol')}</option>
            <option class= "food-select-option" value = "nonAlcohol">${TranslateTexts(getLang(), 'SoftDrinks')}</option>
            <option class= "food-select-option" value = "meat">${TranslateTexts(getLang(), 'Meat')}</option>
            <option class= "food-select-option" value = "fish">${TranslateTexts(getLang(), 'Fish')}</option>
            <option class= "food-select-option" value = "sausege">${TranslateTexts(getLang(), 'Sausage')}</option>
            <option class= "food-select-option" value = "vegetables">${TranslateTexts(getLang(), 'Vegetables')}</option>
            <option class= "food-select-option" value = "fruit">${TranslateTexts(getLang(), 'Fruits')}</option>
            <option class= "food-select-option" value = "porridge">${TranslateTexts(getLang(), 'Porridge')}</option>
            <option class= "food-select-option" value = "mashrooms">${TranslateTexts(getLang(), 'Mashrooms')}</option>
            <option class= "food-select-option" value = "egg">${TranslateTexts(getLang(), 'Eggs')}</option>
            <option class= "food-select-option" value = "nut">${TranslateTexts(getLang(), 'Nuts')}</option>
            <option class= "food-select-option" value = "milk">${TranslateTexts(getLang(), 'Milk')}</option>
            <option class= "food-select-option" value = "oil">${TranslateTexts(getLang(), 'Оil')}</option>
            <option class= "food-select-option" value = "shugar">${TranslateTexts(getLang(), 'Sweets')}</option>
            <option class= "food-select-option" value = "bread">${TranslateTexts(getLang(), 'Bread')}</option>
            <option class= "food-select-option" value = "selected">${TranslateTexts(getLang(), 'Selected')}</option>
        </select>
     </div>
     <div class="search-food-item-wrap">
        <input class= "search-food-input" placeholder="${TranslateTexts(getLang(), 'Find')}" type ="text">
        <span class="find-btn">&#xf002;</span>
     </div>
     <div class= "plate-wrap">
     </div>
    `
    const wrap = document.querySelector('.food-select-container')
    wrap.innerHTML = elem
    getSelected()
    foodCount()
    const btn = document.querySelector('.find-btn')
    btn.addEventListener('click', ()=>{
        const select = document.querySelector('.food-select-item')
        select.value = 'choise'
        getAllFood(true)
    })

}

export {foodSelect}