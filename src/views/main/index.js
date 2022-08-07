import "./style.scss"
import { createElem } from "../../helper/createElement"
import { mainComponent } from "../../components/main"
import { createChartProtein } from "../../components/main/charts/proteinChart/protein-chart"
import { createChartProgres } from "../../components/main/charts/progresChart/dataProgresChart"
import { createChartWeightIndex } from "../../components/main/charts/weightIndexChart/weightIndex-chart"
import { createFatPercentChart } from "../../components/main/charts/fatPercentChart/fatPercent-chart"
import { createCaloriesChart } from "../../components/main/charts/caloriesChart/calories-Chart"
import { createPerfectWeightChart } from "../../components/main/charts/idealWeightChart/calories-Chart"
const main = ()=>{
    const root = document.getElementById('root')
    createElem('div', 'limiter', null, root)
    mainComponent()
    createChartProtein()
    createChartWeightIndex()
    createFatPercentChart()
    createCaloriesChart()
    createPerfectWeightChart()
   /*  createChartProgres() */
    


}
export default main