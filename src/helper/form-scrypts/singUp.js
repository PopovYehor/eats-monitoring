import moment from "moment"
import { perfectWeight } from "../form-canculate/formCalculate-index"
import { selectParam } from "../form-canculate/formChangeParametr"
import {  wantDay, yearData, defheight, defWeight, defWantWeight, sexData, loginData, passwordData, nameData, surnameData, activData, formsData } from "../form-canculate/formTranformationData"

const signUpData = ()=>{
    const data = {
        'id': Date.now(),
        'userName' : loginData(),
        'password': passwordData(),
        'name':nameData().charAt(0).toUpperCase() + nameData().slice(1),
        'surname':surnameData().charAt(0).toUpperCase() + surnameData().slice(1),
        'email': formsData().email.value,
        'age': moment(formsData().birdth.value, 'YYYY-MM-DD').format('DD/MM/YY'),
        'weight': defWeight(),
        'wantWight':defWantWeight(),
        'wantWeightParam': selectParam(formsData().wantWeightSelect).value,
        'height': defheight(),
        'heightParam' : selectParam(formsData().choiseHeight).value,
        'sex': sexData(),
        'active': selectParam(formsData().activeLevel).value,
        'img': 'https://i.ibb.co/G5VTwDZ/1625890.png',
        'perfectWeight' : perfectWeight(),
        'dataWeight' : [defWeight()],
        'weightParam' : selectParam(formsData().choiseWeight).value,
        'dateRegist': moment().format('DD/MM/YY'),
        'dataDate': [moment().format('DD/MM/YY')],
        'wantDate': moment(formsData().wantDate.value, 'YYYY-MM-DD').format('DD/MM/YY'),
        'translateCount': JSON.parse(localStorage.getItem('translateCount')),
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