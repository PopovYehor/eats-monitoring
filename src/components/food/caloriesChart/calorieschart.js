import { createElem } from "../../../helper/createElement";
import Chart from 'chart.js/auto'

import { localStorageUser } from "../../../helper/account-scripts/user-data";
import {  TranslateTexts, getLang } from "../../../helper/translate/translateText";
const caloriesData = ()=>{

  const labelCalories= TranslateTexts(getLang(), 'remainderCalories')
  const labelNeedCalories= TranslateTexts(getLang(), 'AddedCalories')

  let needCalories = Number(localStorageUser('calories'))
  const normal = Number(localStorageUser('needCalories'))
  const addCalories = (needCalories - normal)*(-1)
  if (needCalories <= 0) needCalories = 0
  localStorage.setItem('addCalories', addCalories)
const data = {
    labels: [
      labelCalories,
      labelNeedCalories
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [needCalories, addCalories],
      backgroundColor: [
        'rgb(250, 215, 160, 80% )',
        'rgb(174, 214, 241, 80% )',
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
const createChartCaloriesCount = ()=>{

  const title = TranslateTexts(getLang(), 'DailyCaloric')
  
  const canvasContainer = document.querySelector('.food-chart-wrap')
  const chartWraper = document.getElementById('calories-chart-container')
  if (chartWraper) chartWraper.remove()
  const proteinChartWrap = createElem('div', 'chart-data-container', null, canvasContainer, 'id', 'calories-chart-container')
  proteinChartWrap.innerHTML = ''
  const canvasTitle = createElem('h1', 'canvas-title', title, proteinChartWrap)
  const chartWrap = createElem('div', 'chart-wrapper', null, proteinChartWrap)
  const canvasProtein = createElem('canvas', null, null, chartWrap, 'id', 'calories-chart-food')
  const myChart = new Chart(canvasProtein, caloriesData())
}

export {createChartCaloriesCount}