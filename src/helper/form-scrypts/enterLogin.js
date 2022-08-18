import { formsData } from "../form-canculate/formTranformationData"

const cors = 'https://cors-anywhere.herokuapp.com/'
const urlData = 'my-json-server.typicode.com/PopovYehor/data/posts'
const API = `${cors}${urlData}`


const logIn = ()=>{
    const btn = document.querySelector('.login-form-btn')
    btn.addEventListener('click', ()=>{
        const formLogin = formsData().login.value
        const formPass = formsData().pass.value
        fetch(API)
            .then(res => res)
                .then(res =>res.json())
                    .then(res=>{
                        res.forEach(elem =>{
                            if(elem.userName == formLogin && elem.password == formPass){
                                console.log('ok')
                            }
                        })

                    })
    })
}

export {logIn}