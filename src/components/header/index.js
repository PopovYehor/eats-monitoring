import "./style.scss"
import { langRotate, userRotate} from "../../helper/style"

const Header = ()=>{
    const elem = `
        <div class = "main-icon">
            <a class="main-icon-btn" href='#'><img class="icon" src = "https://i.ibb.co/2cjMbjh/title.png"></a>
        </div>
        <div class="language">
            <div class = "choise-lang">
                <div class="lang-img"> 
                    <button class = "language-btn">&#xf7a2</button>
                </div>
                <div class="language-list" id = "lang-list">
                <button class="translate"><img id="en" src="https://i.ibb.co/X7nDYRp/en.png" alt="ukflag"></button>
                <button class="translate"><img id="uk" src="https://i.ibb.co/vD8gbMv/uk.png" alt="ukrflag"></button>
                </div>
            </div>
        </div>
        <div class='login-btn-wrap'>
            <button class = "login-btn-user">&#xf007</button>
            <div class="language-list" id="user-list">
                <button class="translate"><a href="#">&#xf2f6 Вхід</a></button>
                <button class="translate"><a href="#">&#xf234 Реєстрація</a></button>
            </div>
        </div>
    `
 const wrap = document.querySelector('header')
 wrap.innerHTML = elem

    const LangBtn = document.querySelector('.language-btn')
    const userBtn = document.querySelector('.login-btn-user')
    
    LangBtn.addEventListener('click', ()=>{
        langRotate('#lang-list')
    })
    userBtn.addEventListener('click', ()=>{
        userRotate('#user-list')
    })
}

export default Header