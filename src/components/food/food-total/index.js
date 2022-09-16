
import {  TranslateTexts, getLang } from "../../../helper/translate/translateText"
import "./style"
localStorage.setItem('totalCalories', 0)
localStorage.setItem('totalProtein', 0)
localStorage.setItem('totalFats', 0)
localStorage.setItem('totalCarbohydrates', 0)

const total = (item, objectItem)=>item.reduce((accumulator, object) => {return accumulator + object[objectItem]}, 0)

const TotalFood = ()=>{

    let calories = localStorage.getItem('totalCalories')
    let protein = localStorage.getItem('totalProtein')
    let fats = localStorage.getItem('totalFats')
    let carbohydrates = localStorage.getItem('totalCarbohydrates')

    const selectedItem = JSON.parse(localStorage.getItem('selectedItem'))
    if(selectedItem.length > 0) {
        calories = total(selectedItem, 'calories')
        protein = total(selectedItem, 'protein')
        fats = total(selectedItem, 'fats')
        carbohydrates = total(selectedItem, 'carbonaries')
    }
    
    const element = `
    <div class="total-food-container">
        <div class="total-item" id="total-calories">
            <sapn class="total-text">${TranslateTexts(getLang(), 'TotalCalories')}</sapn>
            <sapn class="total-count" id="total-calories">${calories || 0}</sapn>
        </div>
        <div class="total-item" id="total-calories">
            <sapn class="total-text">${TranslateTexts(getLang(), 'Proteins')}</sapn>
            <sapn class="total-count" id="total-protein">${protein || 0}</sapn>
        </div>
        <div class="total-item" id="total-calories">
            <sapn class="total-text" >${TranslateTexts(getLang(), 'Fats')}</sapn>
            <sapn class="total-count" id="total-fats">${fats || 0}</sapn>
        </div>
        <div class="total-item" id="total-calories">
            <sapn class="total-text">${TranslateTexts(getLang(), 'Carbohydrates')}</sapn>
            <sapn class="total-count" id="total-carbohydrates">${carbohydrates || 0}</sapn>
        </div>
    </div>
    `
    const wrap = document.querySelector('.total-food-items')
    wrap.innerHTML = ''
    wrap.innerHTML = element
}

export default TotalFood