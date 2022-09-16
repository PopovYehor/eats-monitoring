
const localStorageUser = (key)=>{
    const element = JSON.parse(localStorage.getItem(key))
    return element
}

const user = {
    id: localStorageUser('id') || '',
    userName: localStorageUser('userName') || '',
    password: localStorageUser('password') || '',
    name: localStorageUser('name') || '',
    surname: localStorageUser('surname') || '',
    sex: localStorageUser('sex') || '',
    age: localStorageUser('age') || '',
    height: localStorageUser('height') || '',
    heightParam: localStorageUser('heightParam') || 'sm',
    weight: localStorageUser('weight') || '',
    weightParam: localStorageUser('weightParam') || 'kg',
    wantWeight: localStorageUser('wantWeight') || '',
    wantWeightParam: localStorageUser('wantWeightParam') || 'kg',
    active: localStorageUser('active') || '',
    photo: localStorageUser('photo') || 'https://ibb.co/d5Qg9vN',
    dateRegist: localStorageUser('dateRegist') || '',
    wantDate: localStorageUser('wantDate') || '',
    translateCount:JSON.parse(localStorage.getItem('translateCount')) || '',
    dataWeight : localStorageUser('dataWeight') || [],
    dataDate: localStorageUser('dataDate') || [],
    perfectWeight: localStorageUser('perfectWeight') || '',
    lastWeighing: localStorageUser('lastWeighing') || '',
    dataDateCalories: localStorageUser('dataDateCalories') || [],
    dataCalories: localStorageUser('dataCalories') || [],
    dataFats: localStorageUser('dataFats') || [],
    dataProtein: localStorageUser('dataProtein') || [],
    dataCarb: localStorageUser('dataCarb') || [],
    dataFoodSelects: localStorageUser('dataFoodSelects') || []
}

const userObjectValue = (keys)=> user[keys]






export {localStorageUser, user, userObjectValue}