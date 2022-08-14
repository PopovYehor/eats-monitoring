let langIconIndex = 0
let userIconIndex = 0

const langRotate = (selector)=>{
    let elem = document.querySelector(selector)
    if( langIconIndex == 0){
        elem.classList.add('active')
        langIconIndex = 1
    }
    else if (langIconIndex == 1){
        elem.classList.remove('active')
        langIconIndex = 0
    } 
}

const userRotate = (selector)=>{
    let elem = document.querySelector(selector)
    if( userIconIndex == 0){
        elem.classList.add('active')
        userIconIndex = 1
    }
    else if (userIconIndex == 1){
        elem.classList.remove('active')
        userIconIndex = 0
    } 
    
}

export {langRotate, userRotate}