import { createElem } from "../../../../helper/createElement";
import Chart from 'chart.js/auto'
const data = {
    labels: [
      'Білки',
      'Жири',
      'Вуглеводи'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [907, 756, 1360],
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

const createChartProtein = ()=>{
    const canvasContainer = document.querySelector('.canvas-container')
    const canvasTitle = createElem('h1', 'canvas-title', 'Кількість калорій у білках, жирах та вугливодах', canvasContainer)
    const chartWrap = createElem('div', 'chart-wrap', null, canvasContainer)
    const canvasProtein = createElem('canvas', null, null, chartWrap, 'id', 'myChart')
    /* const label = createElem('span', 'chart-label', 'Норма', canvasContainer) */
    const myChart = new Chart(canvasProtein, config)
}

export {createChartProtein}