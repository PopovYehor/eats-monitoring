import { createElem } from "../../helper/createElement"
import { signUpComponent } from "../../components/signUp"
import { progressBar } from "../../helper/form-scrypts/progress-bar"
import { formsData } from "../../helper/form-canculate/formTranformationData"
import { postSignUp, logIn } from "../../helper/form-scrypts/enterLogin"
import { changePassType } from "../../helper/form-scrypts/viewPassword"
import { valueVer, verAll } from "../../helper/validation/main-form-validation"
import { placeholderClickUp, placeholderUp, selectHasVal } from "../../helper/form-scrypts/placeholderUp"
import Header from "../../components/header"
const SignUp = ()=>{
    Header()
    const root = document.getElementById('root')
    createElem('div', 'limiter', null, root)
    signUpComponent()
    const inputes  = document.querySelectorAll('.input')
    const LoginpPogress = document.getElementById('login-progress')
    progressBar(LoginpPogress, formsData().login, 6)

    const PasswordProgress = document.getElementById('password-progress')
    progressBar(PasswordProgress, formsData().pass, 8)

    const RepeatPasswordProgress = document.getElementById('password-repeat-progress')
    progressBar(RepeatPasswordProgress, formsData().repeatPassword, 8)
    placeholderClickUp()
    placeholderUp()
    selectHasVal()
    verAll()
    changePassType()
    postSignUp()
}

export default SignUp