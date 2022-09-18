import { createElem } from "../createElement"
import {  TranslateTexts, getLang } from "../translate/translateText"
import { createFoodItem } from "./select-items-script"

const paginationFood = {
    item: [],
    limit: 10,
    offset: 10,
    page: 1
}

const pagination = (elem, equal)=>{
    const pages = document.querySelector('.page-count')
    if (elem.classList.contains('next')){
        paginationFood.page = paginationFood.page + 1
        pages.textContent = paginationFood.page
        paginationFood.offset = paginationFood.offset + paginationFood.limit
    }
    if (elem.classList.contains('prev')){
        if(paginationFood.page > equal){
            paginationFood.page = paginationFood.page - 1
            pages.textContent = paginationFood.page
            paginationFood.offset = paginationFood.offset - paginationFood.limit
            }else{
                paginationFood.page = equal 
            }
    }
}

const paginationCreatingElement = ()=>{

    const paginationWrap = document.querySelector('.food-pagination-wrap')
    createElem('div', 'prev btn-pag', `${ TranslateTexts(getLang(), 'Prev')}`, paginationWrap)
    createElem('span', 'page-count', `${paginationFood.page}`, paginationWrap)
    createElem('div', 'next btn-pag', `${TranslateTexts(getLang(), 'Next')}`, paginationWrap)

    const btnPagType = document.querySelectorAll('.btn-pag')
    btnPagType.forEach(elem => elem.addEventListener('click', ()=>{
        pagination(elem, 1)
        const foodElementsWrap = document.querySelector('.food-element-wrap')
        foodElementsWrap.innerHTML = ''
        const sliceRes = paginationFood.item.slice((paginationFood.offset-paginationFood.limit), paginationFood.offset)
        sliceRes.map(element =>createFoodItem(element, foodElementsWrap))
        window.scrollTo({top:0, left: `${window.innerWidth/2}px`, behavior: 'smooth'})
    }))
}

export {paginationFood, paginationCreatingElement}