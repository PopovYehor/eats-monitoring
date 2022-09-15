import { createElem } from "../../../../helper/createElement";
import Chart from 'chart.js/auto'
import { perfectWeight } from "../../../../helper/form-canculate/formCalculate-index";
import { defWeight } from "../../../../helper/form-canculate/formTranformationData";

import { getLang, TranslateTexts } from "../../../../helper/translate/translateText";
const DATA_COUNT = 3;
const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};

const idealWeightData = ()=>{
  let remainder = ''
  defWeight() > perfectWeight() ? remainder = defWeight() - perfectWeight() : remainder = perfectWeight() - defWeight()

  const labelPerfectWeight = TranslateTexts(getLang(), 'PerfectWeight')
  const labelYourWeight = TranslateTexts(getLang(), 'YourWeight')
  const labelToPerfectWeight = TranslateTexts(getLang(), 'ToThePerfectWeight')

  const data = {
    labels: [labelPerfectWeight, labelYourWeight, labelToPerfectWeight],
    datasets: [
      {
        backgroundColor: ['#ffc0eb' ],
        data: [perfectWeight()]
      },
      {
        backgroundColor: ['#eeabc0', '#dd9595'],
        data: [defWeight(), remainder]
      },
    ]
  };

  const config = {
      type: 'pie',
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            labels: {
              generateLabels: function(chart) {
                // Get the default label list
                const original = Chart.overrides.pie.plugins.legend.labels.generateLabels;
                const labelsOriginal = original.call(this, chart);
    
                // Build an array of colors used in the datasets of the chart
                let datasetColors = chart.data.datasets.map(function(e) {
                  return e.backgroundColor;
                });
                datasetColors = datasetColors.flat();
    
                // Modify the color and hide state of each label
                labelsOriginal.forEach(label => {
                  // There are twice as many labels as there are datasets. This converts the label index into the corresponding dataset index
                  label.datasetIndex = (label.index - label.index % 2) / 2;
    
                  // The hidden state must match the dataset's hidden state
                  label.hidden = !chart.isDatasetVisible(label.datasetIndex);
    
                  // Change the color to match the dataset
                  label.fillStyle = datasetColors[label.index];
                });
    
                return labelsOriginal;
              }
            },
            onClick: function(mouseEvent, legendItem, legend) {
              // toggle the visibility of the dataset from what it currently is
              legend.chart.getDatasetMeta(
                legendItem.datasetIndex
              ).hidden = legend.chart.isDatasetVisible(legendItem.datasetIndex);
              legend.chart.update();
            }
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                const labelIndex = (context.datasetIndex * 1) + context.dataIndex;
                return context.chart.data.labels[labelIndex] + ': ' + context.formattedValue;
              }
            }
          }
        }
      },
  };
  return config
}
const createPerfectWeightChart = ()=>{
  const title = TranslateTexts(getLang(), 'YourPerfectWeight')

  const wrap = document.getElementById('canvas-calories-wrap')
  const weightIndexChartWrap = createElem('div', 'chart-data-container', null, wrap, 'id', 'weight-perfect-container')
  const canvasTitle = createElem('h1', 'canvas-title', title, weightIndexChartWrap)
  const chartWrap = createElem('div', 'chart-wrapper', null, weightIndexChartWrap)
  const canvasProtein = createElem('canvas', null, null, chartWrap, 'id', 'myChart')
  const myChart = new Chart(canvasProtein, idealWeightData())
}

export {createPerfectWeightChart}