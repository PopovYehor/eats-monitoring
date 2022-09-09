let langIconIndex = 0
let userIconIndex = 0

const rotateList = (elem, index)=>{
    if( index == 0){
        elem.classList.add('active')
        index = 1
        setTimeout(()=>{
            elem.addEventListener('mouseleave', (e)=>{
                if (e.isTrusted == true) {
                    elem.classList.remove('active')
                    index = 0
                }
            })
        }, 1000)
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