import './style.scss'

const signUpComponent = ()=>{
    const elem = `
    <div class="container-login">
        <div class="wrap-login">
          <form class="login-form validate-form" id = 'singUpForm' name = 'singUpForm'>
            <span class="login-form-title p-b-26 lang" key = 'title'>
              Реєстрація
            </span>
            <!--Логин-->
            <div class="wrap-input validate-input" id = 'login-input' key = 'login' data-validate="Має бути більше 6 символів та без спеціальних символів (!@#$...)">
              <input class="input" type="text" name="login" value = "testLogin" required>
              <span class="progress-input" id ="login-progress" key = 'login' data-placeholder="Логін"></span>
            </div>
            <!--Пароль-->
            <!--глазок-->
            <div class="wrap-input validate-input" id = 'password-input' key ='password' data-validate="Мінімум 8 символів, велика буква та цифра">
              <button class="btn-show-pass" type="button">
                <img class="eyes-pass first-pass" src="https://i.ibb.co/YNDnt4y/eye2.png" alt="eye">
              </button>
              <!--форма Пароль-->
              <input class="input passOne" type="password" name="pass" value = "testPassword" required>
              <span class="progress-input" id ="password-progress" key = 'password' data-placeholder="Пароль"></span>
            </div>
              <!--повторить Пароль-->
              <!--повторить глазок Пароль-->
            <div class="wrap-input validate-input" id = 'repeat-password-input' key = 'repeatPassword' data-validate="Паролі повинні повторюватись">
              <button class="btn-show-pass repeat-pass-btn" type="button">
                <img class="eyes-pass repeat-pass" src="https://i.ibb.co/YNDnt4y/eye2.png" alt="eye">
              </button>
              <!--форма повторить Пароль-->
              <input class="input repeatPassword" type="password" name="repeatPassword" value = "testPassword" required>
              <span class="progress-input" id ="password-repeat-progress" key = 'repeatPassword' data-placeholder="Повторіть пароль"></span>
            </div>
            <!--имя-->
            <div class="wrap-input validate-input" id = 'name-input' key = 'name' data-validate="Некоректне ім'я">
              <input class="input" type="text" name="name" value = "Єгор" required>
              <span class="focus-input" key = 'name' data-placeholder="Ім'я"></span>
            </div>
            <!--Фамилия-->
            <div class="wrap-input validate-input" id = 'surname-input' key = 'surname' data-validate="Некоректне прізвище">
              <input class="input" type="text" name="surname" value = "Попов" required>
              <span class="focus-input" key ='surname' data-placeholder="Прізвище"></span>
            </div>
            <!--Возраст-->
            <div class="wrap-row">
            <div class="wrap-input validate-input wrap-input-row" id = 'age-input' key = 'age' data-validate="Від 18 до 99 років">
              <input class="input" type="text" name="age" value = "25" required> 
              <span class="focus-input" key = 'age' data-placeholder="Вік"></span>
            </div>
            <!--пол-->
            <div class="wrap-input validate-input wrap-input-row" id = 'sex-input' key = 'sex' data-validate="Оберіть стать">
              <select name="sex" id="sex" class="select-input" required>
                <option class="lang" value="choise" selected disabled key = 'choiseSex'>Оберіть стать</option>
                <option class="lang" value="male" key = 'male' selected >Чоловік</option>
                <option class="lang" value="female" key = 'female'>Жінка</option>
              </select>
              <span class= 'select-item'></span>
            </div>
          </div>
          <!--Рост-->
          <div class="wrap-row">
            <div class="wrap-input validate-input wrap-input-row" id = 'height-input' key = 'height' data-validate="Від 100 до 250 см">
              <select class="choise-height select-choise-param" name="choiseHeight" tabindex="-1">
                <option class = "lang" value="sm" key="sm">См</option>
                <option class = "lang" value="inches" key="inches">Дюйми</option>
            </select>
              <input class="input" type="text" name="height" value = "195" required>
              <span class="focus-input" key = 'height' data-placeholder="Зріст"></span>
            </div>
            <!--Вес-->
            <div class="wrap-input validate-input wrap-input-row" id = 'weight-input' key = 'weight' data-validate="Від 40 до 199 кг">
              <select class="choise-weight select-choise-param" name="choiseWeight" tabindex="-1">
                  <option class = "lang" value="kg" key="kg">Кг</option>
                  <option class = "lang" value="pounds" key="pound">Фунти</option>
                </select>
              <input class="input" type="text" name="weight" value = "90" required>
              <span class="focus-input" key = 'weight' data-placeholder="Вага"></span>
            </div>
          </div>
          <!--Желаемые данные-->
          <div class="wrap-row">
            <div class="wrap-input validate-input wrap-input-row" id = 'want-weight-input' key = 'wantWeight' data-validate="Введіть вашу бажану вагу">
              <input class="input" type="text" name="wantWeight" value = "80" required>
              <span class="focus-input" key = 'wantWeight' data-placeholder="Бажана вага"></span>
              <select class="choise-weight select-choise-param" name="wantWeightSelect"  tabindex="-1">
                <option class = "lang" value="kg" key="kg">Кг</option>
                <option class = "lang" value="pounds" key="pound">Фунти</option>
              </select>
            </div>
            <!--желаемое количество дней-->
            <div class="wrap-input validate-input wrap-input-row" id = 'want-day-input' key = 'wantDay' data-validate="Введіть бажану кількість днів">
              <input class="input" type="text" name="wantDay" value = "90" required>
              <span class="focus-input" key = 'weight' data-placeholder="Кількість днів до цілі"></span>
            </div>
          </div>
            <!--Уровень активности-->
            <div class="wrap-input validate-input" id = 'activ-input' key = 'activ' data-validate="Оберіть рівень активності">
              <select name="activeLevel" id="active-level" class="select-input" required>
                <option class="lang" value="choise" selected disabled key = "choiseActiv">Оберіть рівень активності</option>
                <option class="lang" value="none" key = 'noneActiv'>Немає активності (паралізований)</option>
                <option class="lang" value="low" key = 'lowActiv' selected>Мала активність (Сидячий спосіб життя)</option>
                <option class="lang" value="middle" key = 'middleActiv'>Середня активність (1-2 тренування на тиждень)</option>
                <option class="lang" value="hight" key = 'higthActiv'>Висока активність (3-5 тренувань на тиждень)</option>
                <option class="lang" value="very hight" key = 'veryHightActiv'>Дуже висока активність</option>
              </select>
              <span class= 'select-item'></span>
            </div>
            <!--Кнопка регистрации-->
            <div class="container-login-form-btn">
              <div class="wrap-login-form-btn">
                <div class="login-form-bgbtn"></div>
                <button class="login-form-btn lang" key="SingUp" type="button" form="singUpForm">
                  Зареєструватися
                </button>
              </div>
            </div>

            <div class="text-center p-t-115">
              <span class="txt1 lang" key="haveAcc">
                Вже маєте акаунт?
              </span>
              <a class="txt2 lang" key="login" href="../login/login.html">
                Вхід
              </a>
            </div>
          </form>
        </div>
      </div>
    `
    const wrap = document.querySelector('.limiter')
    wrap.innerHTML = elem
}

export {signUpComponent}