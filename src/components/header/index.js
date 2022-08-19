import "./style.scss"
import { rotateList,langIconIndex, userIconIndex} from "../../helper/style"
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
    const langList = document.getElementById('lang-list')

    const userBtn = document.querySelector('.login-btn-user')
    const userList = document.getElementById('user-list')
    
    LangBtn.addEventListener('click', ()=>{
        rotateList(langList, langIconIndex)

    })
    userBtn.addEventListener('click', ()=>{
        rotateList(userList, userIconIndex)
    })
}

export default Header