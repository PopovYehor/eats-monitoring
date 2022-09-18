import { createElem } from "../../../../helper/createElement";
import {selectParam} from "../../../../helper/form-canculate/formChangeParametr"
import { formsData } from "../../../../helper/form-canculate/formTranformationData";
import Chart from 'chart.js/auto'
import { fatPercent,  fatWeight } from "../../../../helper/form-canculate/formCalculate-index";
import { fatPercentDescription } from "../../../../helper/form-canculate/CalculateCoefficient";
import { sexData } from "../../../../helper/form-canculate/formTranformationData";

import { getLang, TranslateTexts } from "../../../../helper/translate/translateText";
const fatChartData = ()=>{

  const remainder = 100 - fatPercent()
  const labelFatPerent = TranslateTexts(getLang(), 'PercentageOfFat')
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
  let paramLabel 
  const choiseWeightOption = selectParam(formsData().choiseWeight)
  choiseWeightOption.value == 'pounds' ? paramLabel = TranslateTexts(getLang(), 'pound') : paramLabel = TranslateTexts(getLang(), 'kg')

  const title = TranslateTexts(getLang(), 'PercentageOfBodyFat')
  const wrap = document.getElementById('canvas-index-wrap')
  const weightIndexChartWrap = createElem('div', 'chart-data-container', null, wrap, 'id', 'fat-chart-container')
  const canvasTitle = createElem('h1', 'canvas-title', title, weightIndexChartWrap)
  const chartWrap = createElem('div', 'chart-wrapper', null, weightIndexChartWrap)
  const canvasProtein = createElem('canvas', null, null, chartWrap, 'id', 'myChart')
  const labelWrap = createElem('div', 'label-wrap', null, chartWrap)
  
  const labelItem = `
  <span class = "chart-label fat-index">  ${fatPercent()} % (${Number(fatWeight()).toFixed(0)} ${paramLabel}) 
  <span class = "chart-label-desription">${fatPercentDescription(sexData(), fatPercent())}</span>
  </span
  `
  labelWrap.innerHTML = labelItem


  const myChart = new Chart(canvasProtein, fatChartData())
}

export {createFatPercentChart}