import moment from 'moment'
import { formsData, wantDay, defWantWeight, defWeight } from '../../../../helper/form-canculate/formTranformationData'
const dateData = ()=>{
    let dateArr = [] 
    for (let i = 0; i < wantDay() ; i++){
       dateArr.push((moment().add(i,'d').format('DD/MM/YY')))
    }
    return dateArr
}

const dateWeightData = ()=>{ 
    const bettwenWeight = (defWeight()-defWantWeight())/(formsData().wantDay.value)
    let dayWeight = Number(defWeight())
    let dayWeightArr = []
    for (let i = 0; i < wantDay() ;i++){
        dayWeight = dayWeight.toFixed(2) - bettwenWeight.toFixed(2)
        dayWeightArr.push((dayWeight.toFixed(2)))
    }

    let weightDayArr = [`${defWeight()}`]
    let arr = weightDayArr.concat(dayWeightArr)
    return arr
}

export {dateData, dateWeightData}