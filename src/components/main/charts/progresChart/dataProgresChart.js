import { createElem } from "../../../../helper/createElement";
import Chart from 'chart.js/auto'
import { dateData, dateWeightData } from "./dataForProgresChart";

const progresChartData = ()=>{
  const data = {
      labels: dateData(),
      datasets: [
        {
          label: 'Вага',
          data: dateWeightData(),
          borderColor: 'red',
          backgroundColor: 'red',
          pointStyle: 'circle',
          pointRadius: 3,
          pointHoverRadius: 4
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
  return config
}
const createChartProgres = ()=>{
    const canvasContainer = document.querySelector('.canvas-container')
    const canvasTitle = createElem('h1', 'canvas-title', 'Прогрес вашої ваги', canvasContainer)
    const canvasProgres = createElem('canvas', null, null, canvasContainer, 'id', 'myChart')
    const myChart = new Chart(canvasProgres, progresChartData())
}

export {createChartProgres}