import { createElem } from "../createElement"
import { selectParam } from "../form-canculate/formChangeParametr"
import FoodItem from "../../components/food/food-item"
import { createBasketItems } from "./basket-script"

const apiFoodSelect = 'https://api.json-generator.com/templates/RwH9OiVQglAB/data/'
const apiAllFoods = 'https://api.json-generator.com/templates/CLp6e4tG98eK/data'
const token = 'm7ysw5zozkwk8m7wakyk22o83d8sxsy7x3jdmdh8'

const createFoodItem =(elem,wrap)=>{
    createElem('div', 'food-item-wrap', null, wrap, 'id', `food-item-${elem.id}`)
    FoodItem(elem, elem.id)
}
const getFoodSelect = (item)=>{
    fetch(`${apiFoodSelect}?access_token=${token}`)
    .then(res => res.json())
    .then(res =>{
        const wrap = document.querySelector('.food-element-wrap')
        wrap.innerHTML = ''
        res[item].map(elem =>{
            createFoodItem(elem, wrap)
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
                createFoodItem(elem, wrap)
            })
        }else{
            res.filter(elem =>{
                if(translateCount == 0 && elem.ukText.toLowerCase() == searchInput.toLocaleLowerCase()){
                    createFoodItem(elem, wrap)
                }else if (translateCount == 1 && elem.enText.toLowerCase() == searchInput.toLocaleLowerCase()){
                    createFoodItem(elem, wrap)
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

        selectValue == 'selected' ? createBasketItems() : selectValue == 'choise' ? getAllFood() : getFoodSelect(selectValue)
    })
}


export {getSelected, getAllFood}