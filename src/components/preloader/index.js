import "./style"

const Preloader = (wrap)=>{
    const element = `
    <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    `
    wrap.innerHTML = element
}

export default Preloader