import {  wantDay, yearData, defheight, defWeight, defWantWeight, sexData, loginData, passwordData, nameData, surnameData, activData } from "../form-canculate/formTranformationData"
const signUpData = ()=>{
    const data = {
        'userName' : loginData(),
        'password': passwordData(),
        'name':nameData(),
        'surname':surnameData(),
        'age': yearData(),
        'weight': defWeight(),
        'wantWight':defWantWeight(),
        'wantDay':wantDay(),
        'height': defheight(),
        'sex': sexData(),
        'active': activData(),
        'img': 'https://i.ibb.co/G5VTwDZ/1625890.png'
    }
    return data
}
export {signUpData}