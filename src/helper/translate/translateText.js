const translateText = (index, textUK, TextEn)=>{
    let text = ''
    index == 0 ? text = textUK : text = TextEn
    return text
}

export {translateText}