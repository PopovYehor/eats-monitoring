import { createElem } from "../../../../helper/createElement";
import Chart from 'chart.js/auto'
import { dateData, dateWeightData } from "./dataForProgresChart";
import { translateCount } from "../../../../helper/translate/translate";
import { formsData } from "../../../../helper/form-canculate/formTranformationData";
import { selectParam } from "../../../../helper/form-canculate/formChangeParametr";
import { translateText } from "../../../../helper/translate/translateText";
const progresChartData = ()=>{
  let paramLabel = ''
  const choiseWeightOption = selectParam(formsData().choiseWeight)
  choiseWeightOption.value == 'pounds' ? paramLabel = translateText(translateCount, 'фунти', 'pounds') : paramLabel = translateText(translateCount, 'кілограми', 'kilograms')

  const data = {
      labels: dateData(),
      datasets: [
        {
          label: `${translateText(translateCount, 'Вага', 'Weight')}, ${paramLabel} `,
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
  const title = translateText(translateCount, 'Прогрес вашої ваги', 'Your Weight Progress')

  const canvasContainer = document.getElementById('canvas-progres-wrap')
  const ChartWrap = createElem('div', 'chart-data-container', null, canvasContainer, 'id', 'progres-container')
  const canvasTitle = createElem('h1', 'canvas-title', title, ChartWrap)
  const canvasProgres = createElem('canvas', null, null, ChartWrap, 'id', 'myChart')
  const myChart = new Chart(canvasProgres, progresChartData())
}

export {createChartProgres}