import Account from "../views/account"
import Foods from "../views/foods"
import Login from "../views/login"
import Main from "../views/main"
import SignUp from "../views/signUp"
import Error from "../views/error/Error"
const onHandleRoute = (e) => {
    e = e || e.window
    e.preventDefault()
    window.history.pushState({}, '', e.target.getAttribute('href'))
    onLocation()
}

const routes = {
    '/signUp': SignUp,
    '/login': Login,
    '/': Login,
    '/food': Foods,
    '/account': Account,
    '/error': Error,
}

const onLocation = () => {
    const { pathname } = window.location
    const route = routes[pathname] || routes[404]
    const root = document.getElementById('root')
    root.innerHTML = '';
    route()
}

window.onpopstate = onLocation
window.route = onHandleRoute

export { onHandleRoute, onLocation }