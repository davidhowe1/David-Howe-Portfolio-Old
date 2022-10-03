let menu = document.querySelector('.menu-items')
let laurasima = document.getElementById('laurasima')
let slfMastery = document.getElementById('slf-mastery')
let fika = document.getElementById('fika')
let about = document.querySelector('a#about')
let footer = document.querySelector('.footer-wrapper')

const menuItems = [menu,laurasima,slfMastery,fika,footer]

let body = document.querySelector('body')

let lauraismaLink = document.querySelector('a.laurasima')
let slfMasteryLink = document.querySelector('a.slf-mastery')
let fikaLink = document.querySelector('a.fika')
let homeLink = document.get

    lauraismaLink.addEventListener('click', (e) => {
        e.preventDefault()
        let link = e.target.href

        fadeOutMenu()
        setTimeout(fadeInBackgroundLaurasima, 300)
    
        setTimeout(function() {
            window.open(link, '_self')
        }, 1200)
    })

    slfMasteryLink.addEventListener('click', (e) => {
        e.preventDefault()
        let link = e.target.href

        fadeOutMenu()
        setTimeout(fadeInBackgroundSlfMastery, 300)
    
        setTimeout(function() {
            window.open(link, '_self')
        }, 1200)

    })

    fikaLink.addEventListener('click', (e) => {
        e.preventDefault()
        let link = e.target.href

        fadeOutMenu()
        setTimeout(fadeInBackgroundFika, 300)
    
        setTimeout(function() {
            window.open(link, '_self')
        }, 1200)
    })

    home.addEventListener('click', (e) => {
        e.preventDefault()
        let link = e.target.href

        fadeOutMenu()
        setTimeout(fadeInBackgroundSlfMastery, 300)

        setTimeout(function() {
            window.open(link, '_self')
        }, 1200)
    })

    about.addEventListener('click', (e) => {
        e.preventDefault()
        let link = e.target.href

        fadeOutMenu()
        
        setTimeout(function() {
            window.open(link, '_self')
        }, 1200)
    })

// Menu Link fade-out animations

function fadeOutMenu() {

    for (let i = 0; i < menuItems.length; i++) {
        fadeOut(i)
    }

    function fadeOut(i) {
        setTimeout(function() {
        menuItems[i].classList.add('hide')
        }, 100 * i)
    }
}

// Page Fade-in animations and functionality

function fadeInBackgroundLaurasima() {
    body.classList.toggle('animated-laurasima')
}

function fadeInBackgroundSlfMastery() {
    body.classList.toggle('animated-slf-mastery')
}

function fadeInBackgroundFika() {
    body.classList.toggle('animated-fika')
}

