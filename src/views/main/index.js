import "./style.scss"
import { createElem } from "../../helper/createElement"
import { mainComponent } from "../../components/main"
import { createChartProtein } from "../../components/main/charts/proteinChart/protein-chart"
import { createChartProgres } from "../../components/main/charts/progresChart/dataProgresChart"
import { createChartWeightIndex } from "../../components/main/charts/weightIndexChart/weightIndex-chart"
import { createFatPercentChart } from "../../components/main/charts/fatPercentChart/fatPercent-chart"
import { createCaloriesChart } from "../../components/main/charts/caloriesChart/calories-Chart"
import { createPerfectWeightChart } from "../../components/main/charts/idealWeightChart/idealWeight-Chart"


const main = ()=>{

    const root = document.getElementById('root')
    createElem('div', 'limiter', null, root)
    mainComponent()

    const container = document.querySelector('.container-login')
    const chartContainer = createElem('div', 'chart-container', null, container)

    const chartCaloriesWrap =  createElem('div', 'chart-calories-wrap', null, chartContainer)
    createElem('div', 'canvas-chart-calories-wrap', null, chartCaloriesWrap)
    createCaloriesChart()
    createChartProtein()

    const chartIndexWrap = createElem('div', 'chart-index-wrap', null, chartContainer)
    createElem('div', 'canvas-chart-index-wrap', null, chartIndexWrap)
    createChartWeightIndex()
    createFatPercentChart()
    createPerfectWeightChart()
    
    createChartProgres()
    


}
export default main