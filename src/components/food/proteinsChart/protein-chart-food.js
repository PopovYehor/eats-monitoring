import { createElem } from "../../../helper/createElement";
import Chart from 'chart.js/auto'
import { translateCount } from "../../../helper/translate/translate";
import { localStorageUser } from "../../../helper/account-scripts/user-data";
import { translateText } from "../../../helper/translate/translateText";
const proteinDataFood = ()=>{

  const labelProtein = translateText(translateCount, 'Залишок білків', 'Remainder of proteins')
  const labelFats = translateText(translateCount, 'Залишок жирів', 'Remainder of fats')
  const labelCarbohydrates = translateText(translateCount, 'Залишок вуглеводів', 'Remainder of carbohydrates')

  const labelNeedProtein = translateText(translateCount, 'Додано білків', 'Added proteins')
  const labelNeedFats = translateText(translateCount, 'Додано жирів', 'Added fats')
  const labelNeedCarbohydrates = translateText(translateCount, 'Додано вуглеводів', 'Added carbohydrates')

  
  let needProtein = localStorage.getItem('protein')
  const normalProtein = localStorageUser('needProtein')
  const addProtein = (needProtein - normalProtein)*(-1)
  if (needProtein <= 0) needProtein = 0

  let needFats = localStorage.getItem('fats')
  const normalFats = localStorageUser('needFats')
  const addFats = (needFats - normalFats)*(-1)
  if (needFats <= 0) needFats = 0

  let needCarbohydrates = localStorage.getItem('carbohydrates')
  const normalCarbohydrates = localStorageUser('needCarbohydrates')
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
      hoverOffset: 4
    }]
  };

const config = {
    type: 'doughnut',
    data: data,
  };
  return config
}
const createChartProteinCount = ()=>{
  const title = translateText(translateCount, 'Добова норма білків, жирів та вуглеводів', "Daily rate of proteins, fats and carbohydrates")

  const canvasContainer = document.querySelector('.food-chart-wrap')
  const chartWraper = document.getElementById('protein-chart-container')
  if (chartWraper) chartWraper.remove()
  const proteinChartWrap = createElem('div', 'chart-data-container', null, canvasContainer, 'id', 'protein-chart-container')
  proteinChartWrap.innerHTML = ''
  const canvasTitle = createElem('h1', 'canvas-title', title, proteinChartWrap)
  const chartWrap = createElem('div', 'chart-wrapper', null, proteinChartWrap)
  const canvasProtein = createElem('canvas', null, null, chartWrap, 'id', 'proteinChart')
  const myChart = new Chart(canvasProtein, proteinDataFood())
}

export {createChartProteinCount}