import { createElem } from "../../helper/createElement"
import { foodSelect } from "../../components/food/food-select/food-select"
import { createChartCaloriesCount } from "../../components/food/proteinChart/calorieschart"
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
    localStorage.setItem('calories', '1000')
    createChartCaloriesCount()
}

export default Foods