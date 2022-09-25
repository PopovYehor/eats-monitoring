
import formWrap from "../formWrap"
import { formSelect } from "../formOption"
import { selectOptionItem } from "../../../helper/form-scrypts/selectOption"
const sexSelect = (wrap)=>{
    const sexWrap = formWrap('sex-input', 'sex', 'sexValidate', wrap)
    const sexSelect = formSelect('sex', 'sex', 'sex', sexWrap)
    selectOptionItem('sex', sexSelect)
}

export default sexSelect