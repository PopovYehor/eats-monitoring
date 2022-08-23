const localStorageUser = (key)=>{
    const element = localStorage.getItem(key)
    return element
}

export {localStorageUser}