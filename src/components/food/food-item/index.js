
import { addFoodItem } from "../../../helper/food-script/add-item-script"
import { validationFoodCount } from "../../../helper/validation/main-form-validation"
import "./style"
import { TranslateTextes, getLang } from "../../../helper/translate/translateText"



const FoodItem = (data, id)=>{
    const elemName = getLang() == 'uk' ? data.ukText : data.enText;
    const element = `
    <div class = "food-item-container">
        <div class= "food-item-img-wrap">
            <img class = "food-item-img" src = "${data.img || "https://t3.ftcdn.net/jpg/03/35/13/14/360_F_335131435_DrHIQjlOKlu3GCXtpFkIG1v0cGgM9vJC.jpg"}"></img>
        </div>
        <div class="food-item-name-wrap">
            <span class="food-item-name">${elemName}</span>
        </div>
        <div class ="calories-count-wrap">
            <div class ="calories-count">
                <span class="caloties-item-title" id="total-calories-title">${TranslateTextes(getLang(), 'TotalCalories')}</span>
                <span class= "caloties-item-data" id="total-calories">${data.calories}</span>
            </div>
            <div class ="calories-count">
                <span class="caloties-item-title">${TranslateTextes(getLang(), 'Fats')}</span>
                <span class= "caloties-item-data" id="total-fats">${data.fats}</span>
            </div>
            <div class ="calories-count">
                <span class="caloties-item-title">${TranslateTextes(getLang(), 'Proteins')}</span>
                <span class= "caloties-item-data" id="total-protein">${data.protein}</span>
            </div>
            <div class ="calories-count">
                <span class="caloties-item-title">${TranslateTextes(getLang(), 'Carbohydrates')}</span>
                <span class= "caloties-item-data" id="total-carbohydrates">${data.carbonaries}</span>
            </div>
        </div>
        <div class= "calories-input-wrap" id ="calories-input-wrap-${id}" data-validate= "${TranslateTextes(getLang(), 'EnterNumber')}">
            <input class= "calories-input" type="text" id = "calories-input-${id}" value = ${data.value || "100"}>
            <span class= "calories-input-desc">${TranslateTextes(getLang(), 'grams')}</span>
        </div>
        <div class="calories-add-btn-wrap">
            <button class="calories-add-btn" id="btn-${id}">&#x2b</button>
        </div>
    </div>
    `
    
    const wrap = document.getElementById(`food-item-${id}`)
    wrap.innerHTML = element

    validationFoodCount(id)
    const btn = document.getElementById(`btn-${id}`)
    btn.addEventListener('click', ()=>{
        const inputWrap = document.getElementById(`calories-input-wrap-${id}`)
        if (!inputWrap.classList.contains('alert-validate')) addFoodItem(data, id)
    })

    
}

export default FoodItem