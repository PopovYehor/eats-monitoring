import { createElem } from "../../../../helper/createElement";
import Chart from 'chart.js/auto'
import { calculatePartOfWantCalories } from "../../../../helper/form-canculate/formCalculate-index";

import { getLang, TranslateTextes } from "../../../../helper/translate/translateText";
const proteinData = ()=>{
  const labelProtein = TranslateTextes(getLang(), 'Proteins')
  const labelFats = TranslateTextes(getLang(), 'Fats')
  const labelCarbohydrates = TranslateTextes(getLang(), 'Carbohydrates')
  
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

  const title = TranslateTextes(getLang(), 'NumberCalories')

  const canvasContainer = document.getElementById('canvas-calories-wrap')
  const proteinChartWrap = createElem('div', 'chart-data-container', null, canvasContainer, 'id', 'protein-chart-container')
  const canvasTitle = createElem('h1', 'canvas-title', title, proteinChartWrap)
  const chartWrap = createElem('div', 'chart-wrapper', null, proteinChartWrap)
  const canvasProtein = createElem('canvas', null, null, chartWrap, 'id', 'myChart')
  const myChart = new Chart(canvasProtein, proteinData())
}

export {createChartProtein}