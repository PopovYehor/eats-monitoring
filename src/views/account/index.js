import { account } from "../../components/account"
import {createElem} from "../../helper/createElement"
const Account = ()=>{
    const root = document.getElementById('root')
    createElem('div', 'profile', null, root)
    account()
}

export default Account