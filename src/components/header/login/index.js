import './style.scss'
const HeaderSwitch = ()=>{
    const elem = `
    <button class = "login-btn-user">&#xf007</button>
    <div class="language-list" id="user-list">
        <button class="translate"><a href="#">&#xf2f6 <span class= 'lang' key = 'headerEnter'>Вхід</span></a></button>
        <button class="translate"><a href="#">&#xf234 <span class= 'lang' key = 'headerSingUp'>Реєстрація</span></a></button>
    </div>
    `
    const wrap = document.querySelector('.login-btn-wrap')
    wrap.innerHTML= elem
}

export default HeaderSwitch