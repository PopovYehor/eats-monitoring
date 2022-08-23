import './style/styles.scss'
import { createElem } from './helper/createElement'
import Header from './components/header'
import main from './views/main'
import Login from './views/login'
import signUp from './views/signUp'
import Account from './views/account'
import { placeholderClickUp, placeholderUp, selectHasVal } from './helper/form-scrypts/placeholderUp'
import "../src/helper/validation/main-form-validation"
import { translate } from './helper/translate/translate'
const root = document.getElementById('root')

createElem('header', 'header', null, root)
Header()
/* signUp() */
/* main() */
Account()
translate()
placeholderUp()
placeholderClickUp()
selectHasVal()
translate()