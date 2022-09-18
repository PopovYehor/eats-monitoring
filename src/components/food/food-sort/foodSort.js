import { getAllFood, getFoodSelect, getSelected } from "../../../helper/food-script/select-items-script"
import { selectParam } from "../../../helper/form-canculate/formChangeParametr"
import { getLang, TranslateTexts } from "../../../helper/translate/translateText"
import "./style"
const FoodSort = ()=>{
    const element = `
    <p class = "sort-title">${TranslateTexts(getLang(), 'sortBy')}</p>
    <select class= "food-sort-select">
    <option value = "textFromStart">${TranslateTexts(getLang(), 'textFromStart')}</option>
    <option value = "textFromEnd" >${TranslateTexts(getLang(), 'textFromEnd')}</option>
    <option value = "caloriesFromStart" >${TranslateTexts(getLang(), 'caloriesFromStart')}</option>
    <option value = "caloriesFromEnd" >${TranslateTexts(getLang(), 'caloriesFromEnd')}</option>
    <option value = "fatsFromStart" >${TranslateTexts(getLang(), 'fatsFromStart')}</option>
    <option value = "fatsFromEnd" >${TranslateTexts(getLang(), 'fatsFromEnd')}</option>
    <option value = "proteinFromStart" >${TranslateTexts(getLang(), 'proteinFromStart')}</option>
    <option value = "proteinFromEnd" >${TranslateTexts(getLang(), 'proteinFromEnd')}</option>
    <option value = "carbFromStart" >${TranslateTexts(getLang(), 'carbFromStart')}</option>
    <option value = "carbFromEnd">${TranslateTexts(getLang(), 'carbFromEnd')}</option>
    </select> 
    `
    const wrap = document.querySelector('.food-sort-wrap')
    wrap.innerHTML = element

    const select = document.querySelector('.food-sort-select')
    const selectFoodItems = document.querySelector('.food-select-item')
    

    select.addEventListener('change', ()=>{
        const selectedFooditem = selectParam(selectFoodItems).value
        if (selectedFooditem == 'choise') getAllFood();
        else if (selectedFooditem != 'choise' && selectedFooditem != 'selected')  getFoodSelect(selectParam(selectFoodItems).value);
    })
}

export default FoodSort