import { translateCount, translateText } from "../../../helper/translate/translate"
import { selectParam } from "../../../helper/form-canculate/formChangeParametr"
import { createElem } from "../../../helper/createElement"
import FoodItem from "../food-item"

import "./style"
const apiFoodSelect = 'https://api.json-generator.com/templates/RwH9OiVQglAB/data/'
const apiAllFoods = 'https://api.json-generator.com/templates/CLp6e4tG98eK/data'
const token = 'm7ysw5zozkwk8m7wakyk22o83d8sxsy7x3jdmdh8'
const getFoodSelect = (item)=>{
    fetch(`${apiFoodSelect}?access_token=${token}`)
    .then(res => res.json())
    .then(res =>{
        const wrap = document.querySelector('.food-element-wrap')
        wrap.innerHTML = ''
        res[item].map(elem =>{
            createElem('div', 'food-item-wrap', null, wrap, 'id', `food-item-${elem.id}`)
            FoodItem(elem, elem.id)
        })
    })
}
const getAllFood = (filter = null) =>{
    fetch(`${apiAllFoods}?access_token=${token}`)
    .then(res => res.json())
    .then(res =>{
        const wrap = document.querySelector('.food-element-wrap')
        const searchInput = document.querySelector('.search-food-input').value
        wrap.innerHTML = ''
        if(!filter){
            res.map(elem =>{
                createElem('div', 'food-item-wrap', null, wrap, 'id', `food-item-${elem.id}`)
                FoodItem(elem, elem.id)
            })
        }else{
            res.filter(elem =>{
                if(translateCount == 0){
                    if (elem.ukText.toLowerCase() == searchInput.toLocaleLowerCase()){
                        if (elem){
                        createElem('div', 'food-item-wrap', null, wrap, 'id', `food-item-${elem.id}`)
                        FoodItem(elem, elem.id)
                        }
                    }
                }else{
                    if (elem.enText.toLowerCase() == searchInput.toLocaleLowerCase()){
                        if (elem){
                        createElem('div', 'food-item-wrap', null, wrap, 'id', `food-item-${elem.id}`)
                        FoodItem(elem, elem.id)
                        }
                    }
                } 
            })
        }
        
    })
}

const getSelected = ()=>{
    const select = document.querySelector('.food-select-item')
    getAllFood()
    
    select.addEventListener('change', ()=>{
        const selectValue = selectParam(select).value
        if (selectValue == 'selected'){
            const selectedItem = JSON.parse(localStorage.getItem('selectedItem'))
            console.log(selectedItem)
            const wrap = document.querySelector('.food-element-wrap')
            wrap.innerHTML = ''
            selectedItem.map(elem =>{
                createElem('div', 'food-item-wrap', null, wrap, 'id', `food-item-${elem.id}`)
                FoodItem(elem, elem.id)
            })
        }else{
            selectValue == 'choise' ? getAllFood() : getFoodSelect(selectValue)
        }
    })
}



const foodSelect = ()=>{
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
            <option class = "food-select-option" value = "selected"> ${translateText(translateCount, `Обрані продукти`, 'Selected products')}</option>
        </select>
     </div>
     <div class="search-food-item-wrap">
        <input class= "search-food-input" placeholder="${translateText(translateCount, 'Знайди продукт', 'Find a product')}" type ="text">
        <span class="find-btn">&#xf002;</span>
     </div>
    `
    const wrap = document.querySelector('.food-select-container')
    wrap.innerHTML = elem
    getSelected()
    const btn = document.querySelector('.find-btn')
    btn.addEventListener('click', ()=>{
        const select = document.querySelector('.food-select-item')
        select.value = 'choise'
        getAllFood(true)})
}

export {foodSelect}