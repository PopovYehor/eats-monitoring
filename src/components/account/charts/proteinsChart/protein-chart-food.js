import { createElem } from '../../../../helper/createElement';
import Chart from 'chart.js/auto'
import { onHandleRoute } from '../../../../helper/route';
import { translateText } from '../../../../helper/translate/translateText';
const proteinDataFood = ()=>{
  let translateCount = localStorage.getItem('languageCount')
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
        'rgb(171, 235, 198, 80% )',
        'rgb(35, 155, 86, 80%)',
        'rgb(245, 203, 167, 80% )',
        'rgb(185, 119, 14, 80%)',
        'rgb(195, 155, 211, 80% )',
        'rgb(118, 68, 138, 80%)',
        
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
  let translateCount = localStorage.getItem('languageCount')
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

  const canculateBtn = createElem('a', 'count-calories-account-btn', translateText(translateCount, 'Розрахувати', 'Calculate'), proteinChartWrap, 'href', '/food')
  canculateBtn.addEventListener('click', (e)=>{onHandleRoute(e)})
}

export {createChartProteinCountAccount}