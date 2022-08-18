import LoginComponent from "../../components/login"
import { createElem } from "../../helper/createElement"
import {changePassType} from "../../helper/form-scrypts/viewPassword"
import { logIn } from "../../helper/form-scrypts/enterLogin"
const Login = ()=>{
    const root = document.getElementById('root')
    createElem('div', 'limiter', null, root)
    LoginComponent()
    changePassType()
    logIn()
}

export default Login