let projectsLink = document.getElementById('projects-link')
let aboutMeLink = document.getElementById('about-me-link')
let aboutFooterLink = document.querySelector('a#about')
const links = [projectsLink,aboutMeLink,aboutFooterLink]

let navButtons = document.getElementById('nav-buttons')

setTimeout(function() {
    navButtons.classList.add('loaded')
}, 2000);

let heroText = document.querySelector('span.hero-text')
let footer = document.querySelector('.footer-wrapper')
const heroItems = [heroText,navButtons,footer]

function fadeOutPageContent() {
    for (let i = 0; i < heroItems.length; i++) {
        fadeOut(i)
    }

    function fadeOut(i) {
        setTimeout(function() {
        heroItems[i].classList.add('hide')
        }, 250 * i)
    }
}

let heroBody = document.querySelector('body.home')

function fadeInBackgroundWhite() {
    heroBody.classList.add('animated-home')
}

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', (e) => {
        e.preventDefault()
        let link = e.target.href
    
        fadeOutPageContent()
        setTimeout(fadeInBackgroundWhite, 1000)
        
        setTimeout(function() {
            window.open(link, '_self')
        }, 2000)
    })
}