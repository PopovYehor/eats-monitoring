import moment from 'moment'
import { formsData } from '../../helper/form-canculate/formTranformationData'
import { onHandleRoute } from '../../helper/route'
import { getLang, TranslateTexts } from '../../helper/translate/translateText'
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
            <div class="wrap-input validate-input" id = 'login-input' key = 'login' data-validate="${TranslateTexts(getLang(), 'loginValidate')}">
              <input class="input" type="text" name="login" value = "" required>
              <span class="progress-input" id ="login-progress" key = 'login' data-placeholder="${TranslateTexts(getLang(), 'logins')}"></span>
            </div>
            <!--Пароль-->
            <!--глазок-->
            <div class="wrap-input validate-input" id = 'password-input' key ='password' data-validate="${TranslateTexts(getLang(), 'passwordValidate')}">
              <button class="btn-show-pass" type="button">
                <img class="eyes-pass first-pass" src="https://i.ibb.co/YNDnt4y/eye2.png" alt="eye">
              </button>
              <!--форма Пароль-->
              <input class="input passOne" type="password" name="pass" value = "" required>
              <span class="progress-input" id ="password-progress" key = 'password' data-placeholder=${TranslateTexts(getLang(), 'password')}></span>
            </div>
              <!--повторить Пароль-->
              <!--повторить глазок Пароль-->
            <div class="wrap-input validate-input" id = 'repeat-password-input' key = 'repeatPassword' data-validate="${TranslateTexts(getLang(), 'repeatPasswordValidate')}">
              <button class="btn-show-pass repeat-pass-btn" type="button">
                <img class="eyes-pass repeat-pass" src="https://i.ibb.co/YNDnt4y/eye2.png" alt="eye">
              </button>
              <!--форма повторить Пароль-->
              <input class="input repeatPassword" type="password" name="repeatPassword" value = "" required>
              <span class="progress-input" id ="password-repeat-progress" key = 'repeatPassword' data-placeholder="${TranslateTexts(getLang(), 'repeatPassword')}"></span>
            </div>
            <!--имя-->
            <div class="wrap-input validate-input" id = 'name-input' key = 'name' data-validate="${TranslateTexts(getLang(), 'nameValidate')}">
              <input class="input" type="text" name="userName" value = "" required>
              <span class="focus-input" key = 'name' data-placeholder=${TranslateTexts(getLang(), 'name')}></span>
            </div>
            <!--Фамилия-->
            <div class="wrap-input validate-input" id = 'surname-input' key = 'surname' data-validate="${TranslateTexts(getLang(), 'surnameValidate')}">
              <input class="input" type="text" name="surname" value = "" required>
              <span class="focus-input" key ='surname' data-placeholder=${TranslateTexts(getLang(), 'surname')}></span>
            </div>
            <!--email-->
            <div class="wrap-input validate-input" id = 'email-input' key = 'emailValidate' data-validate="${TranslateTexts(getLang(), 'emailValidate')}">
              <input class="input" type="text" name="email" value = "" required>
              <span class="focus-input" key ='email' data-placeholder=${TranslateTexts(getLang(), 'email')}></span>
            </div>
            <!--Возраст-->
            <div class="wrap-row">
            <div class="wrap-input validate-input wrap-input-row" id = 'birdth-input' key = 'birdth' data-validate="${TranslateTexts(getLang(), 'dateValidation')}">
              <input class="input" type="date" name="birdth" value = "${moment().format('YYYY-MM-DD')}" required> 
              <span class="focus-input" key = 'birdth' data-placeholder="${TranslateTexts(getLang(), 'birdth')}"></span>
            </div>
            <!--пол-->
            <div class="wrap-input validate-input wrap-input-row" id = 'sex-input' key = 'sex' data-validate="${TranslateTexts(getLang(), 'sexValidate')}">
              <select name="sex" id="sex" class="select-input" required>
                <option class="lang" value="choise" selected disabled key = 'choiseSex'>${TranslateTexts(getLang(), 'choiseSex')}</option>
                <option class="lang" value="male" key = 'male'>${TranslateTexts(getLang(), 'male')}</option>
                <option class="lang" value="female" key = 'female'>${TranslateTexts(getLang(), 'female')}</option>
              </select>
              <span class= 'select-item'></span>
            </div>
          </div>
          <!--Рост-->
          <div class="wrap-row">
            <div class="wrap-input validate-input wrap-input-row" id = 'height-input' key = 'height' data-validate="${TranslateTexts(getLang(), 'heightValidate')}">
              <select class="choise-height select-choise-param" name="choiseHeight" tabindex="-1">
                <option class = "lang" value="sm" key="sm">${TranslateTexts(getLang(), 'sm')}</option>
                <option class = "lang" value="inches" key="inches">${TranslateTexts(getLang(), 'inches')}</option>
            </select>
              <input class="input" type="text" name="height" value = "${sessionStorage.getItem('height') || ''}" required>
              <span class="focus-input" key = 'height' data-placeholder=${TranslateTexts(getLang(), 'height')}></span>
            </div>
            <!--Вес-->
            <div class="wrap-input validate-input wrap-input-row" id = 'weight-input' key = 'weight' data-validate="${TranslateTexts(getLang(), 'weightValidate')}">
              <select class="choise-weight select-choise-param" name="choiseWeight" tabindex="-1">
                  <option class = "lang" value="kg" key="kg">${TranslateTexts(getLang(), 'kg')}</option>
                  <option class = "lang" value="pounds" key="pound">${TranslateTexts(getLang(), 'pound')}</option>
                </select>
              <input class="input" type="text" name="weight" value = "${sessionStorage.getItem('weight') || ''}" required>
              <span class="focus-input" key = 'weight' data-placeholder=${TranslateTexts(getLang(), 'weight')}></span>
            </div>
          </div>
          <!--Желаемые данные-->
          <div class="wrap-row">
            <div class="wrap-input validate-input wrap-input-row" id = 'want-weight-input' key = 'wantWeight' data-validate="${TranslateTexts(getLang(), 'weightValidate')}">
              <input class="input" type="text" name="wantWeight" value = "${sessionStorage.getItem('wantWeight') || ''}" required>
              <span class="focus-input" key = 'wantWeight' data-placeholder="${TranslateTexts(getLang(), 'wantWeight')}"></span>
              <select class="choise-weight select-choise-param" name="wantWeightSelect"  tabindex="-1">
                <option class = "lang" value="kg" key="kg">${TranslateTexts(getLang(), 'kg')}</option>
                <option class = "lang" value="pounds" key="pound">${TranslateTexts(getLang(), 'pound')}</option>
              </select>
            </div>
            <!--желаемое количество дней-->
            <div class="wrap-input validate-input wrap-input-row" id = 'want-date-input' key = 'wantDate' data-validate="${TranslateTexts(getLang(), 'dateValidation')}">
              <input class="input" type="date" name="wantDate" value = "${moment().add(sessionStorage.getItem('wantDay'), 'days').format('YYYY-MM-DD') || moment().format('YYYY-MM-DD')}" required>
              <span class="focus-input" key = 'wantDate' data-placeholder="${TranslateTexts(getLang(), 'wantDate')}"></span>
            </div>
          </div>
            <!--Уровень активности-->
            <div class="wrap-input validate-input" id = 'activ-input' key = 'activ' data-validate="${TranslateTexts(getLang(), 'choise')}">
              <select name="activeLevel" id="active-level" class="select-input" required>
                <option class="lang" value="choise" selected disabled key = "choise">${TranslateTexts(getLang(), 'choise')}</option>
                <option class="lang" value="none" key = 'none'>${TranslateTexts(getLang(), 'none')}</option>
                <option class="lang" value="low" key = 'low' >${TranslateTexts(getLang(), 'low')}</option>
                <option class="lang" value="middle" key = 'middle'>${TranslateTexts(getLang(), 'middle')}</option>
                <option class="lang" value="hight" key = 'higth'>${TranslateTexts(getLang(), 'higth')}</option>
                <option class="lang" value="very hight" key = 'veryHight'>${TranslateTexts(getLang(), 'higth')}</option>
              </select>
              <span class= 'select-item'></span>
            </div>
            <!--Кнопка регистрации-->
            <div class="container-login-form-btn">
              <div class="wrap-login-form-btn">
                <div class="login-form-bgbtn"></div>
                <button class="login-form-btn lang" key="SingUp" type="button" form="singUpForm">
                ${TranslateTexts(getLang(), 'SingUp')}
                </button>
              </div>
            </div>

            <div class="text-center p-t-115">
              <span class="trueSignUp lang" key="trueSignUp">
              ${TranslateTexts(getLang(), 'trueSignUp')}
              </span>
              <a class="trueSignUp lang" id = "loginBtnSign" key="login" href="/login">
              ${TranslateTexts(getLang(), 'login')}
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

    const selectWantWeightParam = formsData().wantWeightSelect
    checkSelectParam('selectWantWeight', selectWantWeightParam)
}

export {signUpComponent}