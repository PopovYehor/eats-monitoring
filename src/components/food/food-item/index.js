import { translateCount, translateText } from "../../../helper/translate/translate"
import { addFoodItem } from "../../../helper/food-script/add-item-script"
import "./style"

localStorage.setItem('selectedItem', JSON.stringify([]))

localStorage.setItem('calories', '1000')
localStorage.setItem('fats', '400')
localStorage.setItem('protein', '350')
localStorage.setItem('carbohydrates', '250')

localStorage.setItem('plateCount', 0)



const FoodItem = (data, id)=>{
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
        <div class= "calories-input-wrap">
            <input class= "calories-input" type="text" id = "calories-input-${id}" value = ${data.value || "100"}>
            <span class= "calories-input-desc">${translateText(translateCount, 'грамів', 'grams')}</span>
        </div>
        <div class="calories-add-btn-wrap">
            <button class="calories-add-btn" id="btn-${id}">&#x2b</button>
        </div>
    </div>
    `
    
    const wrap = document.getElementById(`food-item-${id}`)
    wrap.innerHTML = element
    const btn = document.getElementById(`btn-${id}`)
    btn.addEventListener('click', ()=>{
        addFoodItem(data, id)
    })

    
}

export default FoodItem