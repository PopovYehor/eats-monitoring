import { formOption } from "../../components/formItem/formOption"

const optionItems = {
    sex: [
      {choiseSex: 'choise'},
      {male: 'male'},
      {female: 'female'},
    ],
    height:[
      {sm: 'sm'},
      {inches: 'inches'},
    ],
    weight:[
      {kg: 'kg'},
      {pounds: 'pound'},
    ],
    activ:[
      {choise: 'choise'},
      {none: 'none'},
      {low: 'low'},
      {middle: 'middle'},
      {hight: 'hight'},
      {veryHight: 'veryHight'},
    ]
}

const selectOptionItem = (item, select)=>{
    optionItems[item].forEach((elem) =>{
      const value = String(Object.values(elem))
      const key = String(Object.keys(elem))
      formOption(value, key, select)
    })
}

export {selectOptionItem}