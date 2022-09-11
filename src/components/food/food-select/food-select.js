
import { getAllFood, getSelected } from "../../../helper/food-script/select-items-script"
import { translateText } from "../../../helper/translate/translateText"
import foodCount from "../food-count"
import "./style"

const foodSelect = ()=>{
    let translateCount = localStorage.getItem('languageCount')
    const elem =`
    <div class = "food-select-item-wrap">
        <select class =" food-select-item">
            <option class= "food-select-option" value = "choise" selected>${translateText(translateCount, 'Всі типи їжі', 'All types of food')}</option>
            <option class= "food-select-option" value = "alcohol">${translateText(translateCount, 'Алкогольні напої', 'Alcohol')}</option>
            <option class= "food-select-option" value = "nonAlcohol">${translateText(translateCount, 'Безалкогольні напої', 'Soft drinks')}</option>
            <option class= "food-select-option" value = "meat">${translateText(translateCount, `М'ясні продукти`, 'Meat products')}</option>
            <option class= "food-select-option" value = "fish">${translateText(translateCount, `Риба`, 'Fish')}</option>
            <option class= "food-select-option" value = "sausege">${translateText(translateCount, `Ковбасні вироби`, 'Sausage products')}</option>
            <option class= "food-select-option" value = "vegetables">${translateText(translateCount, `Овочі`, 'Vegetables')}</option>
            <option class= "food-select-option" value = "fruit">${translateText(translateCount, `Фрукти`, 'Fruits')}</option>
            <option class= "food-select-option" value = "porridge">${translateText(translateCount, `Каші`, 'Porridge')}</option>
            <option class= "food-select-option" value = "mashrooms">${translateText(translateCount, `Гриби`, 'Mashrooms')}</option>
            <option class= "food-select-option" value = "egg">${translateText(translateCount, `Яйця`, 'Eggs')}</option>
            <option class= "food-select-option" value = "nut">${translateText(translateCount, `Горіхи`, 'Nuts')}</option>
            <option class= "food-select-option" value = "milk">${translateText(translateCount, `Молочні вироби`, 'Milk products')}</option>
            <option class= "food-select-option" value = "oil">${translateText(translateCount, `Олія`, 'Оil')}</option>
            <option class= "food-select-option" value = "shugar">${translateText(translateCount, `Солодощі`, 'Sweets')}</option>
            <option class= "food-select-option" value = "bread">${translateText(translateCount, `Хлібні вироби`, 'Bread products')}</option>
            <option class= "food-select-option" value = "selected">${translateText(translateCount, `Обрані товари`, 'Selected products')}</option>
        </select>
     </div>
     <div class="search-food-item-wrap">
        <input class= "search-food-input" placeholder="${translateText(translateCount, 'Знайди продукт', 'Find a product')}" type ="text">
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