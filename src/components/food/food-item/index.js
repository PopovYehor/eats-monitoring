import { translateCount, translateText } from "../../../helper/translate/translate"
import "./style"
const FoodItem = (data, id)=>{
    const elemName = translateCount == 0 ? data.ukText : data.enText;
    const element = `
    <div class = "food-item-container">
        <div class= "food-item-img-wrap">
            <img class = "food-item-img" src = "https://t3.ftcdn.net/jpg/03/35/13/14/360_F_335131435_DrHIQjlOKlu3GCXtpFkIG1v0cGgM9vJC.jpg"></img>
        </div>
        <div class="food-item-name-wrap">
            <h1 class="food-item-name">${elemName}</h1>
        </div>
        <div class ="calories-count-wrap">
            <div class ="calories-count">
                <h2 class="caloties-item-title">${translateText(translateCount, 'Загальна кількість калорій:', 'Total calories:')}</h2>
                <span class= "caloties-item-data" id = "total-calories">${data.calories}</span>
            </div>
            <div class ="calories-count">
                <h2 class="caloties-item-title">${translateText(translateCount, 'Жирів:', 'Fats:')}</h2>
                <span class= "caloties-item-data" id = "total-fats">${data.fats}</span>
            </div>
            <div class ="calories-count">
                <h2 class="caloties-item-title">${translateText(translateCount, 'Білків:', 'Proteins:')}</h2>
                <span class= "caloties-item-data" id = "total-protein">${data.protein}</span>
            </div>
            <div class ="calories-count">
                <h2 class="caloties-item-title">${translateText(translateCount, 'Вуглеводів:', 'Carbohydrates:')}</h2>
                <span class= "caloties-item-data" id = "total-carbohydrates">${data.carbohydrates}</span>
            </div>
        </div>
        <div class= "calories-input-wrap">
            <input class= "calories-input" type="text" value = "100">
            <span class= "calories-input-desc">${translateText(translateCount, 'грамів', 'grams')}</span>
        </div>
        <div class="calories-add-btn-wrap">
            <button class="calories-add-btn">${translateText(translateCount, 'Додати', 'Add')}</button>
        </div>
    </div>
    `
    const wrap = document.getElementById(`food-item-${id}`)
    wrap.innerHTML = element
}

export default FoodItem