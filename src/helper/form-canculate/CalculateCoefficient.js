import { selectParam } from "./formChangeParametr"
import { formsData } from "./formTranformationData"

import { getLang, translateText, TranslateTextes } from "../translate/translateText"
const coefficientWeightIndex = (index)=>{
let elem = ''
 const coefWeightIndex = [
    ['Чіткий дефіцит маси тіла','Дефіцит маси тіла', 'Норма', 'Надлишок маси тіла', 'Ожиріння І ступеня', 'Ожиріння ІІ ступеня', 'Ожиріння ІІІ ступеня'],
    ["Clear body weight deficit", "Body weight deficit", 'Normal', "Excess body weight", "Obesity", 'Severe obesity', "Morbid obesity"],
    {
        fullDef: {from: 4, to: 6},
        def: {from: 7, to: 18},
        normal: {from: 19, to: 24},
        littleUp: {from: 25, to: 29},
        obesity: {from: 30, to: 34},
        obesityUp: {from: 35, to: 39},
        obesityFull: {from: 40, to: 100},
    },
    [
        {labelfullDef : 'label-fullDef'},
        {labeldef : 'label-def'},
        {labelnormal: 'label-normal'},
        {labellittleUp: 'label-middle'},
        {labelobesity : 'label-bad'},
        {labelobesityUp : 'label-very-bad'},
        {labelobesityFull: 'label-so-bad'},
    ]
 ]
 for (let i = 0; i<coefWeightIndex[0].length; i++){
    if (index >= Object.values(coefWeightIndex[2])[i].from && index <= Object.values(coefWeightIndex[2])[i].to){
        elem =  `<span class = 'weight-index-description ${Object.values(coefWeightIndex[3][i])}'>${translateText(getLang(),coefWeightIndex[0][i],coefWeightIndex[1][i] )}</span>`
        break
    }else{
        elem =  `<span class = 'weight-index-description ${Object.values(coefWeightIndex[3][6])}'>${TranslateTextes(getLang(), 'ConsultDoctor')}</span>`
    }
 }
 return elem
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
    sessionStorage.setItem('activ', optionActive.value)
    return active
}

const fatProcentDescription = (sex, count)=>{
    let element = ''
 const correlationFat = [
    [`невід'ємний жир`,'спортивний показник','добрий показник','середній показник', 'поганий показник'],
    ['Essential fat', 'Athletes indicator', 'Fitness indicator', 'Average indicator', 'Obese'],
    {
        noneMan : {from : 2, to : 5},
        sportMan : {from : 6, to : 13},
        fitnesMan : {from : 14, to : 17},
        middleMan : {from : 18, to : 24},
        badMan : {from : 25, to : 100}
    },
    {
        noneWoman : {from : 10, to : 13},
        sportWoman : {from : 14, to : 20},
        fitnesWoman : {from : 21, to : 25},
        middleWoman : {from : 26, to : 31},
        badWoman : {from : 32, to : 100}
    },
    [
        {labelfullDef : 'label-fullDef'},
        {labeldef : 'label-def'},
        {labelnormal: 'label-normal'},
        {labellittleUp: 'label-middle'},
        {labelobesity : 'label-bad'},
    ]
    ]
    for (let i = 0 ; i< correlationFat[0].length; i++){
        if (sex == 'male'){
            if (count >= Object.values(correlationFat[2])[i].from && count <= Object.values(correlationFat[2])[i].to){
                element = `<span class = 'fat-weight-description ${Object.values(correlationFat[4][i])}'>${translateText(getLang(),correlationFat[0][i], correlationFat[1][i]) }</span>`
                break
            }else{
                element = `<span class = 'fat-weight-description ${Object.values(correlationFat[4][4])}'>${TranslateTextes(getLang(), 'ConsultDoctor')}</span>`
            }
        }else {
            if (count >= Object.values(correlationFat[3])[i].from && count <= Object.values(correlationFat[3])[i].to){
                element = `<span class = 'fat-weight-description ${Object.values(correlationFat[4][i])}'>${translateText(getLang(),correlationFat[0][i], correlationFat[1][i])}</span>`
                break
            }else{
                element = `<span class = 'fat-weight-description ${Object.values(correlationFat[4][4])}'>${TranslateTextes(getLang(), 'ConsultDoctor')}</span>`
            }
        }
    }

    return element
}


export {coefficientWeightIndex, activity, fatProcentDescription}