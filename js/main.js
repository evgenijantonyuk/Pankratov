
//     ===================================== hamburger-menu ================================
const openMenuBtn = document.querySelector('#burger')
const mobileMenu = document.querySelector('.header__nav-mobile')
const closeMenu = document.querySelector('.header__burger-btn')

openMenuBtn.addEventListener('click', function () {
    console.log('click')
    mobileMenu.classList.toggle('active')
    closeMenu.classList.toggle('active')
})
// ======================================== modal ===========================================

    const buttons = document.querySelectorAll('.btn')
    const details = document.querySelector('.details')
    const iconCloses = document.querySelectorAll('.icon__close')
    
    details.style.cssText = `
    display: flex;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
`
    
    const closeModal = (event) => {
        const target = event.target
        if (target === details ||
            (iconCloses && target.closest('.icon__close')) ||
            event.code === 'Escape'
        ) {
            details.style.opacity = 0
            setTimeout(() => {
                details.style.visibility = 'hidden'
            }, 500)
            window.removeEventListener('click', closeModal)
        }
    }
    
    const openModal = () => {
        details.style.visibility = 'visible'
        details.style.opacity = 1
        window.addEventListener('keydown', closeModal)
    }
    
    for (let button of buttons) {
        button.addEventListener('click', openModal)
    }
    
    for (let close of iconCloses) {
        details.addEventListener('click', closeModal)
    }


