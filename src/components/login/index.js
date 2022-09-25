import { onHandleRoute } from "../../helper/route"
import { getLang, TranslateTexts } from "../../helper/translate/translateText"
import { createElem } from "../../helper/createElement"
import formWrap from "../formItem/formWrap"
import formInput from "../formItem/formInput"
import "./style"

const LoginComponent = ()=>{
    //form
    const wrap = document.querySelector('.limiter')
    const mainContainer = createElem('div', 'container-login', null, wrap)
    const mainWrap = createElem('div', 'wrap-main', null, mainContainer, 'id', 'wrap-login')
    const form  = createElem ('form', 'login-form validate-form', null, mainWrap, 'id', 'singUpForm')
    form.setAttribute('name', 'singUpForm')
    createElem('span', 'login-form-title', 'Eats Monitoring', form)
    const titleImgWrap = createElem('span', 'login-form-title', null, form, 'id', 'titleImg')
    const titleImg = `<i href = '/'><img src="https://i.ibb.co/2cjMbjh/title.png" alt="" width="80px" height="80px"></i>`
    titleImgWrap.innerHTML = titleImg
    //login
    const loginWrapper = createElem('div', null, null, form, 'id', 'loginWrapper')
    const loginWrap = formWrap('login-input', 'enterLogin', 'enterLoginValidate', loginWrapper, 'logins', true)
    formInput('loginLogin', loginWrap, 'TestUser_1')
    //password
    const passwordWrapper = createElem('div', null, null, form, 'id', 'passwordWrapper')
    const passwordWrap = formWrap('password-input', 'enterPass', 'enterPassValidate', passwordWrapper, 'password', true)
    const eyeBtn = createElem('button', 'btn-show-pass', null, passwordWrap, 'type', 'button')
    createElem('img', 'eyes-pass first-pass', null, eyeBtn, 'src', 'https://i.ibb.co/YNDnt4y/eye2.png')
    formInput('passLogin', passwordWrap, 'qwertY21', true)
    //loginBtn
    const containerLoginFormBtn = createElem('div', 'container-login-form-btn', null, form)
    const wrapLoginFormBtn = createElem('div', 'wrap-login-form-btn', null, containerLoginFormBtn)
    createElem('div', 'login-form-bgbtn', null, wrapLoginFormBtn)
    const loginBtn = createElem('button', 'login-form-btn lang', TranslateTexts(getLang(), 'login'),wrapLoginFormBtn , 'key', 'login')
    loginBtn.type = 'button'
    loginBtn.setAttribute('href', '/account')
    //bottom text
    const bottomTextWrap = createElem('div', 'text-center', null, containerLoginFormBtn)
    const bottomText = `
    <span class="trueSignUp lang" key="havntAcc">${TranslateTexts(getLang(), 'havntAcc')}</span>
    <a class="trueSignUp lang" key="SingUp" href="/signUp" id = "signUpBtnLogin">${TranslateTexts(getLang(), 'regist')}</a>`
    bottomTextWrap.innerHTML = bottomText

    const signUpBtn = document.getElementById('signUpBtnLogin')
    signUpBtn.addEventListener('click', (e)=>onHandleRoute(e))
}

export default LoginComponent