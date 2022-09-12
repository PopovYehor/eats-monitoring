import './style.scss'
import { createElem } from "../../../helper/createElement"
import { localStorageUser } from '../../../helper/account-scripts/user-data'

const LangHeader = ()=>{
    const menuWrap = document.querySelector('.language')
    const languageMenu = createElem('ul', 'menu', null, menuWrap, 'id', 'language-menu')
    const languageDropDown = createElem('li', 'dropdown dropdown-6', null, languageMenu)
    const languageBtn = `<button class = "language-btn">&#xf7a2</button>`
    languageDropDown.innerHTML = languageBtn
    const LanguageDropdownMenu = createElem('ul', 'dropdown_menu dropdown_menu--animated dropdown_menu-6', null, languageDropDown)
    const LanguageElement = `
    <div class="dropdown_item"><img class = "dorp-item-img translate" src ="https://i.ibb.co/DDPtQjW/uk.png" id = "uk"></div>
    <div class="dropdown_item"><img class = "dorp-item-img translate" src ="https://i.ibb.co/TYgkb1g/en.png" id = "en" ></div>
    `
    LanguageDropdownMenu.innerHTML = LanguageElement
    let translateCount = localStorage.getItem('languageCount')
    if (!translateCount) localStorage.setItem('languageCount', 0)
    
}

export default LangHeader