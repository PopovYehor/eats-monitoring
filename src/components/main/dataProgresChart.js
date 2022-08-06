import { createElem } from "../../helper/createElement";
import Chart from 'chart.js/auto'
import { dateArr, arr } from "./dataForProgresChart";
const data = {
    labels: dateArr,
    datasets: [
      {
        label: 'Вага',
        data: arr,
        borderColor: 'red',
        backgroundColor: 'red',
        pointStyle: 'circle',
        pointRadius: 5,
        pointHoverRadius: 7
      }
    ]
};

const config = {
    type: 'line',
    data: data,
    options: {
      responsive: true,
    }
};

const createChartProgres = ()=>{
    const canvasContainer = document.querySelector('.canvas-container')
    const canvasTitle = createElem('h1', 'canvas-title', 'Прогрес вашої ваги', canvasContainer)
    const canvasProgres = createElem('canvas', null, null, canvasContainer, 'id', 'myChart')
    const myChart = new Chart(canvasProgres, config)
}

export {createChartProgres}