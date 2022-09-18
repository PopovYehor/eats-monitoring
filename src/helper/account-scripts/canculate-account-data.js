import { localStorageUser } from "./user-data"
import { fromTodayToWantDate } from "../../components/account/charts/progresChartAcc/dataForProgresChart"
const caloriesFormulaAccount = ()=>{
    const sex = localStorageUser('sex')
    let weight = Number(localStorageUser('weight'))
    const weightParam = localStorageUser('weightParam')
    if (weightParam == 'pounds') weight = weight/2.2

    let wantWeight = Number(localStorageUser('wantWeight'))
    const wantWeightParam = localStorageUser('wantWeightParam')
    if (wantWeightParam == 'pounds') wantWeight = wantWeight/2.2

    let height = Number(localStorageUser('height'))
    const heightParam = localStorageUser('heightParam')
    if (heightParam == 'inches') height = height*2.54

    const years = Number(localStorageUser('age'))
    const active = Number(localStorageUser('activeCoef'))

    let calcCalories 
    sex == 'female' ? calcCalories = (((10*weight) + (6.25*height) + (5*years) - 161)*active) : calcCalories = (((10*weight) + (6.25*height) + (5*years) + 5)*active)
    localStorage.setItem('caloriesFormula', calcCalories)
    let wantResult 
    wantWeight < weight ? wantResult = (calcCalories - ((7700*( weight-wantWeight))/fromTodayToWantDate())) : wantResult = (calcCalories + ((7700*(wantWeight - weight))/fromTodayToWantDate()))

    localStorage.setItem('needCalories', Math.round(wantResult))
    localStorage.setItem('calories', Math.round(wantResult))

    localStorage.setItem('fats', Math.round(wantResult * 0.25))
    localStorage.setItem('needFats', Math.round(wantResult * 0.25))

    localStorage.setItem('protein', Math.round(wantResult * 0.30))
    localStorage.setItem('needProtein', Math.round(wantResult * 0.30))

    localStorage.setItem('carbohydrates', Math.round(wantResult * 0.45))
    localStorage.setItem('needCarbohydrates', Math.round(wantResult * 0.45))

}

const weightIndexAccount = ()=>{
    let weight = Number(localStorageUser('weight'))
    const weightParam = localStorageUser('weightParam')
    if (weightParam == 'pounds') weight = weight/2.2

    let height = Number(localStorageUser('height'))
    const heightParam = localStorageUser('heightParam')
    if (heightParam == 'inches') height = height*2.54

    const weightIndex = Math.round(weight/(Math.pow((height/100), 2)))

    localStorage.setItem('weightIndex', weightIndex)
    return weightIndex
}

const fatPercentAccount = ()=>{
    const sex = localStorageUser('sex')
    const years = Number(localStorageUser('age'))

    let fatPercent 
    sex == 'male' ? fatPercent = Math.round((1.2*weightIndexAccount())+(0.23*years)-16.2) : fatPercent = Math.round((1.2*weightIndexAccount())+(0.23*years)-5.4)

    localStorage.setItem('fatPercent', fatPercent)
    return fatPercent
}

const fatWeightAccount = ()=>{
    let weight = Number(localStorageUser('weight'))
    const weightParam = localStorageUser('weightParam')

    let fatWeight 
    weightParam == 'pounds' ? fatWeight = Math.floor((weight * (fatPercentAccount()/100))*2.54) : fatWeight = Math.floor(weight * (fatPercentAccount()/100))

    localStorage.setItem('fatWeight', fatWeight)
    return fatWeight
}

export {caloriesFormulaAccount, fatWeightAccount}