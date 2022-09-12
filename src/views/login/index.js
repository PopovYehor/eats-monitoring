import LoginComponent from "../../components/login"
import { createElem } from "../../helper/createElement"
import {changePassType} from "../../helper/form-scrypts/viewPassword"
import { logIn } from "../../helper/form-scrypts/enterLogin"
import Header from "../../components/header"
import { placeholderClickUp, placeholderUp } from "../../helper/form-scrypts/placeholderUp"
import { verAll } from "../../helper/validation/main-form-validation"
const Login = ()=>{
    Header()
    const root = document.getElementById('root')
    createElem('div', 'limiter', null, root)
    LoginComponent()
    changePassType()
    placeholderClickUp()
    placeholderUp()
    logIn()
    verAll()
}

export default Login