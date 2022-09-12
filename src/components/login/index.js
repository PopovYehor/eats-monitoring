import { formsData } from "../../helper/form-canculate/formTranformationData"
import { onHandleRoute } from "../../helper/route"
import "./style.scss"

const LoginComponent = ()=>{
    const elem = `
      <div class="container-login">
        <div class="wrap-logins">
          <form class="login-form validate-form" name = 'singUpForm'>
            <span class="login-form-title p-b-26">
              Eats Monitoring
            </span>
            <span class="login-form-title p-b-48">
              <i href = '#'><img src="https://i.ibb.co/2cjMbjh/title.png" alt="" width="80px" height="80px"></i>
            </span>
            
            <div class="wrap-input validate-input" id = 'login-input' data-validate="Enter login">
              <input class="input" type="text" name="login">
              <span class="focus-input" key='login' data-placeholder="Логін"></span>
            </div>
            <div class="wrap-input-pass validate-input" id = 'password-input' data-validate="Enter password">
              <button class="btn-show-pass" type="button">
                <img class="eyes-pass" src="https://i.ibb.co/YNDnt4y/eye2.png" alt="eye">
              </button>
              <input class="input" type="password" name="pass">
              <span class="focus-input" key='password' data-placeholder="Пароль"></span>
            </div>
            <div class="txt3">
            <a class="txt2 lang" key="forGetPass" href="#">
              Забули пароль?
            </a>
            </div>
            <div class="container-login-form-btn">
              <div class="wrap-login-form-btn">
                <div class="login-form-bgbtn"></div>
                <button class="login-form-btn lang" key="login" type="button" href = "/account">
                  Вхід
                </button>
              </div>
            </div>

            <div class="text-center p-t-115">
              <span class="trueSignUp lang" key="havntAcc">
                Не маєте акаунту?
              </span>
              <a class="trueSignUp lang" key="SingUp" href="/signUp" id = "signUpBtnLogin">
                Зареєструватися
              </a>
            </div>
          </form>
        </div>
      </div>
    
    `
    const wrap = document.querySelector('.limiter')
    wrap.innerHTML= elem
    
    const signUpBtn = document.getElementById('signUpBtnLogin')
    signUpBtn.addEventListener('click', (e)=>onHandleRoute(e))
}

export default LoginComponent