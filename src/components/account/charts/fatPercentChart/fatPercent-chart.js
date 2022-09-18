import { createElem } from "../../../../helper/createElement";
import Chart from 'chart.js/auto'
import { fatPercentDescription } from "../../../../helper/form-canculate/CalculateCoefficient";
import { localStorageUser } from "../../../../helper/account-scripts/user-data";
import { TranslateTexts, getLang } from '../../../../helper/translate/translateText';
const fatChartData = ()=>{

  const fatPercent = localStorageUser('fatPercent')
  const remainder = 100 - fatPercent
  const labelFatPerent = TranslateTexts(getLang(), 'PercentageOfFat')
const data = {
    labels: [
      labelFatPerent,
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [fatPercent, remainder,],
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
    options: {
      responsive: true,
      maintainAspectRatio: false,
  }
  };
  return config
}
const createFatPercentChartAccount = ()=>{

  let paramLabel 

  const weightParam = localStorageUser('weightParam')
  const fatWeight = localStorageUser('fatWeight')
  const fatPercent = localStorageUser('fatPercent')
  const sex = localStorageUser('sex')
  weightParam == 'pounds' ? paramLabel = TranslateTexts(getLang(), 'pound').toLowerCase() : paramLabel = TranslateTexts(getLang(), 'kg').toLowerCase()

  const title = TranslateTexts(getLang(), 'PercentageOfBodyFat')
  const canvasContainer = document.querySelector('.account-charts-wrap')
  const chartWraper = document.getElementById('fat-chart-container-account')
  if (chartWraper) chartWraper.remove()
  const proteinChartWrap = createElem('div', 'chart-data-container', null, canvasContainer, 'id', 'fat-chart-container-account')
  proteinChartWrap.innerHTML = ''
  const canvasTitle = createElem('h1', 'canvas-title', title, proteinChartWrap)
  const chartWrap = createElem('div', 'chart-wrapper', null, proteinChartWrap)
  const canvasProtein = createElem('canvas', null, null, chartWrap, 'id', 'fat-chart-account')
  const labelWrap = createElem('div', 'label-wrap', null, chartWrap)
  
  const labelItem = `
  <span class = "chart-label fat-index">  ${fatPercent} % (${fatWeight} ${paramLabel}) 
  <span class = "chart-label-desription">${fatPercentDescription(sex, fatPercent)}</span>
  </span
  `
  labelWrap.innerHTML = labelItem
  const myChart = new Chart(canvasProtein, fatChartData())
}

export {createFatPercentChartAccount}