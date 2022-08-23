import { account } from "../../components/account"
import {createElem} from "../../helper/createElement"
import { upAccount} from "../../helper/account-scripts/scrypt"
const Account = ()=>{
    const root = document.getElementById('root')
    createElem('div', 'profile', null, root)
    account()
    upAccount()
    
}

export default Account