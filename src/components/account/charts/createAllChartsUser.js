import { createElem } from "../../../helper/createElement"
import CreateChartProgresUser from "./progresChartAcc/dataProgresChart"
import { createChartCaloriesCountAccount } from "./caloriesChart/calorieschart"
import { createChartProteinCountAccount } from "./proteinsChart/protein-chart-food"
import { createChartWeightIndexAccount } from "./weightIndexChart/weightIndex-chart"
import { createFatPercentChartAccount } from "./fatPercentChart/fatPercent-chart"
const CreateAllChartsUser = ()=>{
    const wrap = document.querySelector('.container-user')
    
    createChartCaloriesCountAccount()
    createChartProteinCountAccount()
    createChartWeightIndexAccount()
    createFatPercentChartAccount()

    const progressWrap = createElem('div', 'progres-chart-user', null, wrap)
    CreateChartProgresUser()
}

export default CreateAllChartsUser