import { createElem } from "../../helper/createElement"
import { foodSelect } from "../../components/food/food-select/food-select"
import "./style"
const Foods = ()=>{
    const root = document.getElementById('root')
    const foodWrap = createElem('div', 'food-wrap', null, root)
    const foodContainer = createElem('div', 'food-container', null, foodWrap)
    createElem('div', 'food-chart-wrap', null, foodContainer)
    const foodSelects = createElem('div', 'food-select-wrap', null, foodContainer)
    createElem('div', 'food-select-container', null, foodSelects)
    foodSelect()
    createElem('div', 'food-element-wrap', null, foodSelects)
}

export default Foods