import { account } from "../../components/account"
import {createElem} from "../../helper/createElement"
import { logIn} from "../../helper/form-scrypts/enterLogin"
import CreateAllChartsUser from "../../components/account/charts/createAllChartsUser"
const Account = ()=>{
    const root = document.getElementById('root')
    const wrap = createElem('div', 'user-wrap', null, root)
    const containerProfile = createElem('div', 'container-profile', null, wrap)
    const container = createElem('div', 'container-user', null, wrap)
    
    createElem('div', 'profile active', null, containerProfile)
    logIn()
    setTimeout(()=>{
        account()
    }, 1000)
    
    /* CreateAllChartsUser() */
}

export default Account