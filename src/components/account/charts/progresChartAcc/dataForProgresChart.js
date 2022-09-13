import moment from 'moment'
import { localStorageUser } from '../../../../helper/account-scripts/user-data'
const differentDay = ()=>{
    const arrDate = localStorageUser('dataDate')
    const wantDate = localStorageUser('wantDate')
    arrDate.push(wantDate)
    let arrDiffDay = []
    for (let i = 0; i<arrDate.length-1; i++){
        arrDiffDay.push((moment(arrDate[i], "DD/MM/YY").diff(moment(arrDate[i+1], "DD/MM/YY"), 'days'))*(-1))
    }
    return arrDiffDay
}

const everyDayData=()=>{
    const arrDate = localStorageUser('dataDate')
    const wantDate = localStorageUser('wantDate')
    arrDate.push(wantDate)
    let arrEveryDay = []
    differentDay().forEach((elem, i)=>{
        for(let j = 0; j< elem; j++){
            arrEveryDay.push((moment(arrDate[i], "DD/MM/YY").add(j,'d').format('DD/MM/YY')))
            }
    })
    return arrEveryDay
}

const weightDayData = ()=>{
    const arrDate = localStorageUser('dataDate')
    const wantDate = localStorageUser('wantDate')
    arrDate.push(wantDate)
    const arrWeight= localStorageUser('dataWeight')
    const wantWeight = localStorageUser('wantWeight')
    arrWeight.push(wantWeight)
    let arrBettwenWeight = []
    for (let i = 0; i<arrWeight.length-1; i++){
        arrBettwenWeight.push(arrWeight[i]-arrWeight[i+1])
    }

    let arrWeightDay = []
    differentDay().forEach((elem, i)=>{
        let dayWeight = Number(arrWeight[i])
        for(let j = 0; j<elem; j++){
            dayWeight = dayWeight.toFixed(2)- (arrBettwenWeight[i]/elem).toFixed(2)
            arrWeightDay.push(dayWeight.toFixed(2))
        }
    })
    arrDate.forEach((elem, i) =>{
        for (let j = 0; j<everyDayData().length; j++ ){
            if (elem == everyDayData()[j]){
                arrWeightDay[j] =  arrWeight[i]
            }
        }
    })
    return arrWeightDay
}

const fromTodayToWantDate = ()=> moment().diff(moment(localStorageUser('wantDate'), 'DD/MM/YY'), 'days')*(-1)


export {everyDayData, weightDayData, fromTodayToWantDate}