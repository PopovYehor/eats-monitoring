import { createElem } from "../../../../helper/createElement";
import Chart from 'chart.js/auto'
import { coefficientWeightIndex } from "../../../../helper/form-canculate/CalculateCoefficient";
import { weightIndex } from "../../../../helper/form-canculate/formCalculate-index";
import { translateCount } from "../../../../helper/translate/translate";
import { translateText } from "../../../../helper/translate/translateText";
const weightIndexData = ()=>{
const residue = 100 - weightIndex()

const labelWeightIndex = translateText(translateCount, 'Індекс маси тіла', 'Body mass index')
const data = {
    labels: [
      labelWeightIndex,
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [weightIndex(), residue,],
      backgroundColor: [
        'rgb(255, 99, 132)',
        '#E2E2E2',
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

const createChartWeightIndex = ()=>{
  const title = translateText(translateCount, 'Індекс маси тіла', 'Body mass index')

  const wrap = document.getElementById('canvas-index-wrap')
  const weightIndexChartWrap = createElem('div', 'chart-data-container', null, wrap, 'id', 'weight-index-chart-container')
  createElem('h1', 'canvas-title', title, weightIndexChartWrap)
  const chartWrap = createElem('div', 'chart-wrapper', null, weightIndexChartWrap)
  const canvasProtein = createElem('canvas', null, null, chartWrap, 'id', 'myChart')
  const labelWrap = createElem('div', 'label-wrap', null, chartWrap)
  const labelItem = `
  <span class = "chart-label weight-index">  ${weightIndex()} - <span class = "chart-label-desription">${coefficientWeightIndex(weightIndex())}</span>
  `
  labelWrap.innerHTML = labelItem
  new Chart(canvasProtein, weightIndexData())
}

export {createChartWeightIndex}