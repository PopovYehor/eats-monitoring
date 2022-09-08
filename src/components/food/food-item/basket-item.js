import { translateCount, translateText } from "../../../helper/translate/translate";
import { changeFoodItem, deleteFoodItem } from "../../../helper/food-script/basket-script";
import { validationFoodCount } from "../../../helper/validation/main-form-validation";
const basketItem = (data, id)=> {
    const elemName = translateCount == 0 ? data.ukText : data.enText;
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
                <span class="caloties-item-title" id="total-calories-title">${translateText(translateCount, 'Калорій:', 'Total calories:')}</span>
                <span class= "caloties-item-data" id="total-calories">${data.calories}</span>
            </div>
            <div class ="calories-count">
                <span class="caloties-item-title">${translateText(translateCount, 'Жирів:', 'Fats:')}</span>
                <span class= "caloties-item-data" id="total-fats">${data.fats}</span>
            </div>
            <div class ="calories-count">
                <span class="caloties-item-title">${translateText(translateCount, 'Білків:', 'Proteins:')}</span>
                <span class= "caloties-item-data" id="total-protein">${data.protein}</span>
            </div>
            <div class ="calories-count">
                <span class="caloties-item-title">${translateText(translateCount, 'Вуглеводів:', 'Carbohydrates:')}</span>
                <span class= "caloties-item-data" id="total-carbohydrates">${data.carbonaries}</span>
            </div>
        </div>
        <div class= "calories-input-wrap" id ="calories-input-wrap-${id}" data-validate= "${translateText(translateCount, 'Введіть число', 'Enter a number')}">
            <input class= "calories-input" type="text" id = "calories-input-${id}" value = ${data.value || "100"}>
            <span class= "calories-input-desc">${translateText(translateCount, 'грамів', 'grams')}</span>
        </div>
        <div class="calories-delete-btn-wrap">
            <button class="calories-btn delete" id="btn-delete-${id}">&#xf1f8;</button>
            <button class="calories-btn change" id="btn-change-${id}">&#xf362</button>
        </div>
    </div>
    `
    const wrap = document.getElementById(`food-item-${id}`)
    wrap.innerHTML = element
    validationFoodCount(id)
//delete
    const btnDelete = document.getElementById(`btn-delete-${id}`)
    btnDelete.addEventListener('click', ()=>{
        deleteFoodItem(data)
    })

//change
const btnChange = document.getElementById(`btn-change-${id}`)
    btnChange.addEventListener('click', ()=>{
        const inputWrap = document.getElementById(`calories-input-wrap-${id}`)
        if (!inputWrap.classList.contains('alert-validate')) changeFoodItem(data, id)
    })
}

export default basketItem