import { createElem } from "../../../helper/createElement"
import basketItem from "../food-item/basket-item"
const foodCount = ()=>{
    const count = localStorage.getItem('plateCount')
    const element = `
    <button class="plate-btn"><img src="https://img.icons8.com/ios/50/000000/tableware.png"/></button>
    <span class="plate-count">${count}</span>
    `
    const wrap = document.querySelector('.plate-wrap')
    wrap.innerHTML = ''
    wrap.innerHTML = element

    const plateBtn = document.querySelector('.plate-btn')
    plateBtn.addEventListener('click', ()=>{
        const selectedItem = JSON.parse(localStorage.getItem('selectedItem'))
        const wrap = document.querySelector('.food-element-wrap')
        wrap.innerHTML = ''
        selectedItem.map(elem =>{
            createElem('div', 'food-item-wrap', null, wrap, 'id', `food-item-${elem.id}`)
            basketItem(elem, elem.id)
        })
    })
}

export default foodCount