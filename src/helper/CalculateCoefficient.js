import { selectParam } from "./formChangeParametr"
import { formsData } from "../components/main/formCalculate/formCalculate-index"


const coefficientWeightIndex = (index)=>{
let cof = ''
 if (index <= 16){cof = 'Чіткий дефіцит маси тіла'}
 else if (index > 16 && index < 18.5){cof = 'Дефіцит маси тіла'}
 else if (index >= 18.5 && index < 25){cof = 'Норма'}
 else if (index >= 25 && index < 30){cof = 'Надлишок маси тіла'}
 else if (index >= 30 && index < 35){cof = 'Ожиріння І ступеня'}
 else if (index >= 35 && index < 40){cof = 'Ожиріння ІІ ступеня'}
 else if (index >= 40){cof = 'Ожиріння ІІІ ступеня'}
 return cof
}

const activity = ()=>{
    let activ = [
        {none: 1.2},
        {low: 1.375},
        {middle: 1.55},
        {hight: 1.725},
        {veryHight: 1.9},  
    ]
    let optionActive = selectParam(formsData().activeLevel)
    let active = ''
    activ.forEach(elem => Object.keys(elem) == optionActive.value ? active = Object.values(elem) : null)
    return active
}


export {coefficientWeightIndex, activity}