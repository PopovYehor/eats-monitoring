import { createElem } from "../../../../helper/createElement";
import Chart from 'chart.js/auto'
import { calculatePartOfWantCalories } from "../../../../helper/form-canculate/formCalculate-index";

import { translateText } from "../../../../helper/translate/translateText";
const proteinData = ()=>{
  let translateCount = localStorage.getItem('languageCount')
  const labelProtein = translateText(translateCount, 'Білків', 'Proteins')
  const labelFats = translateText(translateCount, 'Жирів', 'Fats')
  const labelCarbohydrates = translateText(translateCount, 'Вуглеводів', 'Carbohydrates')
  
  const coeff = {
    protein : 0.30,
    fats: 0.25,
    carbohydrates: 0.45
  }

  const proteins = calculatePartOfWantCalories(coeff.protein)
  localStorage.setItem('protein', proteins)
  localStorage.setItem('needProtein', proteins)

  const fats = calculatePartOfWantCalories(coeff.fats)
  localStorage.setItem('fats', fats)
  localStorage.setItem('needFats', fats)

  const carbohydrates = calculatePartOfWantCalories(coeff.carbohydrates)
  localStorage.setItem('carbohydrates', carbohydrates)
  localStorage.setItem('needCarbohydrates', carbohydrates)

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
        'rgb(171, 235, 198, 80% )',
        'rgb(245, 203, 167, 80% )',
        'rgb(195, 155, 211, 80% )'
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
  let translateCount = localStorage.getItem('languageCount')
  const title = translateText(translateCount, 'Кількість калорій у білках, жирах та вугливодах', "Number of calories in proteins, fats and carbohydrates")

  const canvasContainer = document.getElementById('canvas-calories-wrap')
  const proteinChartWrap = createElem('div', 'chart-data-container', null, canvasContainer, 'id', 'protein-chart-container')
  const canvasTitle = createElem('h1', 'canvas-title', title, proteinChartWrap)
  const chartWrap = createElem('div', 'chart-wrapper', null, proteinChartWrap)
  const canvasProtein = createElem('canvas', null, null, chartWrap, 'id', 'myChart')
  const myChart = new Chart(canvasProtein, proteinData())
}

export {createChartProtein}