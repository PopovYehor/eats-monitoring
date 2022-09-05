import { translateCount, translateText } from "../../../helper/translate/translate"
import { selectParam } from "../../../helper/form-canculate/formChangeParametr"
import { createElem } from "../../../helper/createElement"
import "./style"
const apiFood = 'https://api.json-generator.com/templates/RwH9OiVQglAB/data/'
const token = 'm7ysw5zozkwk8m7wakyk22o83d8sxsy7x3jdmdh8'
const getFood = (item)=>{
    fetch(`${apiFood}?access_token=${token}`)
    .then(res => res.json())
    .then(res =>{
        res[item].map(elem =>{
            const wrap = document.querySelector('.food-element-wrap')
            createElem('li', 'item', elem.name, wrap)
        })
    })
}

const getSelected = ()=>{
    const select = document.querySelector('.food-select-item')
    select.addEventListener('change', ()=>{
        const selectValue = selectParam(select).value
        getFood(selectValue)
    })
}

const foodSelect = ()=>{
    const elem =`
     <select class =" food-select-item">
        <option class= "food-select-option" value = "choise" selected disabled>${translateText(translateCount, 'Оберіть тип їжі', 'Select the type of food')}</option>
        <option class= "food-select-option" value = "alcohol">${translateText(translateCount, 'Алкогольні напої', 'Alcohol')}</option>
        <option class= "food-select-option" value = "nonAlcohol">${translateText(translateCount, 'Безалкогольні напої', 'Soft drinks')}</option>
        <option class= "food-select-option" value = "meat">${translateText(translateCount, `М'ясні продукти`, 'Meat products')}</option>
        <option class= "food-select-option" value = "fish">${translateText(translateCount, `Риба`, 'Fish')}</option>
        <option class= "food-select-option" value = "sausege">${translateText(translateCount, `Ковбасні вироби`, 'Sausage products')}</option>
        <option class= "food-select-option" value = "vegetables">${translateText(translateCount, `Овочі`, 'Vegetables')}</option>
        <option class= "food-select-option" value = "fruit">${translateText(translateCount, `Фрукти`, 'Fruits')}</option>
        <option class= "food-select-option" value = "porride">${translateText(translateCount, `Каші`, 'Porridge')}</option>
        <option class= "food-select-option" value = "mashrooms">${translateText(translateCount, `Гриби`, 'Mashrooms')}</option>
        <option class= "food-select-option" value = "egg">${translateText(translateCount, `Яйця`, 'Eggs')}</option>
        <option class= "food-select-option" value = "nut">${translateText(translateCount, `Горіхи`, 'Nuts')}</option>
        <option class= "food-select-option" value = "milk">${translateText(translateCount, `Молочні вироби`, 'Milk products')}</option>
        <option class= "food-select-option" value = "oil">${translateText(translateCount, `Олія`, 'Оil')}</option>
        <option class= "food-select-option" value = "shugar">${translateText(translateCount, `Солодощі`, 'Sweets')}</option>
        <option class= "food-select-option" value = "bread">${translateText(translateCount, `Хлібні вироби`, 'Bread products')}</option>
     </select>
    `
    const wrap = document.querySelector('.food-select-container')
    wrap.innerHTML = elem
    getSelected()
}

export {foodSelect}