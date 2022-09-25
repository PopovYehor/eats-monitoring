import formWrap from "../formWrap"
import { formSelect } from "../formOption"
import { selectOptionItem } from "../../../helper/form-scrypts/selectOption"
import formInput from "../formInput"

const weightForm = (wrap, id, key, placeKey, paramName, inputName)=>{
    const weightWrap = formWrap(id, key, 'weightValidate', wrap, placeKey, true)
    formInput(inputName, weightWrap)
    const weightParamSelect = formSelect(paramName, null, null, weightWrap, true)
    selectOptionItem('weight', weightParamSelect)
}

export default weightForm