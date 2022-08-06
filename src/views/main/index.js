import "./style.scss"
import { createElem } from "../../helper/createElement"
import { mainComponent } from "../../components/main"
import { createChartProtein } from "../../components/main/protein-chart"
import { createChartProgres } from "../../components/main/dataProgresChart"
const main = ()=>{
    const root = document.getElementById('root')
    createElem('div', 'limiter', null, root)
    mainComponent()
    createChartProtein()

   /*  createChartProgres() */
    


}
export default main