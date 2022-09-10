import { createElem } from "../../../helper/createElement";
import Chart from 'chart.js/auto'
import { translateCount } from "../../../helper/translate/translate";
import { localStorageUser } from "../../../helper/account-scripts/user-data";
import { translateText } from "../../../helper/translate/translateText";
const caloriesData = ()=>{

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
        'rgb(255, 99, 132)',
        'rgb(255, 0, 0)',
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
const createChartCaloriesCount = ()=>{
  const title = translateText(translateCount, 'Добова норма калорій', "Daily caloric intake")
  
  const canvasContainer = document.querySelector('.food-chart-wrap')
  const chartWraper = document.getElementById('calories-chart-container')
  if (chartWraper) chartWraper.remove()
  const proteinChartWrap = createElem('div', 'chart-data-container', null, canvasContainer, 'id', 'calories-chart-container')
  proteinChartWrap.innerHTML = ''
  const canvasTitle = createElem('h1', 'canvas-title', title, proteinChartWrap)
  const chartWrap = createElem('div', 'chart-wrapper', null, proteinChartWrap)
  const canvasProtein = createElem('canvas', null, null, chartWrap, 'id', 'myChart')
  const myChart = new Chart(canvasProtein, caloriesData())
}

export {createChartCaloriesCount}