import { formsData } from "../form-canculate/formTranformationData"
import { signUpData } from "./singUp"
const cors = 'https://cors-anywhere.herokuapp.com/'
const urlData = 'https://my-json-server.typicode.com/PopovYehor/data/posts'
const API = `${cors}${urlData}`


const logIn = ()=>{
    const btn = document.querySelector('.login-form-btn')
    btn.addEventListener('click', ()=>{
        const formLogin = formsData().login.value
        const formPass = formsData().pass.value
        fetch(urlData)
            .then(res => res)
                .then(res =>res.json())
                    .then(res=>{
                        console.log(res)
                        /* res.forEach(elem =>{
                            if(elem.userName == formLogin && elem.password == formPass){
                                console.log('ok')
                            }
                        }) */

                    })
    })
}

const postSignUp = ()=>{
    const btn = document.querySelector('.login-form-btn')
    btn.addEventListener('click', ()=>{
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
    })
}

export {logIn, postSignUp}