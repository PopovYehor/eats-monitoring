import { selectParam} from "./formChangeParametr"
import { activity } from "./CalculateCoefficient"
import { formsData, yearData, heightData, weightData, wantWeightData, sexData, wantDay  } from "./formTranformationData"

//------------------------------Wight Index---------------------------------//
const weightIndex = ()=>Math.round(weightData()/(Math.pow((heightData()/100), 2)))


//--------------------------------Calculate Calories--------------------------//
const caloriesFormula = ()=>{
    let calcCalories = ''
    sexData() == 'female' ? calcCalories = (((10*weightData()) + (6.25*heightData()) + (5*yearData()) - 161)*activity()) : calcCalories = (((10*weightData()) + (6.25*heightData()) + (5*yearData()) + 5)*activity())
    localStorage.setItem('calories', Math.round(calcCalories))
    localStorage.setItem('needCalories', Math.round(calcCalories))
    return Math.round(calcCalories)
}

//-------------------------------Calculate Calories For Want Result--------------------------//
const calculateWantCalories = ()=>wantWeightData() < weightData() ? (caloriesFormula() - ((7700*( weightData()-wantWeightData()))/formsData().wantDay.value)) : (caloriesFormula() + ((7700*(wantWeightData() - weightData()))/formsData().wantDay.value))


//----------Calculate fat, protein, carbohydrates for want calories-------//
const calculatePartOfWantCalories = (part)=>Math.round(calculateWantCalories()*part)
    

//---------------------------------Fat Weight---------------------------------//

const fatPercent = ()=>sexData() == 'male' ? Math.round((1.2*weightIndex())+(0.23*yearData())-16.2) : Math.round((1.2*weightIndex())+(0.23*yearData())-5.4)
   

const fatWeight = ()=>{
    let fatWeight = ''
    const choiseWeightOption = selectParam(formsData().choiseWeight)
    choiseWeightOption.value == 'pounds' ? fatWeight = Math.floor((weightData() * (fatPercent()/100))*2.54) : fatWeight = Math.floor(weightData() * (fatPercent()/100))
    return fatWeight
}


//--------------------------------Ideal Weight -------------------------------//
const perfectWeight = () => {
    let perfectWeight = ''
    let optionSex = selectParam(formsData().sex)
    optionSex == 'male' ? perfectWeight = Math.round(52+1.9*((heightData()/2.54)-60)) : perfectWeight = Math.round(49+1.7*((heightData()/2.54)-60))
    const choiseWeightOption = selectParam(formsData().choiseWeight)
    if (choiseWeightOption.value == 'pounds') perfectWeight = perfectWeight*2.2

    return perfectWeight
}
export {weightIndex, caloriesFormula, calculateWantCalories, calculatePartOfWantCalories, fatPercent, fatWeight, perfectWeight}