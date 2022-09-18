import { createElem } from "../createElement"
import { selectParam } from "../form-canculate/formChangeParametr"
import FoodItem from "../../components/food/food-item"
import { createBasketItems } from "./basket-script"
import { paginationFood, paginationCreatingElement } from "./paginationFood"
import { getLang } from "../translate/translateText"
import Error from "../../views/error/Error"
import FoodSort from "../../components/food/food-sort/foodSort"

const apiFoodSelect = 'https://api.json-generator.com/templates/RwH9OiVQglAB/data/'
const apiAllFoods = 'https://api.json-generator.com/templates/CLp6e4tG98eK/data'
const token = 'm7ysw5zozkwk8m7wakyk22o83d8sxsy7x3jdmdh8'

const createFoodItem =(elem,wrap)=>{
    createElem('div', 'food-item-wrap', null, wrap, 'id', `food-item-${elem.id}`)
    FoodItem(elem, elem.id)
}

const switchSortFood = (res)=>{
    const foodSortSelect = document.querySelector('.food-sort-select')
    switch(selectParam(foodSortSelect).value){
        case 'textFromStart':
            if (getLang() == `"uk"`){
                res.sort((a, b)=>{if(a.ukText < b.ukText) return -1})
            } else{
                res.sort((a, b)=>{if(a.enText < b.enText) return -1})
            }
            break
        case 'textFromEnd' :
            if (getLang() == `"uk"`){
                res.sort((a, b)=>{if(b.ukText < a.ukText) return -1})
            } else{
                res.sort((a, b)=>{if(b.enText < a.enText) return -1})
            }
            break
        case 'caloriesFromStart' :
            res.sort((a,b)=> b.calories - a.calories)
            break
        case 'caloriesFromEnd' :
            res.sort((a,b)=> a.calories - b.calories)
            break
        case 'fatsFromStart' :
            res.sort((a,b)=> b.fats - a.fats)
            break
        case 'fatsFromEnd' :
            res.sort((a,b)=> a.fats - b.fats)
            break
        case 'proteinFromStart' :
            res.sort((a,b)=> b.protein - a.protein)
            break
        case 'proteinFromEnd' :
            res.sort((a,b)=> a.protein - b.protein)
            break
        case 'carbFromStart' :
            res.sort((a,b)=> b.carbonaries - a.carbonaries)
            break
        case 'carbFromEnd' :
            res.sort((a,b)=> a.carbonaries - b.carbonaries)
            break
    }
    return res
}

const getFoodSelect = (item)=>{
    fetch(`${apiFoodSelect}?access_token=${token}`)
    .then(res => res.json())
    .then(res =>{
        const wrap = document.querySelector('.food-element-wrap')
        wrap.innerHTML = ''
        const paginationWrap = document.querySelector('.food-pagination-wrap')
        paginationWrap.innerHTML = ''

        const selectFoodItem = document.querySelector('.food-select-item')
        const selectFoodItemValue = selectParam(selectFoodItem).value
        if (selectFoodItemValue != 'selected') switchSortFood(res[item])

        res[item].map(elem =>{
            createFoodItem(elem, wrap)
        })
    })
    .catch(()=>{
        root.innerHTML = ''
        window.history.pushState({}, '', '/error')
        window.route = Error()
    })
}



const getAllFood = (filter = null) =>{
    fetch(`${apiAllFoods}?access_token=${token}`)
    .then(res => res.json())
    .then(res =>{
        const wrap = document.querySelector('.food-element-wrap')
        const searchInput = document.querySelector('.search-food-input').value
        wrap.innerHTML = ''
        
        if (!filter)switchSortFood(res)

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
                if(getLang() == `"uk"` && elem.ukText.toLowerCase() == searchInput.toLocaleLowerCase()){
                    createFoodItem(elem, wrap)
                }else if (getLang() == `"en"` && elem.enText.toLowerCase() == searchInput.toLocaleLowerCase()){
                    createFoodItem(elem, wrap)
                }
            })
        }
    })
    .catch(()=>{
        root.innerHTML = ''
        window.history.pushState({}, '', '/error')
        window.route = Error()
    })
}

const getSelected = ()=>{
    const select = document.querySelector('.food-select-item')
    getAllFood()
    select.addEventListener('change', ()=>{
        const paginationWrap = document.querySelector('.food-pagination-wrap')
        paginationWrap.innerHTML = ""

        const sortFoodWrap = document.querySelector('.food-sort-wrap')
        if (!sortFoodWrap){
            const foodSelectContainer = document.querySelector('.food-select-container')
            createElem('div', 'food-sort-wrap', null, foodSelectContainer)
            FoodSort()
        } 

        const selectValue = selectParam(select).value

        selectValue == 'selected' ? createBasketItems() : selectValue == 'choise' ? getAllFood() : getFoodSelect(selectValue)
    })
}


export {getSelected, getAllFood, createFoodItem, getFoodSelect, switchSortFood}