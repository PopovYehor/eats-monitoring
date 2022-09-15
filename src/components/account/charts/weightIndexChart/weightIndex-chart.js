import { createElem } from "../../../../helper/createElement";
import Chart from 'chart.js/auto'
import { coefficientWeightIndex } from "../../../../helper/form-canculate/CalculateCoefficient";
import { TranslateTextes, getLang } from "../../../../helper/translate/translateText";
import { localStorageUser } from "../../../../helper/account-scripts/user-data";
const weightIndexData = ()=>{
  
  const weightIndex = localStorageUser('weightIndex')
  const residue = 100 - weightIndex

const labelWeightIndex = TranslateTextes(getLang(), 'BodyMassIndex')
const data = {
    labels: [
      labelWeightIndex,
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [weightIndex, residue,],
      backgroundColor: [
        'rgb(231, 76, 60, 80%)',
        '#edeff0',
      ],
      hoverOffset: 4
    }]
};

const config = {
    type: 'doughnut',
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
  }
};
return config
}

const createChartWeightIndexAccount = ()=>{
  
  const weightIndex = localStorageUser('weightIndex')
  const title = TranslateTextes(getLang(), 'BodyMassIndex')

  const canvasContainer = document.querySelector('.account-charts-wrap')
  const chartWraper = document.getElementById('index-chart-container-account')
  if (chartWraper) chartWraper.remove()
  const proteinChartWrap = createElem('div', 'chart-data-container', null, canvasContainer, 'id', 'index-chart-container-account')
  proteinChartWrap.innerHTML = ''
  const canvasTitle = createElem('h1', 'canvas-title', title, proteinChartWrap)
  const chartWrap = createElem('div', 'chart-wrapper', null, proteinChartWrap)
  const canvasProtein = createElem('canvas', null, null, chartWrap, 'id', 'index-chart-account')

  const labelWrap = createElem('div', 'label-wrap', null, chartWrap)
  const labelItem = `
  <span class = "chart-label weight-index">  ${weightIndex} - <span class = "chart-label-desription">${coefficientWeightIndex(weightIndex)}</span>
  `
  labelWrap.innerHTML = labelItem
  new Chart(canvasProtein, weightIndexData())
}

export {createChartWeightIndexAccount}