import { formsData } from "../form-canculate/formTranformationData"
const progressBar = (item, input, symbolCount)=>{
        let count = input.value.length * (100/symbolCount)
        if (count >= 100) count = 100
        item.style.setProperty('--width', `${count}%`)
    input.addEventListener('keyup', ()=>{
        let count = input.value.length * (100/symbolCount)
        if (count >= 100) count = 100
        item.style.setProperty('--width', `${count}%`)
    })
    
}

export {progressBar}