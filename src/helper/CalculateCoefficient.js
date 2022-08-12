import { selectParam } from "./formChangeParametr"
import { formsData } from "./formTranformationData"


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

const fatProcentDescription = (sex, count)=>{
    let element = ''
 const correlationFat = [
    [
        'добрий показник','середній показник','поганий показник'
    ],
    {
        goodForMan : {from : 11, to : 16},
        normalForMan : {from : 17, to : 22},
        badForMan : {from : 22, to : 100}
    },
    {
        goodForWoman : {from : 17, to : 22},
        normalForWoman : {from : 22, to : 27},
        badForWoman : {from : 27, to : 100}
    }
    ]
    for (let i = 0 ; i< correlationFat[0].length; i++){
        if (sex == 'male'){
            if (count >= Object.values(correlationFat[1])[i].from && count <= Object.values(correlationFat[1])[i].to){
                element = correlationFat[0][i]
                break
            }else{
                element = 'замалий результат, наберіть вагу!'
            }
        }else {
            if (count >= Object.values(correlationFat[2])[i].from && count <= Object.values(correlationFat[2])[i].to){
                element = correlationFat[0][i]
                break
            }else{
                element = 'замалий результат, наберіть вагу!'
            }
        }
    }
    return element
}


export {coefficientWeightIndex, activity, fatProcentDescription}