
const placeholderClickUp = ()=>{
    const input = document.querySelectorAll('.input')
    input.forEach(function(elem){
        elem.addEventListener('blur', function(e){
            let target = e.target
            if(target && elem.value != ''){
                elem.classList.add('has-val')
            }
            else{
                elem.classList.remove('has-val')
            }
        })
    })
}

const placeholderUp = ()=>{
    const input = document.querySelectorAll('.input')
    input.forEach( elem => elem.value != '' ? elem.classList.add('has-val') : elem.classList.remove('has-val'))
}

export {placeholderClickUp, placeholderUp}