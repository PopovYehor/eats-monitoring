import { createElem } from "../../helper/createElement"
import { foodSelect } from "../../components/food/food-select/food-select"
import TotalFood from "../../components/food/food-total"
import { createChartCaloriesCount } from "../../components/food/caloriesChart/calorieschart"
import { createChartProteinCount } from "../../components/food/proteinsChart/protein-chart-food"
import "./style"
const Foods = ()=>{
    const root = document.getElementById('root')
    const foodWrap = document.querySelector('.food-wrap')
    if (foodWrap){
        foodWrap.innerHTML = ''
    }else{
        createElem('div', 'food-wrap', null, root)
    }
    const foodWrapper =  document.querySelector('.food-wrap')
    const foodContainer = createElem('div', 'food-container', null, foodWrapper)
    createElem('div', 'food-chart-wrap', null, foodContainer)
    const foodSelects = createElem('div', 'food-select-wrap', null, foodContainer)
    createElem('div', 'food-select-container', null, foodSelects)
    foodSelect()
    createElem('div', 'food-element-wrap', null, foodSelects)
    createElem('div', 'total-food-items', null, foodSelects)
    TotalFood()
    createChartCaloriesCount()
    createChartProteinCount()
}

export default Foods