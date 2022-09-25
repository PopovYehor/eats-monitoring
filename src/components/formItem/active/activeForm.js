import formWrap from "../formWrap"
import { formSelect } from "../formOption"
import { selectOptionItem } from "../../../helper/form-scrypts/selectOption"

const activeForm = (wrap)=>{
    const activWrap = formWrap('activ-input', 'activ', 'choise', wrap)
    const activSelect = formSelect('activeLevel', 'active-level', null, activWrap)
    selectOptionItem('activ', activSelect)
}

export default activeForm