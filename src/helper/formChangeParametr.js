const selectParam = (formElem)=>{
    let element = formElem
    let elementIndex = element.selectedIndex
    let elementOption = element.querySelectorAll('option')[elementIndex]
    return elementOption
}

const InchesToSm = (height)=>{
    let elemtnet = height*2.54
    return elemtnet
}

const PoundToKg = (weight)=>{
    let elemtnet = weight/2.2
    return elemtnet
}
export {selectParam, InchesToSm, PoundToKg}