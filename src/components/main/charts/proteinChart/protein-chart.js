import { createElem } from "../../../../helper/createElement";
import Chart from 'chart.js/auto'
import { calculatePartOfWantCalories } from "../../../../helper/form-canculate/formCalculate-index";
import { translateText, translateCount } from "../../../../helper/translate/translate";

const proteinData = ()=>{

  const labelProtein = translateText(translateCount, 'Білків', 'Proteins')
  const labelFats = translateText(translateCount, 'Жирів', 'Fats')
  const labelCarbohydrates = translateText(translateCount, 'Вуглеводів', 'Carbohydrates')
  
  const coeff = {
    protein : 0.30,
    fats: 0.25,
    carbohydrates: 0.45
  }

  const proteins = calculatePartOfWantCalories(coeff.protein)
  const fats = calculatePartOfWantCalories(coeff.fats)
  const carbohydrates = calculatePartOfWantCalories(coeff.carbohydrates)

const data = {
    labels: [
      labelProtein,
      labelFats,
      labelCarbohydrates
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [proteins, fats, carbohydrates],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
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
const createChartProtein = ()=>{
  const title = translateText(translateCount, 'Кількість калорій у білках, жирах та вугливодах', "Number of calories in proteins, fats and carbohydrates")

  const canvasContainer = document.getElementById('canvas-calories-wrap')
  const proteinChartWrap = createElem('div', 'chart-data-container', null, canvasContainer, 'id', 'protein-chart-container')
  const canvasTitle = createElem('h1', 'canvas-title', title, proteinChartWrap)
  const chartWrap = createElem('div', 'chart-wrapper', null, proteinChartWrap)
  const canvasProtein = createElem('canvas', null, null, chartWrap, 'id', 'myChart')
  const myChart = new Chart(canvasProtein, proteinData())
}

export {createChartProtein}