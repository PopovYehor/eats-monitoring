import { createElem } from "../../../helper/createElement";
import Chart from 'chart.js/auto'
import { translateText, translateCount } from "../../../helper/translate/translate";

const caloriesData = ()=>{

  const labelCalories= translateText(translateCount, 'Білків', 'Proteins')
  let needCalories = localStorage.getItem('calories')
  const normal = 1000
  const addCalories = (needCalories - normal)*(-1)
  if (needCalories <= 0) needCalories = 0
const data = {
    labels: [
      labelCalories,
      addCalories
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
  canvasContainer.innerHTML = ''
  const proteinChartWrap = createElem('div', 'chart-data-container', null, canvasContainer, 'id', 'protein-chart-container')
  const canvasTitle = createElem('h1', 'canvas-title', title, proteinChartWrap)
  const chartWrap = createElem('div', 'chart-wrapper', null, proteinChartWrap)
  const canvasProtein = createElem('canvas', null, null, chartWrap, 'id', 'myChart')
  const myChart = new Chart(canvasProtein, caloriesData())
}

export {createChartCaloriesCount}