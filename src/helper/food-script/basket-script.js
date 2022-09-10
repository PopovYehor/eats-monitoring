import { createElem } from "../createElement";
import { createChartCaloriesCount } from "../../components/food/caloriesChart/calorieschart";
import foodCount from "../../components/food/food-count";
import TotalFood from "../../components/food/food-total";
import { createChartProteinCount } from "../../components/food/proteinsChart/protein-chart-food";
import basketItem from "../../components/food/food-item/basket-item";

const setTotalFoodItem = (data, dataItem, defDataItem, perscent, item)=>{
    const dataCalories = data[dataItem]
    const defCalories = data[defDataItem]*perscent
    const changeCalories = dataCalories-defCalories
    const calories = localStorage.getItem(item)
    const totalCalories = Number(calories) + Number(changeCalories)
    localStorage.setItem(item, totalCalories)
}

const deleteTotalFoodItem = (data, item, dataItem)=>{
    const calories = localStorage.getItem(item)
    const deleteCalories = data[dataItem]
    const totalCalories = Number(calories) + Number(deleteCalories)
    localStorage.setItem(item, totalCalories)
}

const removePlantCount = ()=>{
    const foodCounts = localStorage.getItem('plateCount')
    const addCount = Number(foodCounts)-1
    localStorage.setItem('plateCount', addCount)
    foodCount()
}

const deleteFoodItem = (data)=>{
    const selectedItems = JSON.parse(localStorage.getItem('selectedItem'))
    const withoutItem = selectedItems.filter(elem => elem.id !=  data.id)
    localStorage.setItem('selectedItem', JSON.stringify(withoutItem))

    const wrap = document.querySelector('.food-element-wrap')
    wrap.innerHTML = ''
    withoutItem.map(elem =>{
        createElem('div', 'food-item-wrap', null, wrap, 'id', `food-item-${elem.id}`)
        basketItem(elem, elem.id)
    })

    deleteTotalFoodItem(data, 'calories', 'calories')
    deleteTotalFoodItem(data, 'protein', 'protein')
    deleteTotalFoodItem(data, 'fats', 'fats')
    deleteTotalFoodItem(data, 'carbohydrates', 'carbonaries')
    createChartCaloriesCount()
    createChartProteinCount()

    removePlantCount()
    TotalFood()
}

const changeFoodItem = (data, id)=>{
    const selectedItems = JSON.parse(localStorage.getItem('selectedItem'))
    const input = document.getElementById(`calories-input-${id}`).value
    const perscent = Number(input)/100
    selectedItems.forEach(elem =>{
        if (elem.name == data.name){
            elem.value = Number(input)
            elem.calories = elem.defCalories*perscent
            elem.carbonaries = elem.defCarbonaries*perscent
            elem.fats = elem.defFats*perscent
            elem.protein = elem.defProtein*perscent
            selectedItems.map(item => item.name == data.name ? elem : item)
            localStorage.setItem('selectedItem', JSON.stringify(selectedItems))
        }
    })
    const changeSlectedItem = JSON.parse(localStorage.getItem('selectedItem'))
    const wrap = document.querySelector('.food-element-wrap')
    wrap.innerHTML = ''
    changeSlectedItem.map(elem =>{
        createElem('div', 'food-item-wrap', null, wrap, 'id', `food-item-${elem.id}`)
        basketItem(elem, elem.id)
    })
    setTotalFoodItem(data, 'calories', 'defCalories', perscent, 'calories')
    setTotalFoodItem(data, 'protein', 'defProtein', perscent, 'protein')
    setTotalFoodItem(data, 'fats', 'defFats', perscent, 'fats')
    setTotalFoodItem(data, 'carbonaries', 'defCarbonaries', perscent, 'carbohydrates')

    createChartCaloriesCount()
    createChartProteinCount()
    TotalFood()
}

const createBasketItems = ()=>{
    const selectedItem = JSON.parse(localStorage.getItem('selectedItem'))
    const wrap = document.querySelector('.food-element-wrap')
    const select = document.querySelector('.food-select-item')
    if (selectedItem.length > 0){
        wrap.innerHTML = ''
        const paginationWrap = document.querySelector('.food-pagination-wrap')
        paginationWrap.innerHTML = ""
        selectedItem.map(elem =>{
            select.value = 'selected'
            createElem('div', 'food-item-wrap', null, wrap, 'id', `food-item-${elem.id}`)
            basketItem(elem, elem.id)
        })
    }
}


export {changeFoodItem, deleteFoodItem, createBasketItems}