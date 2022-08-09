import moment from 'moment'
import { formsData, weightData, wantWeightData, wantDay} from '../../formCalculate/formCalculate-index'

const dateData = ()=>{
    let dateArr = [] 
    for (let i = 0; i < wantDay() ; i++){
       dateArr.push((moment().add(i,'d').format('DD/MM/YY')))
    }
    return dateArr
}

const dateWeightData = ()=>{ 
    const bettwenWeight = (weightData()-wantWeightData())/(formsData().wantDay.value)
    let dayWeight = 85
    let dayWeightArr = []
    for (let i = 0; i < wantDay() ;i++){
        dayWeight = dayWeight.toFixed(2) - bettwenWeight.toFixed(2)
        dayWeightArr.push((dayWeight.toFixed(2)))
    }

    let weightDayArr = [`${weightData()}`]
    let arr = weightDayArr.concat(dayWeightArr)
    return arr
}

export {dateData, dateWeightData}