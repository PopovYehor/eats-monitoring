
import { getAllFood, getSelected } from "../../../helper/food-script/select-items-script"
import {  TranslateTextes, getLang } from "../../../helper/translate/translateText"
import foodCount from "../food-count"
import "./style"

const foodSelect = ()=>{
    const elem =`
    <div class = "food-select-item-wrap">
        <select class =" food-select-item">
            <option class= "food-select-option" value = "choise" selected>${TranslateTextes(getLang(), 'AllTypes')}</option>
            <option class= "food-select-option" value = "alcohol">${TranslateTextes(getLang(), 'Alcohol')}</option>
            <option class= "food-select-option" value = "nonAlcohol">${TranslateTextes(getLang(), 'SoftDrinks')}</option>
            <option class= "food-select-option" value = "meat">${TranslateTextes(getLang(), 'Meat')}</option>
            <option class= "food-select-option" value = "fish">${TranslateTextes(getLang(), 'Fish')}</option>
            <option class= "food-select-option" value = "sausege">${TranslateTextes(getLang(), 'Sausage')}</option>
            <option class= "food-select-option" value = "vegetables">${TranslateTextes(getLang(), 'Vegetables')}</option>
            <option class= "food-select-option" value = "fruit">${TranslateTextes(getLang(), 'Fruits')}</option>
            <option class= "food-select-option" value = "porridge">${TranslateTextes(getLang(), 'Porridge')}</option>
            <option class= "food-select-option" value = "mashrooms">${TranslateTextes(getLang(), 'Mashrooms')}</option>
            <option class= "food-select-option" value = "egg">${TranslateTextes(getLang(), 'Eggs')}</option>
            <option class= "food-select-option" value = "nut">${TranslateTextes(getLang(), 'Nuts')}</option>
            <option class= "food-select-option" value = "milk">${TranslateTextes(getLang(), 'Milk')}</option>
            <option class= "food-select-option" value = "oil">${TranslateTextes(getLang(), 'Оil')}</option>
            <option class= "food-select-option" value = "shugar">${TranslateTextes(getLang(), 'Sweets')}</option>
            <option class= "food-select-option" value = "bread">${TranslateTextes(getLang(), 'Bread')}</option>
            <option class= "food-select-option" value = "selected">${TranslateTextes(getLang(), 'Selected')}</option>
        </select>
     </div>
     <div class="search-food-item-wrap">
        <input class= "search-food-input" placeholder="${TranslateTextes(getLang(), 'Find')}" type ="text">
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