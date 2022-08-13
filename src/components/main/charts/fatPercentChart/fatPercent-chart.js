import { createElem } from "../../../../helper/createElement";
import {selectParam} from "../../../../helper/formChangeParametr"
import { formsData } from "../../../../helper/formTranformationData";
import Chart from 'chart.js/auto'
import { fatPercent,  fatWeight } from "../../../../helper/formCalculate-index";
import { fatProcentDescription } from "../../../../helper/CalculateCoefficient";
import { sexData } from "../../../../helper/formTranformationData";


const fatChartData = ()=>{
  const remainder = 100 - fatPercent()
const data = {
    labels: [
      'Процент жиру, %',
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [fatPercent(), remainder,],
      backgroundColor: [
        'rgb(255, 205, 86)',
        '#E2E2E2',
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
  let paramLabel = ''
  let weightFat = ''
  const choiseWeightOption = selectParam(formsData().choiseWeight)
  if( choiseWeightOption.value == 'pounds'){
    weightFat = (Number(fatWeight())*2.2).toFixed(0)
    paramLabel = 'фунтів'
  }else{
    weightFat = Number(fatWeight())
    paramLabel = 'кілограмів'
  }

    const wrap = document.getElementById('canvas-index-wrap')
    const weightIndexChartWrap = createElem('div', 'chart-data-container', null, wrap, 'id', 'fat-chart-container')
    const canvasTitle = createElem('h1', 'canvas-title', 'Процент жиру в організмі', weightIndexChartWrap)
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