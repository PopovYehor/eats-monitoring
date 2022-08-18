
const placeholderClickUp = ()=>{
    const input = document.querySelectorAll('.input')
    input.forEach(function(elem){
        elem.addEventListener('blur', function(e){
            let target = e.target
            target && elem.value != '' ? elem.classList.add('has-val') : elem.classList.remove('has-val')
        })
    })
}

const placeholderUp = ()=>{
    const input = document.querySelectorAll('.input')
    input.forEach( elem => elem.value != '' ? elem.classList.add('has-val') : elem.classList.remove('has-val'))
}

const selectHasVal = ()=>{
    const select = document.querySelectorAll('.select-input')
    select.forEach(elem =>{
        elem.value != 'choise' ? elem.classList.add('has-val') : null
        elem.addEventListener('change', ()=>{
            elem.value != 'choise' ? elem.classList.add('has-val') : null
        })
    })
}
export {placeholderClickUp, placeholderUp, selectHasVal}