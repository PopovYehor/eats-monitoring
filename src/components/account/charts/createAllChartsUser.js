import CreateChartProgresUser from "./progresChartAcc/dataProgresChart"
import { createChartCaloriesCountAccount } from "./caloriesChart/calorieschart"
import { createChartProteinCountAccount } from "./proteinsChart/protein-chart-food"
import { createChartWeightIndexAccount } from "./weightIndexChart/weightIndex-chart"
import { createFatPercentChartAccount } from "./fatPercentChart/fatPercent-chart"
const CreateAllChartsUser = ()=>{
    createChartCaloriesCountAccount()
    createChartProteinCountAccount()
    createChartWeightIndexAccount()
    createFatPercentChartAccount()
    CreateChartProgresUser()
}

export default CreateAllChartsUser