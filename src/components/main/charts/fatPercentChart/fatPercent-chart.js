import { createElem } from "../../../../helper/createElement";
import Chart from 'chart.js/auto'
const data = {
    labels: [
      'Процент жиру, %',
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [16, 84,],
      backgroundColor: [
        'rgb(255, 205, 86)',
        '#E2E2E2',
      ],
      hoverOffset: 4
    }]
  };

const config = {
    type: 'doughnut',
    data: data,
  };

const createFatPercentChart = ()=>{
    const wrap = document.querySelector('.canvas-container')
    const weightIndexChartWrap = createElem('div', 'weight-index-chart-wrap', null, wrap)
    const canvasTitle = createElem('h1', 'canvas-title', 'Процент жиру в організмі', weightIndexChartWrap)
    const chartWrap = createElem('div', 'chart-wrap', null, weightIndexChartWrap)
    const canvasProtein = createElem('canvas', null, null, chartWrap, 'id', 'myChart')
    const label = createElem('span', 'chart-label weight-index', '16 % (13 кг)- Спортивна людина', chartWrap)
    const myChart = new Chart(canvasProtein, config)
}

export {createFatPercentChart}