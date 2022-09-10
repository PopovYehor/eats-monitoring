import "./style.scss"
import { createElem } from "../../helper/createElement"
import { mainComponent } from "../../components/main"
import Header from "../../components/header"



const Main = ()=>{
    Header()
    const root = document.getElementById('root')
    createElem('div', 'limiter', null, root)
    mainComponent()
}
export default Main