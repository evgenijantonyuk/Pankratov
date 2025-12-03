
//     ===================================== hamburger-menu ================================
const openMenuBtn = document.querySelector('#burger')
const mobileMenu = document.querySelector('.header__nav-mobile')
const closeMenu = document.querySelector('.header__burger-btn')

openMenuBtn.addEventListener('click', function () {
    console.log('click')
    mobileMenu.classList.toggle('active')
    closeMenu.classList.toggle('active')
})
// =============================
const detailsButton = document.getElementById('detailsId')
const details = document.querySelector('.details')
const iconClose = document.querySelector('.icon__close')

detailsButton.addEventListener('click', openDetails)
iconClose.addEventListener('click', closeDetails)

function openDetails() {
    details.classList.add('show')
}
function closeDetails() {
    details.classList.remove('show')
}


