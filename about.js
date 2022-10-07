let laurasimaLink = document.querySelectorAll('a.laurasima')
let slfMasteryLink = document.querySelectorAll('a.slf-mastery')
let fikaLink = document.querySelectorAll('a.fika')

for (let i = 0; i < laurasimaLink.length; i++) {

    laurasimaLink[i].addEventListener('click', (e) => {
        e.preventDefault()
        let link = e.target.href
    
        fadeOnClick()
        setTimeout(fadeInBackgroundWhite, 300)
    
        setTimeout(function() {
            window.open(link, '_self')
        }, 1600)
    })
    }

for (let i = 0; i < slfMasteryLink.length; i++) {

    slfMasteryLink[i].addEventListener('click', (e) => {
        e.preventDefault()
        let link = e.target.href
    
        fadeOnClick()
        setTimeout(fadeInBackgroundSlfMastery, 300)
    
        setTimeout(function() {
            window.open(link, '_self')
        }, 1600)
    })
    }
    
for (let i = 0; i < fikaLink.length; i++) {

    fikaLink[i].addEventListener('click', (e) => {
        e.preventDefault()
        let link = e.target.href

        fadeOnClick()
        setTimeout(fadeInBackgroundFika, 300)

        setTimeout(function() {
            window.open(link, '_self')
        }, 1600)
    })
}

let a = document.querySelector('a.back-btn')
let about = document.querySelector('a#about')
let projects = document.querySelector('a#home.home')
let nonePortfolioLinks = [a,about,projects]

for (let i = 0; i < nonePortfolioLinks.length; i++) {
    nonePortfolioLinks[i].addEventListener('click', (e) => {
        e.preventDefault()
        let link = e.target.href

        fadeOnClick()

        setTimeout(function() {
            window.open(link, '_self')
        }, 1600)
    })
}

let homeLink = document.querySelector('#home-link')

homeLink.addEventListener('click', (e) => {
    e.preventDefault()
    let link = e.target.href

    fadeOnClick()
    setTimeout(fadeInBackgroundSlfMastery, 300)

    setTimeout(function() {
        window.open(link, '_self')
    }, 1600)
})

// Fade out animation functions

let pageElements = document.querySelectorAll('#element')

function fadeOnClick() {
    for (i = 0; i < pageElements.length; i++) {
        fadeOutElements(i)
    }

    function fadeOutElements(i) {
        setTimeout(() => {
            pageElements[i].classList.toggle('hide')
        }, 75 * i)
    }
}

let body = document.querySelector('body#about')

function fadeInBackgroundWhite() {
    body.classList.toggle('animated-laurasima')
}

function fadeInBackgroundSlfMastery() {
    body.classList.toggle('animated-slf-mastery')
}

function fadeInBackgroundFika() {
    body.classList.toggle('animated-fika')
}