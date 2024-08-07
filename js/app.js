const menuMobile = document.querySelector('.menu-mobile img')
const ulNavegation = document.querySelector('header ul')

const handleResize = () => {
    const isSmallScreen = window.innerWidth <= 595

    if (isSmallScreen) {
        ulNavegation.style.display = 'none'
        return
    }
    ulNavegation.style.display = 'flex'
}

const handleMenuToggle = () => {
    const isMenuHidden = ulNavegation.style.display === 'none'

    if (isMenuHidden) {
        ulNavegation.style.display = 'flex'
        return
    }
    ulNavegation.style.display = 'none'
}

window.addEventListener('resize', handleResize)
menuMobile.addEventListener('click', handleMenuToggle)