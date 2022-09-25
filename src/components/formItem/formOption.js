import { getLang, TranslateTexts } from "../../helper/translate/translateText"

const formSelect = (name, id = null, key = null, selectWrap, choise = false)=>{
    const select = document.createElement('select')
    select.className = choise ? 'select-choise-param' : 'select-input'
    select.name = name
    if (id) select.id = id
    if (key)select.setAttribute('key', key)
    select.setAttribute('required', 'required')
    selectWrap.prepend(select)
    return select
}

const formOption = (value, key, select)=>{
    const option = document.createElement('option')
    option.className = 'lang'
    option.value = value
    option.setAttribute('key', key)
    if (key == 'choise' || key == 'choiseSex') option.setAttribute('disabled', 'disabled'), option.setAttribute('selected', 'selected')
    option.textContent = `${TranslateTexts(getLang(), key)}`
    select.append(option)
}

export {formSelect, formOption}