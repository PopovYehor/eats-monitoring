import moment from "moment"
import { localStorageUser } from "../account-scripts/user-data"
import { perfectWeight } from "../form-canculate/formCalculate-index"
import { selectParam } from "../form-canculate/formChangeParametr"
import {  wantDay, yearData, defheight, defWeight, defWantWeight, sexData, loginData, passwordData, nameData, surnameData, activData, formsData } from "../form-canculate/formTranformationData"

const wantDayToMoment = () =>{
    let dateArr = [] 
    for (let i = 0; i < wantDay() ; i++){
       dateArr.push((moment().add(i,'d').format('DD/MM/YY')))
    }
    return dateArr[dateArr.length-1]
}

const signUpData = ()=>{
    
    const data = {
        'id': Date.now(),
        'userName' : loginData(),
        'password': passwordData(),
        'name':nameData(),
        'surname':surnameData(),
        'email': formsData().email.value,
        'age': yearData(),
        'weight': defWeight(),
        'wantWight':defWantWeight(),
        'wantWeightParam': selectParam(formsData().wantWeightSelect).value,
        'wantDay':wantDay(),
        'height': defheight(),
        'heightParam' : selectParam(formsData().choiseHeight).value,
        'sex': sexData(),
        'active': activData(),
        'img': 'https://i.ibb.co/G5VTwDZ/1625890.png',
        'perfectWeight' : perfectWeight(),
        'dataWeight' : [defWeight()],
        'weightParam' : selectParam(formsData().choiseWeight).value,
        'dateRegist': moment().format('DD/MM/YY'),
        'dataDate': [moment().format('DD/MM/YY')],
        'wantDate': wantDayToMoment(),
        'languageCount': localStorageUser('languageCount'),
        'dataDateCalories': [],
        'dataCalories': [],
        'dataFats' : [],
        'dataProtein': [],
        'dataCarb': [],
        'dataFoodSelects': [],
    }
    return data
}
export {signUpData}