import "./style.scss"
import { createElem } from "../../helper/createElement"
import { mainComponent } from "../../components/main"



const main = ()=>{
    const root = document.getElementById('root')
    createElem('div', 'limiter', null, root)
    mainComponent()
}
export default main