import { createElem } from "../../../helper/createElement";
import Chart from 'chart.js/auto'

import { localStorageUser } from "../../../helper/account-scripts/user-data";
import { TranslateTexts, getLang } from "../../../helper/translate/translateText";

import { changeFoodData } from "../../../helper/food-script/changeFoodData";
const proteinDataFood = ()=>{

  const labelProtein = TranslateTexts(getLang(), 'RemnantProteins')
  const labelFats = TranslateTexts(getLang(), 'RemnantFats')
  const labelCarbohydrates = TranslateTexts(getLang(), 'RemnantCarb')

  const labelNeedProtein = TranslateTexts(getLang(), 'AddedProteins')
  const labelNeedFats = TranslateTexts(getLang(), 'AddedFats')
  const labelNeedCarbohydrates = TranslateTexts(getLang(), 'AddedCarb')

  
  let needProtein = localStorage.getItem('protein')
  const normalProtein = localStorageUser('needProtein')
  const addProtein = (needProtein - normalProtein)*(-1)
  if (needProtein <= 0) needProtein = 0
  localStorage.setItem('addProtein', addProtein)

  let needFats = localStorage.getItem('fats')
  const normalFats = localStorageUser('needFats')
  const addFats = (needFats - normalFats)*(-1)
  if (needFats <= 0) needFats = 0
  localStorage.setItem('addFats', addFats)

  let needCarbohydrates = localStorage.getItem('carbohydrates')
  const normalCarbohydrates = localStorageUser('needCarbohydrates')
  const addCarbohydrates = (needCarbohydrates - normalCarbohydrates)*(-1)
  if (needCarbohydrates <= 0) needCarbohydrates = 0
  localStorage.setItem('addCarbohydrates', addCarbohydrates)



const data = {
    labels: [
      labelProtein,
      labelNeedProtein,
      labelFats,
      labelNeedFats,
      labelCarbohydrates,
      labelNeedCarbohydrates
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [needProtein, addProtein, needFats, addFats, needCarbohydrates, addCarbohydrates],
      backgroundColor: [
        'rgb(171, 235, 198, 80% )',
        'rgb(35, 155, 86, 80%)',
        'rgb(245, 203, 167, 80% )',
        'rgb(185, 119, 14, 80%)',
        'rgb(195, 155, 211, 80% )',
        'rgb(118, 68, 138, 80%)',
        
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
const createChartProteinCount = ()=>{

  const title = TranslateTexts(getLang(), 'DailyProtein')

  const canvasContainer = document.querySelector('.food-chart-wrap')
  const chartWraper = document.getElementById('protein-chart-container')
  if (chartWraper) chartWraper.remove()
  const proteinChartWrap = createElem('div', 'chart-data-container', null, canvasContainer, 'id', 'protein-chart-container')
  proteinChartWrap.innerHTML = ''
  const canvasTitle = createElem('h1', 'canvas-title', title, proteinChartWrap)
  const chartWrap = createElem('div', 'chart-wrapper', null, proteinChartWrap)
  const canvasProtein = createElem('canvas', null, null, chartWrap, 'id', 'protein-chart-food')
  const myChart = new Chart(canvasProtein, proteinDataFood())

  const saveChangeBtn = createElem('button', 'save-change-btn', localStorageUser('userName') ? `${TranslateTexts(getLang(), 'saveChange')}` : `${TranslateTexts(getLang(), 'leavePAge')}`, proteinChartWrap, 'href', localStorageUser('userName') ? '/account' : '/')

  const id = localStorageUser('id')
  saveChangeBtn.addEventListener('click', (e)=>{changeFoodData(e, id)})
}

export {createChartProteinCount}