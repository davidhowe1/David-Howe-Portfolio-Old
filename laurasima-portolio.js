let backButton = document.getElementById('close-page')

let pageElements = document.querySelectorAll('#element')

let a = document.querySelector('a.back-btn')
let body = document.querySelector('body#laurasima')
let slfMasteryLink = document.querySelectorAll('a.slf-mastery')
let fikaLink = document.querySelectorAll('a.fika')
let about = document.getElementById('about')
let home = document.querySelector('a.home')

function fadeOutContent() {
    fadeOnClick()
    setTimeout(fadeInBackgroundWhite, 600)
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

a.addEventListener('click', (e) => {
    e.preventDefault()
    let link = e.target.href

    fadeOutContent()

    setTimeout(function() {
        window.open(link, '_self')
    }, 1800)
})

about.addEventListener('click', (e) => {
    e.preventDefault()
    let link = e.target.href

    fadeOutContent()

    setTimeout(function() {
        window.open(link, '_self')
    }, 1800)
})

home.addEventListener('click', (e) => {
    e.preventDefault()
    let link = e.target.href

    fadeOutContent()

    setTimeout(function() {
        window.open(link, '_self')
    }, 1800)
})

// Fade out animation functions

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
        <div class="overlay-close">
            <button class="overlay-close">
                <h1>&#10799</h1>
            </button>
        </div>

        <div class="image-wrapper">
            <img class="mobile" src="${images[0]}" alt="">
            <img class="mobile" src="${images[1]}" alt="">
            <img class="tablet" src="${images[2]}" alt="">
            <img class="desktop" src="${images[3]}" alt="">
        </div>
    </div>
    `
    contentContainer.insertAdjacentHTML('beforeend', html)
}

imageContainer.addEventListener('click', function() {
    openOverlay()
    ready()
    removeGalleryMessage()
    setTimeout(fadeInImages, 500)
})

function removeGalleryMessage() {
    galleryMessage.classList.toggle('hidden')
}

function fadeInImages() {
    let imagesArray  = document.querySelectorAll('.image-wrapper img')

    for (i = 0; i < imagesArray.length; i++) {
        loadImages(i)
    }

    function loadImages(i) {
        setTimeout(function() {
        imagesArray[i].classList.add('visible')
    }, 200 * i)
}
}

function ready() {

    let closeOverlayBtn = document.querySelector('button.overlay-close h1')
    let imageOverlay = document.querySelector('.image-overlay')

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