let mobileMenu = document.querySelector('.mobile-menu')
let closeMenuMobile = document.querySelector('h1.close-menu')
let menu = document.querySelector('.mobile-menu-full')
let mobileMenuItems = document.querySelectorAll('.mobile-menu-items h3 a')
let menuVisible = document.getElementById('mobile-menu-full')

mobileMenu.addEventListener('click', openMenu)

function closeMenu() {
    mobileTitle.classList.toggle('hide')
}

function openMenu() {
    raiseZIndex()
    menu.classList.add('visible')
    mobileMenu.classList.add('hidden')
}

closeMenuMobile.addEventListener('click', closeMobileMenu)

function closeMobileMenu() {
    menu.classList.remove('visible')
    mobileMenu.classList.remove('hidden')
    setTimeout(raiseZIndex, 300)
    setTimeout(lowerZIndex, 400)
}

function raiseZIndex() {
    menuVisible.style.zIndex = '5'
}

function lowerZIndex() {
    menuVisible.style.zIndex = '0'
}

for (i = 0; i < mobileMenuItems.length; i++) {
    let items = mobileMenuItems[i]
    items.addEventListener('click', function() {
        menu.classList.remove('visible')
    })
}

// Hide Scroll Alert on image scroll

let scrollAlert = document.getElementsByClassName('scroll-alert')
let imageScroll = document.querySelector('.right-side-container')

for (i = 0; i < scrollAlert.length; i++) {
    let hideScrollAlert = scrollAlert[i]

    function hideScroll() {
        hideScrollAlert.classList.add('hidden')
    }

    imageScroll.addEventListener('scroll', function() {
        setTimeout(hideScroll, 500)
    })
}