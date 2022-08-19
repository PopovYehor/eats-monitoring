
const arrLangText = {
    uk:{
        'title': 'Реєстрація',
        'choiseSex': 'Оберіть стать',
        'male': 'Чоловік',
        'female': 'Жінка',
        "choiseActiv": 'Виберіть рівень активності',
        'noneActiv': 'Малорухливий спосіб життя',
        'lowActiv': 'Мала активність (1-3 тренування на тиждень)',
        'middleActiv': 'Середня активність (3-5 тренувань на тиждень)',
        'higthActiv': 'Висока активність (5-7 тренувань на тиждень)',
        'veryHightActiv': 'Дуже висока активність',
        "SingUp": 'Зареєструватися',
        "haveAcc": 'Вже маєте акаунт?',
        "login": 'Вхід',
        'calculate': 'Розрахувати',
        'headerEnter': 'Вхід',
        'headerSingUp': 'Реєстрація',
        'kg': 'Кг',
        'pound': 'Фунтів',
        'sm': 'См',
        'inches': 'Дюймів',
        'forGetPass': 'Забули пароль?',
        'havntAcc': 'Не маєте акаунту?',
        'regist': 'Зареєструватися',

    },
    en:{
        'title': 'Sing Up',
        'choiseSex': 'Select gender',
        'male': 'Male',
        'female': 'Female',
        "choiseActiv": 'Choose an activity level',
        'noneActiv': 'Sedentary lifestyle',
        'lowActiv': 'Low activity (1-3 workouts per week)',
        'middleActiv': 'Moderate activity (3-5 training sessions per week)',
        'higthActiv': 'High activity (5-7 training sessions per week)',
        'veryHightActiv': 'Very high activity',
        "SingUp": 'Sign Up',
        "haveAcc": 'Already have an account?',
        "login": 'Log In',
        'calculate': 'Calculate',
        'headerEnter': 'Sign In',
        'headerSingUp': 'Sign Up',
        'kg': 'Kg',
        'pound': 'Pound',
        'sm': 'Sm',
        'inches': 'Inches',
        'forGetPass': 'Forgot your password?',
        'havntAcc': `Don't have an account?`,
        'regist': 'Sing Up',
    }
}
const arrLangPlaceholder = {
    'uk':{
        'login': 'Логін',
        'password': 'Пароль',
        'repeatPassword': "Повторіть пароль",
        'name': "Ім'я",
        'surname': "Прізвище",
        'age': "Вік",
        'height': "Зріст",
        'weight': "Вага",
        'wantDay': 'Кількість днів до цілі',
        'wantWeight': 'Важана вага',
    },
    'en':{
        'login': 'Login',
        'password': 'Password',
        'repeatPassword': "Repeat password",
        'name': "Name",
        'surname': "Surname",
        'age': "Age",
        'height': "Height",
        'weight': "Weight",
        'wantDay': 'Number of desired days',
        'wantWeight': 'Desired weight',
    },
}
const callArrLangPlaceholder= (count)=>{
    let arr = {}
count == 0 ? arr = arrLangPlaceholder.uk : arr = arrLangPlaceholder.en
return arr
}


const arrLangValidate = {
    'uk': {
        'login': 'Логін має бути більше 6 символів та не має містити жодних спеціальних символів (!@#$%^&*?/,.)',
        'password': 'Мінімум 8 символів, велика буква та цифра',
        'repeatPassword': "Паролі повинні повторюватись",
        'name': "Некоректне ім'я",
        'surname': "Некоректне прізвище",
        'age': "У такому віці краще зверніться до лікаря",
        'sex': 'Оберіть стать',
        'height': "З таким зростом краще зверніться до лікаря",
        'weight': "З такою вагою краще зверніться до лікаря",
        'activ': 'Оберіть рівень активності',
    },
    'en': {
        'login': 'The login must be longer than 6 characters and must not contain any special characters (!@#$%^&*?/,.)',
        'password': 'Minimum of 8 characters, uppercase letter and number',
        'repeatPassword': "Passwords must be the same",
        'name': "Invalid name",
        'surname': "Incorrect last name",
        'age': "At this age, it is better to consult a doctor",
        'sex': 'Select gender',
        'height': "With such growth, it is better to consult a doctor",
        'weight': "With such a weight, it is better to consult a doctor",
        'activ': 'Choose an activity level',
    }
}

export {arrLangText, arrLangPlaceholder, arrLangValidate, callArrLangPlaceholder}