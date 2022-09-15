import { createElem } from '../../../../helper/createElement';
import Chart from 'chart.js/auto'
import { onHandleRoute } from '../../../../helper/route';
import { TranslateTextes, getLang } from '../../../../helper/translate/translateText';
const proteinDataFood = ()=>{
  const labelProtein = TranslateTextes(getLang(), 'RemnantProteins')
  const labelFats = TranslateTextes(getLang(), 'RemnantFats')
  const labelCarbohydrates = TranslateTextes(getLang(), 'RemnantCarb')

  const labelNeedProtein = TranslateTextes(getLang(), 'AddedProteins')
  const labelNeedFats = TranslateTextes(getLang(), 'AddedFats')
  const labelNeedCarbohydrates = TranslateTextes(getLang(), 'AddedCarb')

  
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

  const title =TranslateTextes(getLang(), 'DailyProtein')

  const canvasContainer = document.querySelector('.account-charts-wrap')
  const chartWraper = document.getElementById('protein-chart-container-account')
  if (chartWraper) chartWraper.remove()
  const proteinChartWrap = createElem('div', 'chart-data-container', null, canvasContainer, 'id', 'protein-chart-container-account')
  proteinChartWrap.innerHTML = ''
  const canvasTitle = createElem('h1', 'canvas-title', title, proteinChartWrap)
  const chartWrap = createElem('div', 'chart-wrapper', null, proteinChartWrap)
  const canvasProtein = createElem('canvas', null, null, chartWrap, 'id', 'protein-chart-account')
  const myChart = new Chart(canvasProtein, proteinDataFood())

  const canculateBtn = createElem('a', 'count-calories-account-btn', TranslateTextes(getLang(), 'calculate'), proteinChartWrap, 'href', '/food')
  canculateBtn.addEventListener('click', (e)=>{onHandleRoute(e)})
}

export {createChartProteinCountAccount}