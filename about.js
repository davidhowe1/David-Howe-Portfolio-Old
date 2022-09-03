let backButton = document.getElementById('close-page')

let pageElements = document.querySelectorAll('#element')
let laurasimaLink = document.querySelectorAll('a.laurasima')
let slfMasteryLink = document.querySelectorAll('a.slf-mastery')
let fikaLink = document.querySelectorAll('a.fika')

let a = document.querySelector('a.back-btn')
let about = document.querySelector('a#about')
let body = document.querySelector('body#about')
let home = document.querySelector('a.home')

function closeMenu() {
    mobileTitle.classList.toggle('hide')
}

for (i = 0; i < laurasimaLink.length; i++) {

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

for (i = 0; i < slfMasteryLink.length; i++) {

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
    
for (i = 0; i < fikaLink.length; i++) {

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
    
a.addEventListener('click', (e) => {
    e.preventDefault()
    let link = e.target.href

    fadeOnClick()

    setTimeout(function() {
        window.open(link, '_self')
    }, 1600)
})

home.addEventListener('click', (e) => {
    e.preventDefault()
    let link = e.target.href

    fadeOnClick()

    setTimeout(function() {
        window.open(link, '_self')
    }, 1800)
})

about.addEventListener('click', (e) => {
    e.preventDefault()
    let link = e.target.href

    fadeOnClick()

    setTimeout(function() {
        window.open(link, '_self')
    }, 1600)
})

// Fade out animation functions

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

function fadeInBackgroundWhite() {
    body.classList.toggle('animated-laurasima')
}

function fadeInBackgroundSlfMastery() {
    body.classList.toggle('animated-slf-mastery')
}

function fadeInBackgroundFika() {
    body.classList.toggle('animated-fika')
}