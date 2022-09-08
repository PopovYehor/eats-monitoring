import { createElem } from '../../../../helper/createElement';
import Chart from 'chart.js/auto'
import { translateCount, translateText } from "../../../../helper/translate/translate";

const proteinDataFood = ()=>{

  const labelProtein = translateText(translateCount, 'Залишок білків', 'Proteins left')
  const labelFats = translateText(translateCount, 'Залишок жирів', 'Fats left')
  const labelCarbohydrates = translateText(translateCount, 'Залишок вуглеводів', 'Carb left')

  const labelNeedProtein = translateText(translateCount, 'Додано білків', 'Added proteins')
  const labelNeedFats = translateText(translateCount, 'Додано жирів', 'Added fats')
  const labelNeedCarbohydrates = translateText(translateCount, 'Додано вуглеводів', 'Added carb')

  
  let needProtein = localStorage.getItem('protein')
  const normalProtein = localStorage.getItem('needProtein')
  const addProtein = (needProtein - normalProtein)*(-1)
  if (needProtein <= 0) needProtein = 0

  let needFats = localStorage.getItem('fats')
  const normalFats = localStorage.getItem('needFats')
  const addFats = (needFats - normalFats)*(-1)
  if (needFats <= 0) needFats = 0

  let needCarbohydrates = localStorage.getItem('carbohydrates')
  const normalCarbohydrates = localStorage.getItem('needCarbohydrates')
  const addCarbohydrates = (needCarbohydrates - normalCarbohydrates)*(-1)
  if (needCarbohydrates <= 0) needCarbohydrates = 0



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
        '#FFBFBF',
        '#FF4E4E',
        '#8BA1F7',
        '#3C62FA',
        '#93F79A',
        '#4BFA57',
        
      ],
      hoverOffset: 6
    }]
  };

const config = {
    type: 'doughnut',
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
  }
}
  return config
}
const createChartProteinCountAccount = ()=>{
  const title = translateText(translateCount, 'Добова норма білків, жирів та вуглеводів', "Daily rate of proteins, fats and carbohydrates")

  const canvasContainer = document.querySelector('.account-charts-wrap')
  const chartWraper = document.getElementById('protein-chart-container-account')
  if (chartWraper) chartWraper.remove()
  const proteinChartWrap = createElem('div', 'chart-data-container', null, canvasContainer, 'id', 'protein-chart-container-account')
  proteinChartWrap.innerHTML = ''
  const canvasTitle = createElem('h1', 'canvas-title', title, proteinChartWrap)
  const chartWrap = createElem('div', 'chart-wrapper', null, proteinChartWrap)
  const canvasProtein = createElem('canvas', null, null, chartWrap, 'id', 'protein-chart-account')
  const myChart = new Chart(canvasProtein, proteinDataFood())
}

export {createChartProteinCountAccount}