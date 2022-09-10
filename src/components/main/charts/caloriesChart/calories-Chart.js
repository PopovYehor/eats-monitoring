import { createElem } from "../../../../helper/createElement";
import Chart from 'chart.js/auto'
import { caloriesFormula, calculateWantCalories  } from "../../../../helper/form-canculate/formCalculate-index";
import { translateCount } from "../../../../helper/translate/translate";
import { translateText } from "../../../../helper/translate/translateText";
const DATA_COUNT = 5;
const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};


const CaloriesChartData = ()=>{
  
  const wantCalories = Number(calculateWantCalories()).toFixed(0)
  const remainder = wantCalories - caloriesFormula()

  let betweenLabel = ''
  remainder > 0 ? betweenLabel = translateText(translateCount, 'Додаткові калорії', 'Extra Calories') : betweenLabel = translateText(translateCount, 'Зайві калорії', 'Extra Calories')
  const labelCaloriesCount = translateText(translateCount, 'Ваша кількість калорій', 'Your Calorie Count')
  const labelCalTotal = translateText(translateCount, 'Загальна кількість калорій', 'Total Calories')

  const data = {
    labels: [labelCaloriesCount, betweenLabel, labelCalTotal],
    datasets: [
      {
        backgroundColor: ['#AAA', '#777'],
        data: [caloriesFormula(), remainder]
      },
      {
        backgroundColor: ['hsl(0, 100%, 60%)'],
        data: [wantCalories]
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
  return config
}
const createCaloriesChart = ()=>{
  const title = translateText(translateCount, 'Розрахунок калорій', 'Calculating Calories')

  const wrap = document.getElementById('canvas-calories-wrap')
  const caloriesChartWrap = createElem('div', 'chart-data-container', null, wrap, 'id', 'calories-chart-container')
  const canvasTitle = createElem('h1', 'canvas-title', title, caloriesChartWrap)
  const chartWrap = createElem('div', 'chart-wrapper', null, caloriesChartWrap)
  const canvasProtein = createElem('canvas', null, null, chartWrap, 'id', 'myChart')
  const myChart = new Chart(canvasProtein, CaloriesChartData())
}

export {createCaloriesChart}