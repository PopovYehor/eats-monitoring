import { account } from "../../components/account"
import {createElem} from "../../helper/createElement"
import { logIn} from "../../helper/form-scrypts/enterLogin"
import CreateAllChartsUser from "../../components/account/charts/createAllChartsUser"
import "./style.scss"
const Account = ()=>{
    const root = document.getElementById('root')
    const wrap = createElem('div', 'user-wrap', null, root)
    const containerAccount = createElem('div', 'account-container-wrap', null, wrap)
    const containerProfile = createElem('div', 'container-profile', null, containerAccount)
    const container = createElem('div', 'container-user', null, containerAccount)
    
    createElem('div', 'profile active', null, containerProfile)
    logIn()
    setTimeout(()=>{
        account()
    }, 1000)
    createElem('div', 'account-charts-wrap', null, container)
    CreateAllChartsUser()
}

export default Account