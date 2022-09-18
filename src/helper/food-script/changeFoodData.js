import moment from "moment"
import { localStorageUser, user } from "../account-scripts/user-data"
import { onHandleRoute } from "../route"
const urlData = 'https://my-json-server.typicode.com/PopovYehor/data/posts'

const lastDataArrUser  = (data, arr) =>  data[arr][data[arr].length-1] 

const changeFoodData = (e, id)=>{
    if (localStorageUser('userName')){
    const today = moment().format("DD/MM/YY")
    console.log(user.dataDateCalories)
    if ((user.dataDateCalories.length > 0 && lastDataArrUser(user,'dataDateCalories') != today) || user.dataDateCalories.length == 0){
        user.dataDateCalories.push(today)
        user.dataCalories.push(localStorageUser('addCalories'))
        user.dataProtein.push(localStorageUser('addProtein'))
        user.dataFats.push(localStorageUser('dataFats'))
        user.dataCarb.push(localStorageUser('addCarbohydrates'))
        user.dataFoodSelects.push(localStorageUser('selectedItem'))
    }else{
        user.dataCalories[user.dataCalories.length - 1] = localStorageUser('addCalories')
        user.dataProtein[user.dataProtein.length - 1] = localStorageUser('addProtein')
        user.dataFats[user.dataFats.length - 1] = localStorageUser('addFats')
        user.dataCarb[user.dataCarb.length - 1] = localStorageUser('addCarbohydrates')
        user.dataFoodSelects[user.dataFoodSelects.length - 1] = localStorageUser('selectedItem')
    }
    
    fetch(`${urlData}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then(res => res.json())
        .then(res =>{
            console.log(res)
            onHandleRoute(e)
        })
    }else{
        onHandleRoute(e)
    } 
}

export {changeFoodData}