import { formsData } from "../form-canculate/formTranformationData"
import { signUpData } from "./singUp"
import { valueVer } from "../validation/main-form-validation"
import { user } from "../account-scripts/user-data"
import { account } from "../../components/account"
import { caloriesFormulaAccount, fatWeightAccount, sameHeightTable } from "../account-scripts/table-script"
import CreateAllChartsUser from "../../components/account/charts/createAllChartsUser"

const cors = 'https://cors-anywhere.herokuapp.com/'
const urlData = 'https://my-json-server.typicode.com/PopovYehor/data/posts'

const API = `${cors}${urlData}`

const logIn = ()=>{
    /* const btn = document.querySelector('.login-form-btn')
    btn.addEventListener('click', ()=>{
        const formLogin = formsData().login.value
        const formPass = formsData().pass.value */
        fetch(urlData)
            .then(res => res)
                .then(res =>res.json())
                    .then(json=>{
                        [json[1]].forEach((elem, i) =>{
                            let key = Object.keys(elem)
                            let value = Object.values(elem)
                            const lastWeighingIndex = elem.dataDate.length - 1
                            localStorage.setItem('lastWeighing', JSON.stringify(elem.dataDate[lastWeighingIndex]))
                            for (let j = 0; j<key.length; j++){
                                user[key[j]] = value[j]
                                localStorage.setItem(key[j], JSON.stringify(value[j]))
                            }
                        })
                        const preloader = document.querySelector('.preload-account-page')
                        if (preloader) preloader.remove()
                        account()
                        caloriesFormulaAccount()
                        fatWeightAccount()
                        CreateAllChartsUser()
                    })
}

const postSignUp = ()=>{
    const btn = document.querySelector('.login-form-btn')
    const dontValid = document.querySelectorAll('.alert-validate')
    btn.addEventListener('click', ()=>{
        if (valueVer() && dontValid.length == 0){
            fetch(urlData, {
                method: 'POST',
                body: JSON.stringify(signUpData()),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then(res => res.json())
                .then(res =>{
                    console.log(res)
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
        CreateAllChartsUser()
    })  
}

export {logIn, postSignUp, changeAccount}