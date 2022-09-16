import {formsData} from "../form-canculate/formTranformationData"
let countEyes = 0
let countLoginEyes = 0
let countRepeatEyes = 0
const changePassType = ()=>{
    const imgEyes = document.querySelectorAll('.eyes-pass')
    const buttonPass = document.querySelectorAll('.btn-show-pass')
    buttonPass.forEach(elem => elem.addEventListener('click', (e)=>{
    const target = e.target
    if (target.classList.contains('first-pass')){
        if (countEyes==0){
            formsData().pass.type = 'text'
            imgEyes[0].src = 'https://i.ibb.co/1sJ76MF/eye1.png'
            countEyes = 1
        }else{
            if (formsData().pass)formsData().pass.type = 'password'
            imgEyes[0].src = 'https://i.ibb.co/YNDnt4y/eye2.png'
            countEyes = 0
        }
    }else if (target.classList.contains('repeat-pass')){
        if (countRepeatEyes==0){
            formsData().repeatPassword.type = 'text'
            imgEyes[1].src = 'https://i.ibb.co/1sJ76MF/eye1.png'
            countRepeatEyes = 1
        }else{
            formsData().repeatPassword.type = 'password'
            imgEyes[1].src = 'https://i.ibb.co/YNDnt4y/eye2.png'
            countRepeatEyes = 0
        }
    }
    }))
}

const changePassTypeLogin = ()=>{
    const buttonPass = document.querySelectorAll('.btn-show-pass')
    const imgEyes = document.querySelectorAll('.eyes-pass')
    buttonPass.forEach(elem => elem.addEventListener('click', (e)=>{
        const target = e.target
        if (target.classList.contains('first-pass')){
            if (countLoginEyes==0){
                formsData().passLogin.type = 'text'
                imgEyes[0].src = 'https://i.ibb.co/1sJ76MF/eye1.png'
                countLoginEyes = 1
            }else{
                formsData().passLogin.type = 'password'
                imgEyes[0].src = 'https://i.ibb.co/YNDnt4y/eye2.png'
                countLoginEyes = 0
            }
        }
    }))
}

export {changePassType, changePassTypeLogin}