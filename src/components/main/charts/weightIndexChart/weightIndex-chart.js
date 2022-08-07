import { createElem } from "../../../../helper/createElement";
import Chart from 'chart.js/auto'
const data = {
    labels: [
      'Індекс',
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [22, 88,],
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

const createChartWeightIndex = ()=>{
    const wrap = document.querySelector('.canvas-container')
    const weightIndexChartWrap = createElem('div', 'weight-index-chart-wrap', null, wrap)
    const canvasTitle = createElem('h1', 'canvas-title', 'Індекс маси тіла', weightIndexChartWrap)
    const chartWrap = createElem('div', 'chart-wrap', null, weightIndexChartWrap)
    const canvasProtein = createElem('canvas', null, null, chartWrap, 'id', 'myChart')
    const label = createElem('span', 'chart-label weight-index', '22 - Норма', chartWrap)
    const myChart = new Chart(canvasProtein, config)
}

export {createChartWeightIndex}