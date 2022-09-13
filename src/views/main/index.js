import "./style.scss"
import { createElem } from "../../helper/createElement"
import { mainComponent } from "../../components/main"
import Header from "../../components/header"
import { localStorageUser } from "../../helper/account-scripts/user-data"
import Account from "../account"

const Main = ()=>{
    localStorage.setItem('languageCount', 0)
    if (localStorageUser('userName')){
        root.innerHTML = ''
        window.history.pushState({}, '', '/account')
        window.route = Account()
    }else{
        Header()
        const root = document.getElementById('root')
        createElem('div', 'limiter', null, root)
        mainComponent()
    }
}
export default Main