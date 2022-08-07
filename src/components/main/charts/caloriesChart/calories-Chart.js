import { createElem } from "../../../../helper/createElement";
import Chart from 'chart.js/auto'
const DATA_COUNT = 5;
const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};


const data = {
  labels: ['Ваша кількість калорій', 'Додаткові калорії', 'Загальна кількість калорій'],
  datasets: [
    {
      backgroundColor: ['#AAA', '#777'],
      data: [3023, 1100]
    },
    {
      backgroundColor: ['hsl(0, 100%, 60%)'],
      data: [4123]
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
              const labelIndex = (context.datasetIndex * 2) + context.dataIndex;
              return context.chart.data.labels[labelIndex] + ': ' + context.formattedValue;
            }
          }
        }
      }
    },
};

const createCaloriesChart = ()=>{
    const wrap = document.querySelector('.canvas-container')
    const weightIndexChartWrap = createElem('div', 'weight-index-chart-wrap', null, wrap)
    const canvasTitle = createElem('h1', 'canvas-title', 'Розрахунок калорій', weightIndexChartWrap)
    const chartWrap = createElem('div', 'chart-wrap', null, weightIndexChartWrap)
    const canvasProtein = createElem('canvas', null, null, chartWrap, 'id', 'myChart')
    /* const label = createElem('span', 'chart-label weight-index', '16 % (13 кг)- Спортивна людина', chartWrap) */
    const myChart = new Chart(canvasProtein, config)
}

export {createCaloriesChart}