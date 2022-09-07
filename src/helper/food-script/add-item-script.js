import foodCount from "../../components/food/food-count"
import { createChartCaloriesCount } from "../../components/food/caloriesChart/calorieschart"
import { createChartProteinCount } from "../../components/food/proteinsChart/protein-chart-food"
import TotalFood from "../../components/food/food-total"
const defaultItem = (data, perscent, input)=>{
    let defaultItem = {
        value : Number(input),
        id: data.id,
        name: data.name,
        calories: data.calories*perscent,
        defCalories: data.calories,
        carbonaries: data.carbonaries*perscent,
        defCarbonaries: data.carbonaries,
        fats: data.fats*perscent,
        defFats: data.fats,
        protein: data.protein*perscent,
        defProtein: data.protein,
        enText: data.enText,
        ukText: data.ukText,
        img: data.img
    }
    return defaultItem
}
const changeCountsFoodsItems = (item, data, dataItem, perscent)=>{
    let changeCalories = localStorage.getItem(item)
    changeCalories = changeCalories - data[dataItem]*perscent
    localStorage.setItem(item, changeCalories)
}

const addFoodCount = ()=>{
    const foodCounts = localStorage.getItem('plateCount')
    const addCount = Number(foodCounts)+1
    localStorage.setItem('plateCount', addCount)
    foodCount()
}

const addFoodItem = (data, id)=>{

    const selectedItems = JSON.parse(localStorage.getItem('selectedItem'))
    const input = document.getElementById(`calories-input-${id}`).value

    const perscent = Number(input)/100
    let check = true
    
    if (selectedItems.length > 0) selectedItems.forEach((elem) => elem.name == data.name ? check = false : check = true)
        
    if (check == true){
        selectedItems.push(defaultItem(data, perscent, input))
        localStorage.setItem('selectedItem', JSON.stringify(selectedItems))
        addFoodCount()
    }else{
        selectedItems.forEach((elem) =>{
            if(elem.name == data.name){
                elem.value = elem.value+Number(input)
                elem.calories = elem.calories + data.calories*perscent
                elem.carbonaries = elem.carbonaries + data.carbonaries*perscent
                elem.fats = elem.fats + data.fats*perscent
                elem.protein = elem.protein + data.protein*perscent
                selectedItems.map(item => item.id == data.id ? elem : item)
                localStorage.setItem('selectedItem', JSON.stringify(selectedItems))
            }
        })
    }

    changeCountsFoodsItems('calories', data, 'calories', perscent)
    changeCountsFoodsItems('protein', data, 'protein', perscent)
    changeCountsFoodsItems('fats', data, 'fats', perscent)
    changeCountsFoodsItems('carbohydrates', data, 'carbonaries', perscent)

    createChartCaloriesCount()
    createChartProteinCount()
    TotalFood()
}

export {addFoodItem}