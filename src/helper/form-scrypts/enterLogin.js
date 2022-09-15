import { formsData } from "../form-canculate/formTranformationData"
import { signUpData } from "./singUp"
import { valueVer } from "../validation/main-form-validation"
import { user } from "../account-scripts/user-data"
import { account } from "../../components/account/profile"
import { caloriesFormulaAccount, fatWeightAccount, sameHeightTable } from "../account-scripts/table-script"
import {createAllChartsUser} from "../../components/account/charts/createAllChartsUser"
import { trueSignUpBtn } from "../../components/signUp/trueSignUpBtn"
import { getLang, TranslateTextes } from "../translate/translateText"
import { onHandleRoute } from "../route"

const cors = 'https://cors-anywhere.herokuapp.com/'
const urlData = 'https://my-json-server.typicode.com/PopovYehor/data/posts'

const API = `${cors}${urlData}`

const logIn = ()=>{
    const btn = document.querySelector('.login-form-btn')
    btn.addEventListener('click', (e)=>{
        const formLogin = formsData().login.value
        const formPass = formsData().pass.value
        fetch(urlData)
            .then(res => res)
                .then(res =>res.json())
                    .then(json=>{
                        [json[1]].forEach((elem) =>{
                            if (formLogin == elem.userName && formPass == elem.password){
                            let key = Object.keys(elem)
                            let value = Object.values(elem)
                            const lastWeighingIndex = elem.dataDate.length - 1
                            localStorage.setItem('lastWeighing', JSON.stringify(elem.dataDate[lastWeighingIndex]))
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
                                const loginWrap = document.getElementById('login-input')
                                loginWrap.dataset.validate = TranslateTextes(getLang(), 'incorectLogin')
                                loginWrap.classList.add('alert-validate')

                                const passWrap = document.getElementById('password-input')
                                passWrap.dataset.validate = TranslateTextes(getLang(), 'incorectLogin')
                                passWrap.classList.add('alert-validate')
                            }
                        })
                        /* const preloader = document.querySelector('.preload-account-page')
                        if (preloader) preloader.remove()
                        account()
                        caloriesFormulaAccount()
                        fatWeightAccount()
                        createAllChartsUser() */
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
                                    console.log(wrap)
                                    wrap.style.height = 810 + 'px'
                                    console.log(res)
                                })
                        }else{
                            const wrapLogin = document.getElementById('login-input')
                            wrapLogin.dataset.validate = TranslateTextes(getLang(), 'haveUser')
                            wrapLogin.classList.add('alert-validate')
                        }
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
}



export {logIn, postSignUp, changeAccount}