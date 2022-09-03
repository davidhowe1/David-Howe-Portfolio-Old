let laurasima = document.getElementById('laurasima')
let slfMastery = document.getElementById('slf-mastery')
let fika = document.getElementById('fika')
let about = document.querySelector('a#about')

const menuItems = [laurasima,slfMastery,fika,about]
const menu = document.querySelector('.menu-items')
const middleMenu = document.querySelector('.middle-menu')

let body = document.querySelector('body')
let contentWrapper = document.querySelector('.content-wrapper.fade')
let footer = document.querySelector('.footer-wrapper')

// Page Delay functionality

let lauraismaLink = document.querySelector('a.laurasima')
let slfMasteryLink = document.querySelector('a.slf-mastery')
let fikaLink = document.querySelector('a.fika')

    lauraismaLink.addEventListener('click', (e) => {
        e.preventDefault()
        let link = e.target.href

        setTimeout(fadeInBackgroundLaurasima, 300)
    
        setTimeout(function() {
            window.open(link, '_self')
        }, 1200)
    })

    slfMasteryLink.addEventListener('click', (e) => {
        e.preventDefault()
        let link = e.target.href

        setTimeout(fadeInBackgroundSlfMastery, 300)
    
        setTimeout(function() {
            window.open(link, '_self')
        }, 1200)

    })

    fikaLink.addEventListener('click', (e) => {
        e.preventDefault()
        let link = e.target.href

        setTimeout(fadeInBackgroundFika, 300)
    
        setTimeout(function() {
            window.open(link, '_self')
        }, 1200)
    })

    about.addEventListener('click', (e) => {
        e.preventDefault()
        let link = e.target.href

        setTimeout(fadeMenu, 450)
        
        setTimeout(function() {
            window.open(link, '_self')
        }, 1200)
    })

// Menu Link fade-out animations

for (i = 0; i < menuItems.length; i++) {
    let menuButtons = menuItems[i]
    menuButtons.addEventListener('click', function() {
        menu.classList.toggle('hidden')
        setTimeout(slideMenu1, 200)
        setTimeout(slideMenu2, 300)
        setTimeout(slideMenu3, 400)
    })
}

function slideMenu1() {
    menuItems[2].classList.toggle('hide')
}

function slideMenu2() {
    menuItems[1].classList.toggle('hide')
}

function slideMenu3() {
    menuItems[0].classList.toggle('hide')
}

function fadeMenu() {
    footer.classList.toggle('hide')
}

// Page Fade-in animations and functionality

function fadeInBackgroundLaurasima() {
    body.classList.toggle('animated-laurasima')
    footer.classList.toggle('hide')
}

function fadeInBackgroundSlfMastery() {
    body.classList.toggle('animated-slf-mastery')
    footer.classList.toggle('hide')
}

function fadeInBackgroundFika() {
    body.classList.toggle('animated-fika')
    footer.classList.toggle('hide')
}

