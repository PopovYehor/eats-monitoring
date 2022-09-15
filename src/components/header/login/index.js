import "../laguage/style"
import { createElem } from "../../../helper/createElement"

import { getLang, TranslateTextes } from "../../../helper/translate/translateText"
import { onHandleRoute } from "../../../helper/route"
import { localStorageUser } from "../../../helper/account-scripts/user-data"
const HeaderSwitch = ()=>{

    const menuWrap = document.querySelector('.language')
    const wrap = document.getElementById('route-menu')
    if (wrap){
        wrap.innerHTML = ''
        wrap.remove()
    }
    
    const routeMenu = createElem('ul', 'menu', null, menuWrap, 'id', 'route-menu')
    const routeDropDown = createElem('li', 'dropdown dropdown-6', null, routeMenu)
    const routeBtn = `<button class = "language-btn">&#xf007</button>`
    routeDropDown.innerHTML = routeBtn
    const routeDropdownMenu = createElem('ul', 'dropdown_menu dropdown_menu--animated dropdown_menu-6', null, routeDropDown)
    const routeElement =  !localStorage.getItem('userName') ? `
    <div class="dropdown_item">&#xf2f6<a class = "dorp-item-img" href = "/login" id = "loginBtn">${TranslateTextes(getLang(), 'login')}</a></div>
    <div class="dropdown_item">&#xf234 <a class = "dorp-item-img" href = "/signUp" id ="signUpBtn">${TranslateTextes(getLang(), 'headerSingUp')}</a></div>
    ` : `
    <div class="dropdown_item">&#xf52b <a class = "dorp-item-img" href = "/login" id = "signOutBtn">${TranslateTextes(getLang(), 'SignOut')}</a></div>
    `
    routeDropdownMenu.innerHTML = routeElement
    if (!localStorageUser('userName')){
        const loginBtn = document.getElementById('loginBtn')
        loginBtn.addEventListener('click', (e)=> onHandleRoute(e))

        const signUpBtn = document.getElementById('signUpBtn')
        signUpBtn.addEventListener('click', (e)=> onHandleRoute(e))
    }else{
        const signOutBtn = document.getElementById('signOutBtn')
        signOutBtn.addEventListener('click', (e)=>{
            window.localStorage.clear()
            onHandleRoute(e)
        })
    }
}

export default HeaderSwitch