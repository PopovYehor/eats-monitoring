import { selectParam, InchesToSm, PoundToKg } from "../../../helper/formChangeParametr"
import { activity } from "../../../helper/CalculateCoefficient"
const formsData = ()=>{
    const form = document.forms.singUpForm
    return form
}

const yearData = ()=>{
    const year = formsData().age.value
    return year
}

const heightData = ()=>{
    let height = formsData().height.value
    const choiseHeightOption = selectParam(formsData().choiseHeight)
    choiseHeightOption.value == 'inches' ? height = InchesToSm(height) :height = formsData().height.value
    return height
}
const weightData = ()=>{
    let weight = formsData().weight.value
    const choiseWeightOption = selectParam(formsData().choiseWeight)
    choiseWeightOption.value == 'pounds' ? weight = PoundToKg(weight) : weight = formsData().weight.value
    return weight
}
const wantWeightData= ()=>{
    let wantWeight = formsData().wantWeight.value
    const optionWantWeight = selectParam(formsData().wantWeightSelect)
    optionWantWeight.value == 'pounds' ? wantWeight = PoundToKg(wantWeight) : wantWeight = formsData().wantWeight.value
    return wantWeight
}


const sexData = ()=>{
    const sexes = selectParam(formsData().sex)
    return sexes.value
}

//------------------------------Wight Index---------------------------------//
const weightIndex = ()=>{
    const weightIndex = Math.round(weightData()/(Math.pow((heightData()/100), 2)))
    console.log(sexData())
    return weightIndex
}

//--------------------------------Calculate Calories--------------------------//
const caloriesFormula = ()=>{
    let calcCalories = ''
    sexData() == 'male' ? calcCalories = (((10*weightData()) + (6.25*heightData()) + (5*yearData()) - 161)*activity()) : calcCalories = (((10*weightData()) + (6.25*heightData()) + (5*yearData()) + 5)*activity())
    return Math.round(calcCalories)
}

//-------------------------------Calculate Calories For Want Result--------------------------//
const calculateWantCalories = ()=>{
    let wantResult = ''
    wantWeightData() < weightData() ? wantResult = (caloriesFormula() - ((7700*( weightData()-wantWeightData()))/formsData().wantDay.value)) : wantResult = (caloriesFormula() + ((7700*(wantWeightData() - weightData()))/formsData().wantDay.value))
    return wantResult
}

//----------Calculate fat, protein, carbohydrates for want calories-------//
const calculatePartOfWantCalories = (part)=>{
    let element = Math.round(calculateWantCalories()*part)
    return element
} 

//---------------------------------Fat Weight---------------------------------//

const fatPercent = ()=>{
    let fatPercent = ''
    sexData() == 'male' ? fatPercent = Math.round((1.2*weightIndex())+(0.23*yearData())-16.2) : fatPercent = Math.round((1.2*weightIndex())+(0.23*yearData())-5.4)
    return fatPercent
}

const fatWeight = ()=>{
    let fatWeight = ''
    const choiseWeightOption = selectParam(formsData().choiseWeight)
    choiseWeightOption.value == 'pounds' ? fatWeight = Math.floor((weightData() * (fatPercent()/100))*2.54) : fatWeight = Math.floor(weightData() * (fatPercent()/100))
    return fatWeight
}
export {weightIndex, formsData, caloriesFormula, calculateWantCalories, calculatePartOfWantCalories, fatPercent, fatWeight}