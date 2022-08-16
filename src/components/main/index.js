import "./style.scss"
import "./check-style.scss"
import createAllCharts from "./charts/createAllCharts"
import { verAll, valueVer} from "../../helper/validation/main-form-validation"
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
              <select name="sex" id="sex" class="select-input" required>
                <option class="lang" value="choise" selected disabled key = 'choiseSex'>Оберіть стать</option>
                <option class="lang" value="male" key = 'male'>Чоловік</option>
                <option class="lang" value="female" key = 'female'>Жінка</option>
              </select>
              <span class= 'select-item'></span>
            </div>
            <!--Возраст-->
            <div class="wrap-input validate-input" id = 'age-input' key = 'age' data-validate="Введіть ваш вік">
              <input class="input" type="text" name="age" required value=""> 
              <span class="focus-input" key = 'age' data-placeholder="Вік"></span>
            </div>
          <!--Рост-->
            <div class="wrap-input validate-input" id = 'height-input' key = 'height' data-validate="Ввеіть ваш зріст">
              <select class="choise-height select-choise-param" name="choiseHeight" id="" tabindex="-1">
                <option class = "lang" value="sm" key="sm">См</option>
                <option class = "lang" value="inches" key="inches">Дюйми</option>
              </select>
              <input class="input" type="text" name="height" required value="">
              <span class="focus-input span-choise-param" key = 'height' data-placeholder="Зріст"></span>
            </div>
            <!--Вес-->
            <div class="wrap-input validate-input" id = 'weight-input' key = 'weight' data-validate="Введіть вашу вагу">
              <select class="choise-weight select-choise-param" name="choiseWeight" id="" tabindex="-1">
                <option class = "lang" value="kg" key="kg">Кг</option>
                <option class = "lang" value="pounds" key="pound">Фунти</option>
              </select>
              <input class="input" type="text" name="weight" required value="">
              <span class="focus-input span-choise-param" key = 'weight' data-placeholder="Вага"></span>
            </div>
            <!--Уровень активности-->
            <div class="wrap-input validate-input" id = 'activ-input' key = 'activ' data-validate="Оберіть рівень активності">
              <select name="activeLevel" id="active-level" class="select-input" required>
                <option class="lang" value="choise"  disabled key = "choiseActiv" selected>Оберіть рівень активності</option>
                <option class="lang" value="none" key = 'noneActiv'>Малорухливий спосіб життя</option>
                <option class="lang" value="low" key = 'lowActiv' >Мала активність (1-3 тренування на тиждень)</option>
                <option class="lang" value="middle" key = 'middleActiv'>Середня активність (3-5 тренувань на тиждень)</option>
                <option class="lang" value="hight" key = 'higthActiv'>Висока активність (5-7 тренувань на тиждень)</option>
                <option class="lang" value="very hight" key = 'veryHightActiv'>Дуже висока активність</option>
              </select>
              <span class= 'select-item'></span>
            </div>
            <!--Желаемое количество веса-->
            <div class="wrap-input validate-input" id = 'want-weight-input' key = 'wantWeight' data-validate="Введіть вашу бажану вагу">
              <select class="choise-weight select-choise-param" name="wantWeightSelect" id="" tabindex="-1">
                <option class = "lang" value="kg" key="kg">Кг</option>
                <option class = "lang" value="pounds" key="pound">Фунти</option>
              </select>
              <input class="input" type="text" name="wantWeight" required value="">
              <span class="focus-input span-choise-param" key = 'wantWeight' data-placeholder="Бажана вага"></span>
            </div>
            <!--Кількість днів-->
            <div class="wrap-input validate-input" id = 'want-day-input' key = 'wantDay' data-validate="Введіть бажану кількість днів">
              <input class="input" type="text" name="wantDay" required value=""> 
              <span class="focus-input" key = 'wantDay' data-placeholder="Кількість днів до цілі"></span>
            </div>
            <!--Кнопка регистрации-->
            <div class="container-login-form-btn">
              <div class="wrap-login-form-btn">
                <div class="login-form-bgbtn"></div>
                <button class="login-form-btn lang" key="calculate" type="button" form="singUpForm">
                  Розрахувати
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    `
    const wrap = document.querySelector('.limiter')
    wrap.innerHTML = elem

    verAll()

    const dontValid = document.querySelectorAll('.alert-validate')
    const calcBtn = document.querySelector('.login-form-btn')
    calcBtn.addEventListener('click', (e)=>{
      e.preventDefault()
      valueVer() == true ? createAllCharts() : console.log('no ok')
    })
}

export {mainComponent}