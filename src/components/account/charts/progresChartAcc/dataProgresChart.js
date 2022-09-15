import { createElem } from "../../../../helper/createElement";
import Chart from 'chart.js/auto'
import { everyDayData, weightDayData } from "./dataForProgresChart";
import { localStorageUser } from "../../../../helper/account-scripts/user-data";
import { TranslateTextes, getLang } from '../../../../helper/translate/translateText';

const progresChartData = ()=>{

  let paramLabel = ''
  const choiseWeightOption = localStorageUser('weightParam')
  choiseWeightOption == 'pounds' ? paramLabel = TranslateTextes(getLang(), 'pound') : paramLabel = TranslateTextes(getLang(), 'kg')

  const data = {
      labels: everyDayData(),
      datasets: [
        {
          label: `${TranslateTextes(getLang(), 'weight')}, ${paramLabel} `,
          data: weightDayData(),
          borderColor: '#F44336',
          backgroundColor: '#F44336',
          pointStyle: 'line',
          pointRadius: 3,
          pointHoverRadius: 4
        }
      ]
  };

  const config = {
      type: 'line',
      data: data,
      options: {
      responsive: false,
      maintainAspectRatio: false,
    }
  };
  return config
}
const CreateChartProgresUser = ()=>{
  
  const title = TranslateTextes(getLang(), 'YourWeightProgress')
  
  const canvasContainer = document.querySelector('.progres-chart-user')
  const chartWraper = document.getElementById('progres-container')
  if (chartWraper) chartWraper.remove()
  const ChartWrap = createElem('div', 'chart-data-container', null, canvasContainer, 'id', 'progres-container')
  const canvasTitle = createElem('h1', 'canvas-title', title, ChartWrap)
  const canvasProgres = createElem('canvas', null, null, ChartWrap, 'id', 'progress-account-chart')
  const myChart = new Chart(canvasProgres, progresChartData())
}

export default CreateChartProgresUser