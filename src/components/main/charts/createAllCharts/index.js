import { createElem } from "../../../../helper/createElement"
import {createChartProtein} from "../proteinChart/protein-chart"
import { createChartProgres } from "../progresChart/dataProgresChart"
import { createChartWeightIndex } from "../weightIndexChart/weightIndex-chart"
import { createFatPercentChart } from "../fatPercentChart/fatPercent-chart"
import { createCaloriesChart } from "../caloriesChart/calories-Chart"
import { createPerfectWeightChart } from "../idealWeightChart/idealWeight-Chart"

const createAllCharts = ()=>{
    const container = document.querySelector('.container-login')
    const chartContainerWrap = document.querySelector('.chart-container')
    if (chartContainerWrap){ chartContainerWrap.innerHTML = ''
    }else{
        createElem('div', 'chart-container', null, container)
    }
    const columnChartContainer = createElem('div', 'column-chart-container', null, chartContainerWrap || document.querySelector('.chart-container'))

    const chartCaloriesWrap =  createElem('div', 'chart-wrap', null, columnChartContainer, 'id', 'calories-wrap')
    createElem('div', 'canvas-chart-wrap', null, chartCaloriesWrap, 'id', 'canvas-calories-wrap')
    createCaloriesChart()
    createChartProtein()
    createPerfectWeightChart()

    const chartProgresWrap = createElem('div', 'chart-progres-wrap', null, columnChartContainer )
    createElem('div', 'canvas-chart-wrap', null, chartProgresWrap, 'id', 'canvas-progres-wrap')
    createChartProgres()

    const rowChartContainer = createElem('div', 'row-chart-container', null, chartContainerWrap || document.querySelector('.chart-container'))
    const chartIndexWrap = createElem('div', 'chart-wrap', null, rowChartContainer, 'id', 'index-wrap')
    createElem('div', 'canvas-chart-wrap', null, chartIndexWrap, 'id', 'canvas-index-wrap')
    createChartWeightIndex()
    createFatPercentChart()
    
}

export default createAllCharts