import { localStorageUser } from "../../../helper/account-scripts/user-data"
import { createBasketItems } from "../../../helper/food-script/basket-script"

const foodCount = ()=>{
    const count = localStorage.getItem('plateCount')
    if (!count && !localStorageUser('userName')) localStorage.setItem('plateCount', 0)
    const element = `
    <button class="plate-btn"><img src="https://img.icons8.com/ios/50/000000/tableware.png"/></button>
    <span class="plate-count">${count}</span>
    `
    const wrap = document.querySelector('.plate-wrap')
    wrap.innerHTML = ''
    wrap.innerHTML = element

    const plateBtn = document.querySelector('.plate-btn')
    plateBtn.addEventListener('click', ()=>{
        createBasketItems()
    })
}

export default foodCount