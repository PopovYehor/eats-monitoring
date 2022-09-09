import Preloader from "../../components/preloader"
import {createElem} from "../../helper/createElement"
import { logIn} from "../../helper/form-scrypts/enterLogin"
import "./style.scss"
const Account = ()=>{
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
    logIn()
}

export default Account