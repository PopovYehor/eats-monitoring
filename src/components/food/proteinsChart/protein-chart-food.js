import { createElem } from "../../../helper/createElement";
import Chart from 'chart.js/auto'

import { localStorageUser } from "../../../helper/account-scripts/user-data";
import { translateText } from "../../../helper/translate/translateText";
import { onHandleRoute } from "../../../helper/route";
import { changeFoodData } from "../../../helper/food-script/changeFoodData";
const proteinDataFood = ()=>{
  let translateCount = localStorage.getItem('languageCount')
  const labelProtein = translateText(translateCount, 'Залишок білків', 'Left proteins')
  const labelFats = translateText(translateCount, 'Залишок жирів', 'Left fats')
  const labelCarbohydrates = translateText(translateCount, 'Залишок вуглеводів', 'Left carbohydrates')

  const labelNeedProtein = translateText(translateCount, 'Додано білків', 'Added proteins')
  const labelNeedFats = translateText(translateCount, 'Додано жирів', 'Added fats')
  const labelNeedCarbohydrates = translateText(translateCount, 'Додано вуглеводів', 'Added carbohydrates')

  
  let needProtein = localStorage.getItem('protein')
  const normalProtein = localStorageUser('needProtein')
  const addProtein = (needProtein - normalProtein)*(-1)
  if (needProtein <= 0) needProtein = 0
  localStorage.setItem('addProtein', addProtein)

  let needFats = localStorage.getItem('fats')
  const normalFats = localStorageUser('needFats')
  const addFats = (needFats - normalFats)*(-1)
  if (needFats <= 0) needFats = 0
  localStorage.setItem('addFats', addFats)

  let needCarbohydrates = localStorage.getItem('carbohydrates')
  const normalCarbohydrates = localStorageUser('needCarbohydrates')
  const addCarbohydrates = (needCarbohydrates - normalCarbohydrates)*(-1)
  if (needCarbohydrates <= 0) needCarbohydrates = 0
  localStorage.setItem('addCarbohydrates', addCarbohydrates)



const data = {
    labels: [
      labelProtein,
      labelNeedProtein,
      labelFats,
      labelNeedFats,
      labelCarbohydrates,
      labelNeedCarbohydrates
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [needProtein, addProtein, needFats, addFats, needCarbohydrates, addCarbohydrates],
      backgroundColor: [
        'rgb(171, 235, 198, 80% )',
        'rgb(35, 155, 86, 80%)',
        'rgb(245, 203, 167, 80% )',
        'rgb(185, 119, 14, 80%)',
        'rgb(195, 155, 211, 80% )',
        'rgb(118, 68, 138, 80%)',
        
      ],
      hoverOffset: 4
    }]
  };

const config = {
    type: 'doughnut',
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
  }
  };
  return config
}
const createChartProteinCount = ()=>{
  let translateCount = localStorage.getItem('languageCount')
  const title = translateText(translateCount, 'Добова норма білків, жирів та вуглеводів', "Daily rate of proteins, fats and carbohydrates")

  const canvasContainer = document.querySelector('.food-chart-wrap')
  const chartWraper = document.getElementById('protein-chart-container')
  if (chartWraper) chartWraper.remove()
  const proteinChartWrap = createElem('div', 'chart-data-container', null, canvasContainer, 'id', 'protein-chart-container')
  proteinChartWrap.innerHTML = ''
  const canvasTitle = createElem('h1', 'canvas-title', title, proteinChartWrap)
  const chartWrap = createElem('div', 'chart-wrapper', null, proteinChartWrap)
  const canvasProtein = createElem('canvas', null, null, chartWrap, 'id', 'proteinChart')
  const myChart = new Chart(canvasProtein, proteinDataFood())

  const saveChangeBtn = createElem('a', 'save-change-btn', localStorageUser('userName') ? `${translateText(translateCount, 'Зберегти зміни', 'Save changes')}` : `${translateText(translateCount, 'Вихід', 'Leave page')}`, proteinChartWrap, 'href', localStorageUser('userName') ? '/account' : '/')

  const id = localStorageUser('id')
  saveChangeBtn.addEventListener('click', (e)=>{changeFoodData(e, id)})
}

export {createChartProteinCount}