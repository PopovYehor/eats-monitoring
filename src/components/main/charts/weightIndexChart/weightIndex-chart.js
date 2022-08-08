import { createElem } from "../../../../helper/createElement";
import Chart from 'chart.js/auto'
import { weightIndex } from "../../formCalculate/formCalculate-index";
import { coefficientWeightIndex } from "../../../../helper/CalculateCoefficient";

const weightIndexData = ()=>{
const residue = 100 - weightIndex()
const data = {
    labels: [
      'Індекс',
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
    const wrap = document.querySelector('.canvas-container')
    const weightIndexChartWrap = createElem('div', 'weight-index-chart-wrap', null, wrap)
    createElem('h1', 'canvas-title', 'Індекс маси тіла', weightIndexChartWrap)
    const chartWrap = createElem('div', 'chart-wrap', null, weightIndexChartWrap)
    const canvasProtein = createElem('canvas', null, null, chartWrap, 'id', 'myChart')
    createElem('span', 'chart-label weight-index', `${weightIndex()} - ${coefficientWeightIndex(weightIndex())}`, chartWrap)
    new Chart(canvasProtein, weightIndexData())
}

export {createChartWeightIndex}