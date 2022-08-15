import { selectParam, InchesToSm, PoundToKg } from "./formChangeParametr";

const formsData = ()=>{
    const form = document.forms.singUpForm
    return form
}

const wantDay = () =>{
    const wantDay = formsData().wantDay.value
    return wantDay
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
const defWeight = ()=>{
    let weight = formsData().weight.value
    return weight
}

const wantWeightData= ()=>{
    let wantWeight = formsData().wantWeight.value
    const optionWantWeight = selectParam(formsData().wantWeightSelect)
    optionWantWeight.value == 'pounds' ? wantWeight = PoundToKg(wantWeight) : wantWeight = formsData().wantWeight.value
    return wantWeight
}
const defWantWeight = ()=>{
    let wantWeight = formsData().wantWeight.value
    return wantWeight
}

const sexData = ()=>{
    const sexes = selectParam(formsData().sex)
    return sexes.value
}

export {formsData, wantDay, yearData, heightData, weightData, defWeight, wantWeightData, defWantWeight, sexData}