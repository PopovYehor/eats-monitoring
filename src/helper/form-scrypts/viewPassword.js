import {formsData} from "../form-canculate/formTranformationData"
let countEyes = 0

const changePassType = ()=>{
    const imgEyes = document.querySelector('.eyes-pass')
    const buttonPass = document.querySelector('.btn-show-pass')
    
    buttonPass.addEventListener('click', (e)=>{
    const target = e.target
    if (target && countEyes==0){
        formsData().pass.type = 'text'
        imgEyes.src = 'https://i.ibb.co/1sJ76MF/eye1.png'
        countEyes = 1
    }
    else if (target && countEyes==1){
        formsData().pass.type = 'password'
        imgEyes.src = 'https://i.ibb.co/YNDnt4y/eye2.png'
        countEyes = 0
    }
    })
}

export {changePassType}