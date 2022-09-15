import { onHandleRoute } from '../../helper/route'
import { getLang, TranslateTextes } from '../../helper/translate/translateText'
import "./style"

const checkSelectParam = (item, select)=>{
  const items = sessionStorage.getItem(item)
  const elementOption = select.querySelectorAll('option')
  elementOption.forEach(elem =>{
    if (elem.value == items) select.value = items
  })
}

const signUpComponent = ()=>{
    const elem = `
    <div class="container-login">
        <div class="wrap-main" id = "wrap-signUp">
          <form class="login-form validate-form" id = 'singUpForm' name = 'singUpForm'>
            <span class="login-form-title p-b-26 lang" key = 'title'>
              Реєстрація
            </span>
            <!--Логин-->
            <div class="wrap-input validate-input" id = 'login-input' key = 'login' data-validate="${TranslateTextes(getLang(), 'loginValidate')}">
              <input class="input" type="text" name="login" value = "" required>
              <span class="progress-input" id ="login-progress" key = 'login' data-placeholder="${TranslateTextes(getLang(), 'logins')}"></span>
            </div>
            <!--Пароль-->
            <!--глазок-->
            <div class="wrap-input validate-input" id = 'password-input' key ='password' data-validate="${TranslateTextes(getLang(), 'passwordValidate')}">
              <button class="btn-show-pass" type="button">
                <img class="eyes-pass first-pass" src="https://i.ibb.co/YNDnt4y/eye2.png" alt="eye">
              </button>
              <!--форма Пароль-->
              <input class="input passOne" type="password" name="pass" value = "" required>
              <span class="progress-input" id ="password-progress" key = 'password' data-placeholder=${TranslateTextes(getLang(), 'password')}></span>
            </div>
              <!--повторить Пароль-->
              <!--повторить глазок Пароль-->
            <div class="wrap-input validate-input" id = 'repeat-password-input' key = 'repeatPassword' data-validate="${TranslateTextes(getLang(), 'repeatPasswordValidate')}">
              <button class="btn-show-pass repeat-pass-btn" type="button">
                <img class="eyes-pass repeat-pass" src="https://i.ibb.co/YNDnt4y/eye2.png" alt="eye">
              </button>
              <!--форма повторить Пароль-->
              <input class="input repeatPassword" type="password" name="repeatPassword" value = "" required>
              <span class="progress-input" id ="password-repeat-progress" key = 'repeatPassword' data-placeholder="${TranslateTextes(getLang(), 'repeatPassword')}"></span>
            </div>
            <!--имя-->
            <div class="wrap-input validate-input" id = 'name-input' key = 'name' data-validate="${TranslateTextes(getLang(), 'nameValidate')}">
              <input class="input" type="text" name="userName" value = "" required>
              <span class="focus-input" key = 'name' data-placeholder=${TranslateTextes(getLang(), 'name')}></span>
            </div>
            <!--Фамилия-->
            <div class="wrap-input validate-input" id = 'surname-input' key = 'surname' data-validate="${TranslateTextes(getLang(), 'surnameValidate')}">
              <input class="input" type="text" name="surname" value = "" required>
              <span class="focus-input" key ='surname' data-placeholder=${TranslateTextes(getLang(), 'surname')}></span>
            </div>
            <!--email-->
            <div class="wrap-input validate-input" id = 'email-input' key = 'email' data-validate="${TranslateTextes(getLang(), 'emailValidate')}">
              <input class="input" type="text" name="email" value = "" required>
              <span class="focus-input" key ='email' data-placeholder=${TranslateTextes(getLang(), 'email')}></span>
            </div>
            <!--Возраст-->
            <div class="wrap-row">
            <div class="wrap-input validate-input wrap-input-row" id = 'age-input' key = 'age' data-validate="${TranslateTextes(getLang(), 'ageValidate')}">
              <input class="input" type="text" name="age" value = "${sessionStorage.getItem('age') || ''}" required> 
              <span class="focus-input" key = 'age' data-placeholder=${TranslateTextes(getLang(), 'age')}></span>
            </div>
            <!--пол-->
            <div class="wrap-input validate-input wrap-input-row" id = 'sex-input' key = 'sex' data-validate="${TranslateTextes(getLang(), 'sexValidate')}">
              <select name="sex" id="sex" class="select-input" required>
                <option class="lang" value="choise" selected disabled key = 'choiseSex'>${TranslateTextes(getLang(), 'choiseSex')}</option>
                <option class="lang" value="male" key = 'male'>${TranslateTextes(getLang(), 'male')}</option>
                <option class="lang" value="female" key = 'female'>${TranslateTextes(getLang(), 'female')}</option>
              </select>
              <span class= 'select-item'></span>
            </div>
          </div>
          <!--Рост-->
          <div class="wrap-row">
            <div class="wrap-input validate-input wrap-input-row" id = 'height-input' key = 'height' data-validate="${TranslateTextes(getLang(), 'heightValidate')}">
              <select class="choise-height select-choise-param" name="choiseHeight" tabindex="-1">
                <option class = "lang" value="sm" key="sm">${TranslateTextes(getLang(), 'sm')}</option>
                <option class = "lang" value="inches" key="inches">${TranslateTextes(getLang(), 'inches')}</option>
            </select>
              <input class="input" type="text" name="height" value = "${sessionStorage.getItem('height') || ''}" required>
              <span class="focus-input" key = 'height' data-placeholder=${TranslateTextes(getLang(), 'height')}></span>
            </div>
            <!--Вес-->
            <div class="wrap-input validate-input wrap-input-row" id = 'weight-input' key = 'weight' data-validate="${TranslateTextes(getLang(), 'weightValidate')}">
              <select class="choise-weight select-choise-param" name="choiseWeight" tabindex="-1">
                  <option class = "lang" value="kg" key="kg">${TranslateTextes(getLang(), 'kg')}</option>
                  <option class = "lang" value="pounds" key="pound">${TranslateTextes(getLang(), 'pound')}</option>
                </select>
              <input class="input" type="text" name="weight" value = "${sessionStorage.getItem('weight') || ''}" required>
              <span class="focus-input" key = 'weight' data-placeholder=${TranslateTextes(getLang(), 'weight')}></span>
            </div>
          </div>
          <!--Желаемые данные-->
          <div class="wrap-row">
            <div class="wrap-input validate-input wrap-input-row" id = 'want-weight-input' key = 'wantWeight' data-validate="${TranslateTextes(getLang(), 'weightValidate')}">
              <input class="input" type="text" name="wantWeight" value = "${sessionStorage.getItem('wantWeight') || ''}" required>
              <span class="focus-input" key = 'wantWeight' data-placeholder="${TranslateTextes(getLang(), 'wantWeight')}"></span>
              <select class="choise-weight select-choise-param" name="wantWeightSelect"  tabindex="-1">
                <option class = "lang" value="kg" key="kg">${TranslateTextes(getLang(), 'kg')}</option>
                <option class = "lang" value="pounds" key="pound">${TranslateTextes(getLang(), 'pound')}</option>
              </select>
            </div>
            <!--желаемое количество дней-->
            <div class="wrap-input validate-input wrap-input-row" id = 'want-day-input' key = 'wantDay' data-validate="${TranslateTextes(getLang(), 'wantDayValidate')}">
              <input class="input" type="text" name="wantDay" value = "${sessionStorage.getItem('wantDay') || ''}" required>
              <span class="focus-input" key = 'wantDay' data-placeholder=${TranslateTextes(getLang(), 'wantDayNumber')}></span>
            </div>
          </div>
            <!--Уровень активности-->
            <div class="wrap-input validate-input" id = 'activ-input' key = 'activ' data-validate="${TranslateTextes(getLang(), 'choise')}">
              <select name="activeLevel" id="active-level" class="select-input" required>
                <option class="lang" value="choise" selected disabled key = "choise">${TranslateTextes(getLang(), 'choise')}</option>
                <option class="lang" value="none" key = 'none'>${TranslateTextes(getLang(), 'none')}</option>
                <option class="lang" value="low" key = 'low' >${TranslateTextes(getLang(), 'low')}</option>
                <option class="lang" value="middle" key = 'middle'>${TranslateTextes(getLang(), 'middle')}</option>
                <option class="lang" value="hight" key = 'higth'>${TranslateTextes(getLang(), 'higth')}</option>
                <option class="lang" value="very hight" key = 'veryHight'>${TranslateTextes(getLang(), 'veryHight')}</option>
              </select>
              <span class= 'select-item'></span>
            </div>
            <!--Кнопка регистрации-->
            <div class="container-login-form-btn">
              <div class="wrap-login-form-btn">
                <div class="login-form-bgbtn"></div>
                <button class="login-form-btn lang" key="SingUp" type="button" form="singUpForm">
                ${TranslateTextes(getLang(), 'SingUp')}
                </button>
              </div>
            </div>

            <div class="text-center p-t-115">
              <span class="trueSignUp lang" key="trueSignUp">
              ${TranslateTextes(getLang(), 'trueSignUp')}
              </span>
              <a class="trueSignUp lang" id = "loginBtnSign" key="login" href="/login">
              ${TranslateTextes(getLang(), 'login')}
              </a>
            </div>
          </form>
        </div>
      </div>
    `
    
    const wrap = document.querySelector('.limiter')
    wrap.innerHTML = elem

    const loginBtn = document.getElementById('loginBtnSign')
    loginBtn.addEventListener('click', (e)=>onHandleRoute(e))

    const selectSex = document.getElementById('sex')
    checkSelectParam('sex', selectSex)

    const selectActive = document.getElementById('active-level')
    checkSelectParam('activ', selectActive)

    const selectHeightParam = document.querySelector('.choise-height')
    checkSelectParam('selectHeight', selectHeightParam)

    const selectWeightParam = document.querySelector('.choise-weight')
    checkSelectParam('selectWeight', selectWeightParam)

    const selectWantWeightParam = document.querySelector('.choise-height')
    checkSelectParam('selectWantWeight', selectWantWeightParam)
}

export {signUpComponent}