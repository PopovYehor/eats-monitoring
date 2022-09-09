import "../laguage/style"
const HeaderSwitch = ()=>{
    const elem = `
    <div class = "choise-lang">
        <div class="lang-img"> 
            <button class = "language-btn">&#xf7a2</button>
        </div>
        <div class="language-list" id = "lang-list">
            <button class="translate"><a href="#">&#xf2f6 <span class= 'lang' key = 'headerEnter'>Вхід</span></a></button>
            <button class="translate"><a href="#">&#xf234 <span class= 'lang' key = 'headerSingUp'>Реєстрація</span></a></button>
        </div>
    </div>
    `
    const wrap = document.querySelector('.login-btn-wrap')
    wrap.innerHTML= elem
}

export default HeaderSwitch