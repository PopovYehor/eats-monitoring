import { formsData } from "../form-canculate/formTranformationData"
import { signUpData } from "./singUp"
import { valueVer } from "../validation/main-form-validation"
import { account } from "../../components/account/profile"
import { sameHeightTable } from "../account-scripts/table-script"
import {createAllChartsUser} from "../../components/account/charts/createAllChartsUser"
import { trueSignUpBtn } from "../../components/signUp/trueSignUpBtn"
import { getLang, TranslateTexts } from "../translate/translateText"
import { onHandleRoute } from "../route"
import { caloriesFormulaAccount, fatWeightAccount } from "../account-scripts/canculate-account-data"
import Error from "../../views/error/Error"


const cors = 'https://cors-anywhere.herokuapp.com/'
const urlData = 'https://my-json-server.typicode.com/PopovYehor/data/posts'

const API = `${cors}${urlData}`


//login to account
const logIn = ()=>{
    const btn = document.querySelector('.login-form-btn')
    btn.addEventListener('click', (e)=>{
        const formLogin = formsData().loginLogin.value
        const formPass = formsData().passLogin.value
        const loginWrap = document.getElementById('login-input')
        const passWrap = document.getElementById('password-input')

        fetch(urlData)
            .then(res => res)
                .then(res =>res.json())
                    .then(json=>{
                        
                        if (json.some(elem => (elem.userName == formLogin && elem.password == formPass))){
                            let user
                            json.forEach((elem) =>{
                                if (formLogin == elem.userName && formPass == elem.password){
                                    return user = elem
                                }})
                                let key = Object.keys(user)
                                let value = Object.values(user)
                                const lastWeighingIndex = user.dataDate.length - 1
                                localStorage.setItem('lastWeighing', JSON.stringify(user.dataDate[lastWeighingIndex]))
                                for (let j = 0; j<key.length; j++){
                                    user[key[j]] = value[j]
                                    localStorage.setItem(key[j], JSON.stringify(value[j]))
                                }
                                onHandleRoute(e)
                                const preloader = document.querySelector('.preload-account-page')
                                if (preloader) preloader.remove()
                                account()
                                caloriesFormulaAccount()
                                fatWeightAccount()
                                createAllChartsUser()
                        }else{
                            loginWrap.dataset.validate = TranslateTexts(getLang(), 'incorectLogin')
                            loginWrap.classList.add('alert-validate')

                            passWrap.dataset.validate = TranslateTexts(getLang(), 'incorectLogin')
                            passWrap.classList.add('alert-validate')
                        }
                    })
                    .catch(()=>{
                        root.innerHTML = ''
                        window.history.pushState({}, '', '/error')
                        window.route = Error()
                    })
    })
}

const postSignUp = ()=>{
    const btn = document.querySelector('.login-form-btn')
    const dontValid = document.querySelectorAll('.alert-validate')
    const inputes = document.querySelectorAll('.input')
    const btnWrap = document.querySelector('.wrap-login-form-btn')

    btn.addEventListener('click', ()=>{
        
        if (valueVer(inputes) && dontValid.length == 0){
            const formLogin = formsData().login.value
            fetch(urlData)
            .then(res => res)
                .then(res =>res.json())
                    .then(json=>{
                        
                        if(!json.some(elem=> elem.userName == formLogin)){

                            fetch(urlData, {
                                method: 'POST',
                                body: JSON.stringify(signUpData()),
                                headers: {
                                    'Content-type': 'application/json; charset=UTF-8',
                                },
                            })
                            .then(res => res.json())
                                .then(res =>{
                                    btnWrap.innerHTML = trueSignUpBtn()
                                    const btn = document.querySelector('.login-form-btn')
                                    btn.style.fontSize = 35 + 'px'
                                    const wrap = document.getElementById('wrap-signUp')
                                    wrap.style.height = 810 + 'px'
                                    console.log(res)
                                })
                        }else{
                            const wrapLogin = document.getElementById('login-input')
                            wrapLogin.dataset.validate = TranslateTexts(getLang(), 'haveUser')
                            wrapLogin.classList.add('alert-validate')
                        }
                    })
                    .catch(()=>{
                        root.innerHTML = ''
                        window.history.pushState({}, '', '/error')
                        window.route = Error()
                    })
        }   
    })
}


const changeAccount = (data, id)=>{
    
fetch(`${urlData}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
.then(res => res.json())
    .then(res =>{
        console.log(res)
        const profile = document.querySelector('.profile')
        profile.innerHTML = ''
        account()
        sameHeightTable()
        caloriesFormulaAccount()
        fatWeightAccount()
        createAllChartsUser()
    })
    .catch(()=>{
        root.innerHTML = ''
        window.history.pushState({}, '', '/error')
        window.route = Error()
    })  
}



export {logIn, postSignUp, changeAccount}