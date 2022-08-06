import "./check-style.scss"
import "./style.scss"
const mainComponent = ()=>{
    const elem = `
    <div class="container-login">
        <div class="wrap-login">
          <form class="login-form validate-form" id = 'singUpForm' name = 'singUpForm'>
            <span class="login-form-title p-b-26 lang" key = 'title'>
              Eats Monitoring
            </span>
            <!--Пол-->
            <div class="wrap-input validate-input" id = 'sex-input' key = 'sex' data-validate="Оберіть стать">
              <select name="sex" id="sex" class="input" required>
                <option class="lang" value="choise" selected disabled key = 'choiseSex'>Оберіть стать</option>
                <option class="lang" value="male" key = 'male' selected>Чоловік</option>
                <option class="lang" value="female" key = 'female'>Жінка</option>
              </select>
            </div>
            <!--Возраст-->
            <div class="wrap-input validate-input" id = 'age-input' key = 'age' data-validate="Від 18 до 99 років">
              <input class="input" type="text" name="age" required value="25"> 
              <span class="focus-input" key = 'age' data-placeholder="Вік"></span>
            </div>
          <!--Рост-->
            <div class="wrap-input validate-input" id = 'height-input' key = 'height' data-validate="Від 100 до 250 см">
              <select class="choise-height select-choise-param" name="choiseHeight" id="">
                <option value="sm">См</option>
                <option value="inches">Дюйми</option>
              </select>
              <input class="input" type="text" name="height" required value="195">
              <span class="focus-input-param span-choise-param" key = 'height' data-placeholder="Зріст (см)"></span>
            </div>
            <!--Вес-->
            <div class="wrap-input validate-input" id = 'weight-input' key = 'weight' data-validate="Від 40 до 199 кг">
              <select class="choise-weight select-choise-param" name="choiseWeight" id="">
                <option value="kg">Кг</option>
                <option value="pounds">Фунти</option>
              </select>
              <input class="input" type="text" name="weight" required value="85">
              <span class="focus-input-param span-choise-param" key = 'weight' data-placeholder="Вага (кг)"></span>
            </div>
            <!--Уровень активности-->
            <div class="wrap-input validate-input" id = 'activ-input' key = 'activ' data-validate="Оберіть рівень активності">
              <select name="activeLevel" id="active-level" class="input" required>
                <option class="lang" value="choise"  disabled key = "choiseActiv">Оберіть рівень активності</option>
                <option class="lang" value="none" key = 'noneActiv'>Немає активності (паралізований)</option>
                <option class="lang" value="low" key = 'lowActiv' selected>Мала активність (Сидячий спосіб життя)</option>
                <option class="lang" value="middle" key = 'middleActiv'>Середня активність (1-2 тренування на тиждень)</option>
                <option class="lang" value="hight" key = 'higthActiv'>Висока активність (3-5 тренувань на тиждень)</option>
                <option class="lang" value="very hight" key = 'veryHightActiv'>Дуже висока активність</option>
              </select>
            </div>
            <!--Желаемое количество веса-->
            <div class="wrap-input validate-input" id = 'want-weight-input' key = 'wantWeight' data-validate="Від 40 до 199 кг">
              <select class="choise-weight select-choise-param" name="wantWeightSelect" id="">
                <option value="kg">Кг</option>
                <option value="pounds">Фунти</option>
              </select>
              <input class="input" type="text" name="wantWeight" required value="86">
              <span class="focus-input-param span-choise-param" key = 'wantWeight' data-placeholder="Бажана вага"></span>
            </div>
            <!--Кількість днів-->
            <div class="wrap-input validate-input" id = 'want-day-input' key = 'wantDay' data-validate="Кількість днів">
              <input class="input" type="text" name="wantDay" required value="7"> 
              <span class="focus-input" key = 'wantDay' data-placeholder="Кількість днів до цілі"></span>
            </div>
            <!--Кнопка регистрации-->
            <div class="container-login-form-btn">
              <div class="wrap-login-form-btn">
                <div class="login-form-bgbtn"></div>
                <button class="login-form-btn lang" key="SingUp" type="button" form="singUpForm">
                  Розрахувати
                </button>
              </div>
            </div>
            <div class="result-item"></div>
            <div class ="canvas-container"></div>
          </form>
        </div>
      </div>
    `
    const wrap = document.querySelector('.limiter')
    wrap.innerHTML = elem
}

export {mainComponent}