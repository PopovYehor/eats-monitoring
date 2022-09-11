import { createElem } from '../../../../helper/createElement';
import Chart from 'chart.js/auto'
import { translateText } from '../../../../helper/translate/translateText';
import { localStorageUser } from '../../../../helper/account-scripts/user-data';

const caloriesData = ()=>{
  let translateCount = localStorage.getItem('languageCount')
  const labelCalories= translateText(translateCount, 'Залишок Калорій', 'Remainder of calories')
  const labelNeedCalories= translateText(translateCount, 'Додано Калорій', 'Added calories')

  let needCalories = Number(localStorageUser('calories'))
  const normal = Number(localStorageUser('needCalories'))
  const addCalories = (needCalories - normal)*(-1)
  if (needCalories <= 0) needCalories = 0
  
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
const createChartCaloriesCountAccount = ()=>{
  let translateCount = localStorage.getItem('languageCount')
  const title = translateText(translateCount, 'Добова норма калорій', "Daily caloric intake")
  
  const canvasContainer = document.querySelector('.account-charts-wrap')
  const chartWraper = document.getElementById('calories-chart-container-account')
  if (chartWraper) chartWraper.remove()
  const proteinChartWrap = createElem('div', 'chart-data-container', null, canvasContainer, 'id', 'calories-chart-container-account')
  proteinChartWrap.innerHTML = ''
  const canvasTitle = createElem('h1', 'canvas-title', title, proteinChartWrap)
  const chartWrap = createElem('div', 'chart-wrapper', null, proteinChartWrap)
  const canvasProtein = createElem('canvas', null, null, chartWrap, 'id', 'account-calories-chart')
  const myChart = new Chart(canvasProtein, caloriesData())

  
}

export {createChartCaloriesCountAccount}