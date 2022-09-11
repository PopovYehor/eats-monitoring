import { createElem } from "../../../../helper/createElement";
import {selectParam} from "../../../../helper/form-canculate/formChangeParametr"
import { formsData } from "../../../../helper/form-canculate/formTranformationData";
import Chart from 'chart.js/auto'
import { fatPercent,  fatWeight } from "../../../../helper/form-canculate/formCalculate-index";
import { fatProcentDescription } from "../../../../helper/form-canculate/CalculateCoefficient";
import { sexData } from "../../../../helper/form-canculate/formTranformationData";

import { translateText } from "../../../../helper/translate/translateText";
const fatChartData = ()=>{
  let translateCount = localStorage.getItem('languageCount')
  const remainder = 100 - fatPercent()
  const labelFatPerent = translateText(translateCount, 'Процент жиру, %', 'Percentage of fat, %')
const data = {
    labels: [
      labelFatPerent,
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [fatPercent(), remainder,],
      backgroundColor: [
        '#F7DC6F',
        '#edeff0',
      ],
      hoverOffset: 4
    }]
  };

const config = {
    type: 'doughnut',
    data: data,
  };
  return config
}
const createFatPercentChart = ()=>{
  let translateCount = localStorage.getItem('languageCount')
  let paramLabel = ''
  let weightFat = ''
  const choiseWeightOption = selectParam(formsData().choiseWeight)
  if( choiseWeightOption.value == 'pounds'){
    weightFat = (Number(fatWeight())*2.2).toFixed(0)
    paramLabel = translateText(translateCount, 'фунтів', 'pounds')
  }else{
    weightFat = Number(fatWeight())
    paramLabel = translateText(translateCount, 'кілограмів', 'kilograms')
  }

  const title = translateText(translateCount, 'Процент жиру в організмі', 'Percentage of body fat')
  const wrap = document.getElementById('canvas-index-wrap')
  const weightIndexChartWrap = createElem('div', 'chart-data-container', null, wrap, 'id', 'fat-chart-container')
  const canvasTitle = createElem('h1', 'canvas-title', title, weightIndexChartWrap)
  const chartWrap = createElem('div', 'chart-wrapper', null, weightIndexChartWrap)
  const canvasProtein = createElem('canvas', null, null, chartWrap, 'id', 'myChart')
  const labelWrap = createElem('div', 'label-wrap', null, chartWrap)
  
  const labelItem = `
  <span class = "chart-label fat-index">  ${fatPercent()} % (${weightFat} ${paramLabel}) 
  <span class = "chart-label-desription">${fatProcentDescription(sexData(), fatPercent())}</span>
  </span
  `
  labelWrap.innerHTML = labelItem


  const myChart = new Chart(canvasProtein, fatChartData())
}

export {createFatPercentChart}