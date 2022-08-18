import "./style.scss"
import { langRotate, userRotate} from "../../helper/style"
import { createElem } from "../../helper/createElement"
import LangHeader from "./laguage"
import HeaderSwitch from "./login"
const Header = ()=>{
    
    const wrap = document.querySelector('header')

    const mainIcon = createElem('div', 'main-icon', null, wrap)
    const mainIconBtn = createElem('a', 'main-icon-btn', null, mainIcon, 'href', '#')
    createElem('img', 'icon', null, mainIconBtn, 'src', "https://i.ibb.co/2cjMbjh/title.png")

    createElem('div', 'language', null, wrap)
    LangHeader()

    createElem('div', 'login-btn-wrap', null, wrap)
    HeaderSwitch()
    
    const LangBtn = document.querySelector('.language-btn')
    const userBtn = document.querySelector('.login-btn-user')
    
    LangBtn.addEventListener('click', ()=>{
        langRotate('#lang-list')
    })
    userBtn.addEventListener('click', ()=>{
        userRotate('#user-list')
    })
}

export default Header