let langIconIndex = 0
let userIconIndex = 0

const rotateList = (elem, index)=>{
    if( index == 0){
        elem.classList.add('active')
        index = 1
        elem.addEventListener('mouseleave', (e)=>{
            if (e.isTrusted == true) {
                setTimeout( ()=>{
                elem.classList.remove('active')
                index = 0}, 300)
            }
        })
    }
}

const userRotate = (selector, index)=>{
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

export {rotateList, langIconIndex, userIconIndex}