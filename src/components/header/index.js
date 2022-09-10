import "./style.scss"
import { createElem } from "../../helper/createElement"
import LangHeader from "./laguage"
import HeaderSwitch from "./login"
import {translate} from "../../helper/translate/translate"
import { onHandleRoute } from "../../helper/route"
const Header = ()=>{
    const root = document.getElementById('root')

    const wrap = createElem('header', 'header', null, root)
    const mainIcon = createElem('div', 'main-icon', null, wrap)
    const mainIconBtn = createElem('a', 'main-icon-btn', null, mainIcon, 'href', '/')
    mainIconBtn.addEventListener('click', (e)=>{onHandleRoute(e)})
    const mainIcomImg = createElem('img', 'icon', null, mainIconBtn, 'src', "https://i.ibb.co/2cjMbjh/title.png")
    mainIcomImg.setAttribute('href', '/')
    const languageWrap = document.querySelector('.language')
    if (!languageWrap){
    createElem('div', 'language', null, wrap)
    LangHeader()
    HeaderSwitch()
    }
    setTimeout(()=>{
        translate()
    }, 1050) 
}

export default Header