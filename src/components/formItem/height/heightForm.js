import formWrap from "../formWrap"
import { formSelect } from "../formOption"
import { selectOptionItem } from "../../../helper/form-scrypts/selectOption"
import formInput from "../formInput"

const heightForm = (wrap)=>{
    const heightWrap = formWrap('height-input', 'height', 'heightValidate', wrap, 'height', true)
    formInput('height', heightWrap)
    const heightParamSelect = formSelect('choiseHeight', null, null, heightWrap, true)
    selectOptionItem('height', heightParamSelect)
}

export default heightForm