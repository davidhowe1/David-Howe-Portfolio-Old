let slfMasteryLink = document.querySelectorAll('a.slf-mastery')
let fikaLink = document.querySelectorAll('a.fika')

let loadingScreen = document.querySelector('#laurasima.loading-screen')

window.addEventListener('load', function() {
    loadingScreen.classList.add('hidden')
})

function fadeOutContent() {
    fadeOnClick()
    setTimeout(fadeInBackgroundWhite, 1000)
}

for (i = 0; i < slfMasteryLink.length; i++) {

    slfMasteryLink[i].addEventListener('click', (e) => {
        e.preventDefault()
        let link = e.target.href

        fadeOutContent()
        setTimeout(fadeInBackgroundSlfMastery, 800)

        setTimeout(function() {
            window.open(link, '_self')
        }, 1800)
    })
}

for (i = 0; i < fikaLink.length; i++) {

    fikaLink[i].addEventListener('click', (e) => {
        e.preventDefault()
        let link = e.target.href

        fadeOutContent()
        setTimeout(fadeInBackgroundFika, 800)

        setTimeout(function() {
            window.open(link, '_self')
        }, 1800)
    })
}

let homeLink = document.querySelector('#home-link')

homeLink.addEventListener('click', (e) => {
    e.preventDefault()
    let link = e.target.href

    fadeOutContent()
    setTimeout(fadeInBackgroundSlfMastery, 800)

    setTimeout(function() {
        window.open(link, '_self')
    }, 1800)
})

let a = document.querySelector('a.back-btn')
let about = document.getElementById('about')
let aboutLink = document.querySelector('a.about-link')
let projects = document.querySelector('a.home')
let nonePortfolioLinks = [a,about,aboutLink,projects]

for (let i = 0; i < nonePortfolioLinks.length; i++) {

    nonePortfolioLinks[i].addEventListener('click', (e) => {
        e.preventDefault()
        let link = e.target.href

        fadeOutContent()

        setTimeout(function() {
            window.open(link, '_self')
        }, 1800)
    })

}

// Fade out animation functions

let body = document.querySelector('body#laurasima')
let pageElements = document.querySelectorAll('#element')

function fadeInBackgroundWhite() {
    body.classList.toggle('animated-laurasima')
}

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

// fade in animations

function fadeInBackgroundSlfMastery() {
    body.classList.toggle('animated-slf-mastery')
}

function fadeInBackgroundFika() {
    body.classList.toggle('animated-fika')
}

// Image Overlay Script

let imageContainer = document.querySelector('.image-container')
let contentContainer = document.querySelector('.content-1')
let galleryMessage = document.querySelector('p.gallery')

let images = [
    'pictures-full-size/laurasima/laurasima-5.jpeg',
    'pictures-full-size/laurasima/laurasima-8.jpeg',
    'pictures-full-size/laurasima/laurasima-4.jpeg',
    'pictures-full-size/laurasima/laurasima.jpeg'
]

function openOverlay() {

    let html = 
    `
    <div class="image-overlay">

        <div class="overlay-loading-screen">
            <span id="laurasima" class="loader" alt="loading..."></span>
        </div>

        <div class="overlay-close">
            <button class="overlay-close">
                <h1>&#10005</h1>
            </button>
        </div>

        <div class="image-wrapper">
            <img id="overlay-image" class="mobile" src="${images[0]}" alt="Mobile home page screenshot - Large">
            <img id="overlay-image" class="mobile" src="${images[1]}" alt="Mobile portfolio page screenshot - Large">
            <img id="overlay-image" class="tablet" src="${images[2]}" alt="Tablet portfolio overlay screenshot - Large">
            <img id="overlay-image" class="desktop" src="${images[3]}" alt="Desktop home page screenshot - Large">
        </div>
    </div>
    `
    contentContainer.insertAdjacentHTML('beforeend', html)

}

imageContainer.addEventListener('click', function() {
    openOverlay()
    ready()
    removeGalleryMessage()
    setTimeout(fadeInImages, 900)
})

function removeGalleryMessage() {
    galleryMessage.classList.toggle('hidden')
}

function fadeInImages() {
    let imagesArray  = document.querySelectorAll('.image-wrapper img')

    for (let i = 0; i < imagesArray.length; i++) {
        loadImages(i)
    }

    function loadImages(i) {
        setTimeout(function() {
        imagesArray[i].classList.add('visible')
        }, 300 * i)
    }
}

function ready() {

    let closeOverlayBtn = document.querySelector('button.overlay-close h1')
    let imageOverlay = document.querySelector('.image-overlay')
    let imageWrapper = imageOverlay.querySelector('.image-wrapper')
    let images = imageWrapper.querySelectorAll('#overlay-image')
    let overlayLoader = document.querySelector('.overlay-loading-screen')

    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener('load', function() {
            overlayLoader.classList.add('hidden')
        })
    }

    closeOverlayBtn.addEventListener('click', closeOverlay)

    function closeOverlay() {
        imageOverlay.classList.add('hidden')
        setTimeout(removeOverlay, 300)
    }

    function removeOverlay() {
        imageOverlay.remove()
    }

    document.addEventListener('keydown', function(event) {
        if(event.key === "Escape") {
            closeOverlay()
        }
    })

    imageOverlay.addEventListener('click', function() {
        imageOverlay.classList.add('hidden')
        setTimeout(removeOverlay, 300)    
    })
}