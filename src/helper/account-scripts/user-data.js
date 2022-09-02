import {translateText, translateCount} from "../translate/translate"
import moment from "moment"
const localStorageUser = (key)=>{
    const element = localStorage.getItem(key)
    return element
}

const user = {
    id: localStorageUser('id') || 0,
    userName: localStorageUser('userName') || '',
    password: localStorageUser('password') || '',
    name: localStorageUser('name') || '',
    surname: localStorageUser('surname') || '',
    sex: localStorageUser('sex') || '',
    age: localStorageUser('age') || '',
    height: localStorageUser('height') || '',
    heightParam: localStorageUser('heightParam') || '',
    weight: localStorageUser('weight') || '',
    weightParam: localStorageUser('weightParam') || '',
    wantWeight: localStorageUser('wantWeight') || '',
    wantWeightParam: localStorageUser('wantWeightParam') || '',
    active: localStorageUser('active') || '',
    photo: localStorageUser('photo') || '',
    dateRegist: localStorageUser('dateRegist') || '',
    wantDate: localStorageUser('wantDate') || '',
    languageCount: localStorageUser('languageCount') || '',
    dataWeight : localStorageUser('dataWeight') || [],
    dataDate: localStorageUser('dataDate') || [],
}

const userObjectValue = (keys)=>{
    let element = user[keys]
    return element
}

const dateFormat = ()=>{
    const arrDate = ['01/08/22','02/09/22', '10/09/22', '01/10/22']
    const arrWeight= ['65' ,'63', '62', '65']
    let arrDiffDay = []
    for (let i = 0; i<arrDate.length-1; i++){
        arrDiffDay.push((moment(arrDate[i], "DD/MM/YY").diff(moment(arrDate[i+1], "DD/MM/YY"), 'days'))*(-1))
    }
    let arrEveryDay = []
    arrDiffDay.forEach((elem, i)=>{
        for(let j = 0; j< elem; j++){
            arrEveryDay.push((moment(arrDate[i], "DD/MM/YY").add(j,'d').format('DD/MM/YY')))
            }
    })
    let arrBettwenWeight = []
    for (let i = 0; i<arrWeight.length-1; i++){
        arrBettwenWeight.push(arrWeight[i]-arrWeight[i+1])
    }
    let arrWeightWay = []
    arrDiffDay.forEach((elem, i)=>{
        let dayWeight = Number(arrWeight[i])
        for(let j = 0; j<elem; j++){
            dayWeight = dayWeight.toFixed(2)- (arrBettwenWeight[i]/elem).toFixed(2)
            arrWeightWay.push(dayWeight.toFixed(2))
        }
    })
    arrDate.forEach((elem, i) =>{
        for (let j = 0; j<arrEveryDay.length; j++ ){
            if (elem == arrEveryDay[j]){
                arrWeightWay[j] =  arrWeight[i]
            }
        }
    })
    console.log(arrEveryDay)
    console.log(arrWeightWay)
    
}

const everyDayDate=()=>{
    const arrDate = ['01/08/22','02/09/22', '10/09/22', '01/10/22']
    let arrDiffDay = []
    for (let i = 0; i<arrDate.length-1; i++){
        arrDiffDay.push((moment(arrDate[i], "DD/MM/YY").diff(moment(arrDate[i+1], "DD/MM/YY"), 'days'))*(-1))
    }
    let arrEveryDay = []
    arrDiffDay.forEach((elem, i)=>{
        for(let j = 0; j< elem; j++){
            arrEveryDay.push((moment(arrDate[i], "DD/MM/YY").add(j,'d').format('DD/MM/YY')))
            }
    })
}

export {localStorageUser, user, userObjectValue, dateFormat}