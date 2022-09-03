import { createElem } from "../../../helper/createElement"
import CreateChartProgresUser from "./progresChartAcc/dataProgresChart"
const CreateAllChartsUser = ()=>{
    const wrap = document.querySelector('.container-user')
    const chartsWrap = createElem('div', 'chart-wrap-user', null, wrap)
    /* const progressWrap = createElem('div', 'progres-chart-user', null, chartsWrap)
    CreateChartProgresUser() */
    
}

export default CreateAllChartsUser