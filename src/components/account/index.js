import { createElem } from "../../helper/createElement"
import Preloader from "../preloader"
import "./style"
import { account } from "./profile"
import {createAllChartsUser} from "./charts/createAllChartsUser"
import Login from "../../views/login"
const AccountProfile = ()=>{
    const root = document.getElementById('root')
    const wrap = createElem('div', 'user-wrap', null, root)
    const containerAccount = createElem('div', 'account-container-wrap', null, wrap)
    const containerProfile = createElem('div', 'container-profile', null, containerAccount)
    const container = createElem('div', 'container-user', null, containerAccount)
    
    createElem('div', 'profile active', null, containerProfile)
    createElem('div', 'account-charts-wrap', null, container)
    createElem('div', 'progres-chart-user', null, container) 

    const preloadWrap =  createElem('div', 'preload-account-page', null, wrap)
    Preloader(preloadWrap)
    const user = localStorage.getItem('userName')
    if (user){
        account()
        createAllChartsUser()
        const preloader = document.querySelector('.preload-account-page')
        if (preloader) preloader.remove()
    }else{
        root.innerHTML = ''
        window.history.pushState({}, '', '/login')
        window.route = Login()
    }
}

export default AccountProfile