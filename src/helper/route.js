import Account from "../views/account"
import Foods from "../views/foods"
import Main from "../views/main"
const onHandleRoute = (e) => {
    e = e || e.window
    e.preventDefault()
    window.history.pushState({}, '', e.target.getAttribute('href'))
    onLocation()
}

const routes = {
    '/': Main,
    '/food': Foods,
}

const onLocation = () => {
    const { pathname } = window.location
    const route = routes[pathname] || routes[404]
    const main = document.getElementById('root')
    main.innerHTML = '';
    route()
}

window.onpopstate = onLocation
window.route = onHandleRoute

export { onHandleRoute, onLocation }