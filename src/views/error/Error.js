import errorPage from "../../components/errorPage";
import Header from "../../components/header";
import { createElem } from "../../helper/createElement";

const Error = ()=>{
    Header()
    const root = document.getElementById('root')
    createElem('div', 'error-wrap', null, root)
    errorPage()
}

export default Error