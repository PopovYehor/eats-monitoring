import LoginComponent from "../../components/login"
import { createElem } from "../../helper/createElement"
import {changePassTypeLogin} from "../../helper/form-scrypts/viewPassword"
import { logIn } from "../../helper/form-scrypts/enterLogin"
import Header from "../../components/header"
import { placeholderClickUp, placeholderUp } from "../../helper/form-scrypts/placeholderUp"
import { verAll } from "../../helper/validation/main-form-validation"
import { localStorageUser } from "../../helper/account-scripts/user-data"
const Login = ()=>{
    const plateCount = localStorageUser('plateCount')
    const selectItem = localStorageUser('selectedItem')
    if (selectItem && plateCount) {
        localStorage.removeItem('plateCount')
        localStorage.removeItem('selectedItem')
    }

    Header()
    const root = document.getElementById('root')
    createElem('div', 'limiter', null, root)
    LoginComponent()
    changePassTypeLogin()
    placeholderClickUp()
    placeholderUp()
    logIn()
    verAll()
}

export default Login