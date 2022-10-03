let heroBody = document.querySelector('body.home')
let heroText = document.querySelector('span.hero-text')
let heroFooter = document.querySelector('.footer-wrapper')
let footer = document.querySelector('.footer-wrapper')
let navButtons = document.getElementById('nav-buttons')

const heroItems = [heroText,navButtons,footer]

let projectsLink = document.getElementById('projects-link')
let aboutMeLink = document.getElementById('about-me-link')
let about = document.querySelector('a#about')

const links = [projectsLink,aboutMeLink,about]

setTimeout(function() {
    navButtons.classList.add('loaded')
}, 2000);

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', (e) => {
        e.preventDefault()
        let link = e.target.href
    
        fadeOutHero()
        setTimeout(fadeInBackgroundWhite, 600)
        
        setTimeout(function() {
            window.open(link, '_self')
        }, 2000)
    })
}

function fadeOutHero() {
    for (let i = 0; i < heroItems.length; i++) {
        fadeOut(i)
    }

    function fadeOut(i) {
        setTimeout(function() {
        heroItems[i].classList.add('hide')
        }, 250 * i)
    }
}

function fadeInBackgroundWhite() {
    heroBody.classList.add('animated-home')
}