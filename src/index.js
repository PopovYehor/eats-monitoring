import './style/styles.scss'
import main from './views/main'
import { placeholderClickUp, placeholderUp, selectHasVal } from './helper/placeholderUp'
import moment from 'moment'
main()
placeholderUp()
placeholderClickUp()
selectHasVal()





/* const count = 30
const weight = 85
const wantWeight = 75
let dateArr = [] 
for (let i = 0; i< count+1; i++){
    dateArr.push((moment().add(i,'d').format('DD/MM/YY')))
}
console.log(dateArr)
const bettwenWeight = (weight-wantWeight)/(count)
let dayWeight = weight
let dayWeightArr = []
for (let i = 0; i<count ;i++){
    dayWeight = dayWeight.toFixed(2) - bettwenWeight.toFixed(2)
    dayWeightArr.push((dayWeight.toFixed(2)))
}
console.log(dayWeightArr)

let weightDayArr = [`${weight}`]
let arr = weightDayArr.concat(dayWeightArr)
console.log(arr) */