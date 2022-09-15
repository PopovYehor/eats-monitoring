import { createElem } from "../../../../helper/createElement";
import Chart from 'chart.js/auto'
import { dateData, dateWeightData } from "./dataForProgresChart";

import { formsData } from "../../../../helper/form-canculate/formTranformationData";
import { selectParam } from "../../../../helper/form-canculate/formChangeParametr";
import { getLang, TranslateTexts } from "../../../../helper/translate/translateText";
const progresChartData = ()=>{
  let paramLabel = ''
  const choiseWeightOption = selectParam(formsData().choiseWeight)
  choiseWeightOption.value == 'pounds' ? paramLabel = TranslateTexts(getLang(), 'pound') : paramLabel = TranslateTexts(getLang(), 'kg')

  const data = {
      labels: dateData(),
      datasets: [
        {
          label: `${TranslateTexts(getLang(), 'weight')}, ${paramLabel} `,
          data: dateWeightData(),
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
        responsive: true,
      }
  };
  return config
}
const createChartProgres = ()=>{
  const title = TranslateTexts(getLang(), 'YourWeightProgress')

  const canvasContainer = document.getElementById('canvas-progres-wrap')
  const ChartWrap = createElem('div', 'chart-data-container', null, canvasContainer, 'id', 'progres-container')
  const canvasTitle = createElem('h1', 'canvas-title', title, ChartWrap)
  const canvasProgres = createElem('canvas', null, null, ChartWrap, 'id', 'progressChart-main')
  const myChart = new Chart(canvasProgres, progresChartData())
}

export {createChartProgres}