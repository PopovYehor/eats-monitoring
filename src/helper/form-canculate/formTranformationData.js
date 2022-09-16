import { selectParam, InchesToSm, PoundToKg } from "./formChangeParametr";

const formsData = ()=>document.forms.singUpForm


const loginData = ()=>formsData().login.value
    
const passwordData = () =>formsData().pass.value
   
const repeatPaaswordData = ()=>formsData().repeatPassword.value
   
const nameData = ()=>formsData().userName.value
    
const surnameData = ()=>formsData().surname.value
    
const activData = ()=>selectParam(formsData().activeLevel)
    
const wantDay = () =>{
    const wantDay = formsData().wantDay.value
    sessionStorage.setItem('wantDay', wantDay)
    return wantDay
}

const yearData = ()=>{
    const year = formsData().age.value
    sessionStorage.setItem('age', year)
    return year
}

const heightData = ()=>{
    let height = formsData().height.value
    const choiseHeightOption = selectParam(formsData().choiseHeight)
    choiseHeightOption.value == 'inches' ? height = InchesToSm(height) :height = formsData().height.value
    return height
}
const defheight = ()=>{
    let height = formsData().height.value
    sessionStorage.setItem('height', height)
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
    sessionStorage.setItem('weight', weight)
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
    sessionStorage.setItem('wantWeight', wantWeight)
    return wantWeight
}

const sexData = ()=>{
    const sexes = selectParam(formsData().sex)
    sessionStorage.setItem('sex', sexes.value)
    return sexes.value
}

export {formsData,defheight, wantDay, yearData, heightData, weightData, defWeight, wantWeightData, defWantWeight, sexData, loginData, passwordData,repeatPaaswordData, nameData, surnameData, activData}