import './style.scss'
const LangHeader = ()=>{
    let elem =
    `<div class = "choise-lang">
        <div class="lang-img"> 
            <button class = "language-btn">&#xf7a2</button>
        </div>
        <div class="language-list" id = "lang-list">
            <button class="translate"><img id="en" src="https://i.ibb.co/X7nDYRp/en.png" alt="ukflag"></button>
            <button class="translate"><img id="uk" src="https://i.ibb.co/vD8gbMv/uk.png" alt="ukrflag"></button>
        </div>
    </div>`
    const wrap = document.querySelector('.language')
    wrap.innerHTML = elem
}

export default LangHeader