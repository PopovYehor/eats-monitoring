import './style/styles.scss'
import { createElem } from './helper/createElement'
import Header from './components/header'
import main from './views/main'
import { placeholderClickUp, placeholderUp, selectHasVal } from './helper/placeholderUp'
const root = document.getElementById('root')

createElem('header', 'header', null, root)
Header()
main()
placeholderUp()
placeholderClickUp()
selectHasVal()
