const createElem = (tag, clas = null, text = null, element2, attr1 = null, attr2 = null)=>{
    let element = document.createElement(tag)
    if (clas) element.className = clas
    if (text) element.textContent = text
    element2.append(element)
    if (attr1) element.setAttribute(attr1, attr2)
    return element
}

const createOption = (clas, value, text, select, elem = null)=>{
    let option = document.createElement('option')
    option.className = clas
    option.value = value
    option.setAttribute('key', value)
    option.textContent = text
    select.append(option)
    if (value == elem) option.setAttribute('selected', 'selected')
    return option
}

const createInput = (tag, clas, text=null, value = null, element2,key=null, type=null)=>{
    let element = document.createElement(tag)
    element.className = clas
    element.textContent = text
    if (value){element.value = value}
    element2.append(element)
    if (key)element.setAttribute('key', key)
    if (type)element.setAttribute('type', type)
    return element
}

const createSelectParam = (selectClass, appendselect, value1, value2, text1, text2, trueElement, key)=>{
    const select = createElem('select', `${selectClass} select-choise-param`, null, appendselect, 'key', key)
    createOption('lang', value1, text1, select, trueElement)
    createOption('lang', value2, text2, select, trueElement)
    return select
}


export {createElem, createOption, createInput, createSelectParam}