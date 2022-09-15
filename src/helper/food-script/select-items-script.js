import { createElem } from "../createElement"
import { selectParam } from "../form-canculate/formChangeParametr"
import FoodItem from "../../components/food/food-item"
import { createBasketItems } from "./basket-script"
import { paginationFood, paginationCreatingElement } from "./paginationFood"
import { getLang } from "../translate/translateText"


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
        const paginationWrap = document.querySelector('.food-pagination-wrap')
        paginationWrap.innerHTML = ''
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

        paginationFood.item = res
        paginationFood.page = 1
        paginationFood.offset = 10
        const sliceRes = res.slice((paginationFood.offset-paginationFood.limit), paginationFood.offset)

        if(!filter){
            sliceRes.map(elem => createFoodItem(elem, wrap))
            const paginationWrap = document.querySelector('.food-pagination-wrap')
            paginationWrap.innerHTML = ""
            paginationCreatingElement()
        }else{
            res.filter(elem =>{
                const paginationWrap = document.querySelector('.food-pagination-wrap')
                paginationWrap.innerHTML = ""
                if(getLang() == 'uk' && elem.ukText.toLowerCase() == searchInput.toLocaleLowerCase()){
                    createFoodItem(elem, wrap)
                }else if (getLang() == 'en' && elem.enText.toLowerCase() == searchInput.toLocaleLowerCase()){
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
        const paginationWrap = document.querySelector('.food-pagination-wrap')
        paginationWrap.innerHTML = ""
        const selectValue = selectParam(select).value

        selectValue == 'selected' ? createBasketItems() : selectValue == 'choise' ? getAllFood() : getFoodSelect(selectValue)
    })
}


export {getSelected, getAllFood, createFoodItem}