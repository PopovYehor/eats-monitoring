import { createElem } from "../../helper/createElement"
import { foodSelect } from "./food-select/food-select"
import TotalFood from "./food-total"
import { createChartCaloriesCount } from "./caloriesChart/calorieschart"
import { createChartProteinCount } from "./proteinsChart/protein-chart-food"
import "./style"
import { localStorageUser } from "../../helper/account-scripts/user-data"



const Food = ()=>{
    const root = document.getElementById('root')
    const foodWrap = document.querySelector('.food-wrap')
    if (foodWrap){
        foodWrap.innerHTML = ''
    }else{
        createElem('div', 'food-wrap', null, root)
    }
    const plateCount = localStorageUser('plateCount')
    const selectItem = localStorageUser('selectedItem')

    if (!selectItem) localStorage.setItem('selectedItem', JSON.stringify([]))
    if (!plateCount) localStorage.setItem('plateCount', 0)


    const foodWrapper =  document.querySelector('.food-wrap')
    const foodContainer = createElem('div', 'food-container', null, foodWrapper)
    createElem('div', 'food-chart-wrap', null, foodContainer)
    const foodSelects = createElem('div', 'food-select-wrap', null, foodContainer)
    createElem('div', 'food-select-container', null, foodSelects)
    foodSelect()
    createElem('div', 'food-element-wrap', null, foodSelects)
    createElem('div', 'food-pagination-wrap', null, foodSelects)
    createElem('div', 'total-food-items', null, foodSelects)
    TotalFood()
    createChartCaloriesCount()
    createChartProteinCount()
}

export default Food