const sameHeightTable = ()=>{
    const profileDescription = document.querySelectorAll('.profile-description')
    const profileItem = document.querySelectorAll('.profile-item')
    profileDescription.forEach((elem , i) => {
        setTimeout(()=>{
            elem.style.height = profileItem[i+1].getBoundingClientRect().height + 'px'
        }, 250)
    })
}

export {sameHeightTable}