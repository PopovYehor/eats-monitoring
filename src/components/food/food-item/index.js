import { translateCount, translateText } from "../../../helper/translate/translate"
import { createChartCaloriesCount } from "../proteinChart/calorieschart";
import "./style"
localStorage.setItem('selectedItem', JSON.stringify([]))



const FoodItem = (data, id)=>{
    const elemName = translateCount == 0 ? data.ukText : data.enText;
    const element = `
    <div class = "food-item-container">
        <div class= "food-item-img-wrap">
            <img class = "food-item-img" src = "https://t3.ftcdn.net/jpg/03/35/13/14/360_F_335131435_DrHIQjlOKlu3GCXtpFkIG1v0cGgM9vJC.jpg"></img>
        </div>
        <div class="food-item-name-wrap">
            <p class="food-item-name">${elemName}</p>
        </div>
        <div class ="calories-count-wrap">
            <div class ="calories-count">
                <p class="caloties-item-title" id="total-calories-title">${translateText(translateCount, 'Калорій:', 'Total calories:')}</p>
                <span class= "caloties-item-data" id="total-calories">${data.calories}</span>
            </div>
            <div class ="calories-count">
                <p class="caloties-item-title">${translateText(translateCount, 'Жирів:', 'Fats:')}</p>
                <span class= "caloties-item-data" id="total-fats">${data.fats}</span>
            </div>
            <div class ="calories-count">
                <p class="caloties-item-title">${translateText(translateCount, 'Білків:', 'Proteins:')}</p>
                <span class= "caloties-item-data" id="total-protein">${data.protein}</span>
            </div>
            <div class ="calories-count">
                <p class="caloties-item-title">${translateText(translateCount, 'Вуглеводів:', 'Carbohydrates:')}</p>
                <span class= "caloties-item-data" id="total-carbohydrates">${data.carbonaries}</span>
            </div>
        </div>
        <div class= "calories-input-wrap">
            <input class= "calories-input" type="text" id = "calories-input-${id}" value = ${data.value || "100"}>
            <span class= "calories-input-desc">${translateText(translateCount, 'грамів', 'grams')}</span>
        </div>
        <div class="calories-add-btn-wrap">
            <button class="calories-add-btn" id="btn-${id}">${translateText(translateCount, 'Додати', 'Add')}</button>
        </div>
    </div>
    `
    
    const wrap = document.getElementById(`food-item-${id}`)
    wrap.innerHTML = element
    const btn = document.getElementById(`btn-${id}`)
    btn.addEventListener('click', ()=>{

        

        

        const selectedItems = JSON.parse(localStorage.getItem('selectedItem'))
        const input = document.getElementById(`calories-input-${id}`).value
        const perscent = Number(input)/100
        let check = true

        let defaultItem = {
            value : Number(input),
            id: data.id,
            name: data.name,
            calories: data.calories*perscent,
            carbonaries: data.carbonaries*perscent,
            fats: data.fats*perscent,
            protein: data.protein*perscent,
            enText: data.enText,
            ukText: data.ukText,
        }
        if (selectedItems.length > 0) selectedItems.forEach((elem) => elem.name == data.name ? check = false : check = true)
            
        if (check == true){
            selectedItems.push(defaultItem)
            localStorage.setItem('selectedItem', JSON.stringify(selectedItems))
        }else{
            selectedItems.forEach((elem) =>{
                if(elem.name == data.name){
                    elem.value = elem.value+Number(input)
                    elem.calories = elem.calories + data.calories*perscent
                    elem.carbonaries = elem.carbonaries + data.carbonaries*perscent
                    elem.fats = elem.fats + data.fats*perscent
                    elem.protein = elem.protein + data.protein*perscent
                    console.log(elem)
                    selectedItems.map(item => item.id == data.id ? elem : item)
                    localStorage.setItem('selectedItem', JSON.stringify(selectedItems))
                }
            })
        }

        let changeCalories = localStorage.getItem('calories')
        changeCalories = changeCalories - data.calories*perscent
        localStorage.setItem('calories', changeCalories)
        createChartCaloriesCount()
            
    })

    
}

export default FoodItem