let backButton = document.getElementById('close-page')

let pageElements = document.querySelectorAll('#element')

let a = document.querySelector('a.back-btn')
let body = document.querySelector('body#fika')
let laurasimaLink = document.querySelectorAll('a.laurasima')
let slfMasteryLink = document.querySelectorAll('a.slf-mastery')
let aboutLink = document.querySelector('a.fika')
let mobileTitle = document.querySelector('.mobile-title')
let about = document.getElementById('about')
let home = document.querySelector('a.home')


function fadeOutContent() {
    fadeOnClick()
    setTimeout(fadeInBackgroundWhite, 600)
}

for (i = 0; i < laurasimaLink.length; i++) {

laurasimaLink[i].addEventListener('click', (e) => {
    e.preventDefault()
    let link = e.target.href

    fadeOutContent()
    setTimeout(fadeInBackgroundLaurasima, 800)

    setTimeout(function() {
        window.open(link, '_self')
    }, 1800)
})
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

aboutLink.addEventListener('click', (e) => {
    e.preventDefault()
    let link = e.target.href

    fadeOutContent()
    setTimeout(fadeInBackgroundLaurasima, 300)

    setTimeout(function() {
        window.open(link, '_self')
    }, 1800)
})

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
    body.classList.toggle('animated-fika')
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

function fadeInBackgroundLaurasima() {
    body.classList.toggle('animated-laurasima')
}

function fadeInBackgroundSlfMastery() {
    body.classList.toggle('animated-slf-mastery')
}

// Image Overlay Script

let imageContainer = document.querySelector('.image-container')
let contentContainer = document.querySelector('.content-1')
let galleryMessage = document.querySelector('p.gallery')

let images = [
    "pictures-full-size/FIKA/fika-3.jpeg",
    "pictures-full-size/FIKA/fika-4.jpeg",
    "pictures-full-size/FIKA/fika-5.jpeg",
    "pictures-full-size/FIKA/fika-6.jpeg"
]

function openOverlay() {

    let html = 
    `
    <div class="image-overlay">
        <div class="overlay-close">
            <button class="overlay-close">
                <h1>&#10005</h1>
            </button>
        </div>

        <div class="image-wrapper">
            <img class="mobile" src="${images[0]}" alt="Mobile merch page screenshot">
            <img class="mobile" src="${images[1]}" alt="Mobile about page screenshot">
            <img class="tablet" src="${images[2]}" alt="Tablet merch and cart page screenshot">
            <img class="desktop" src="${images[3]}" alt="Desktop home page screenshot">
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

    for (i = 0; i < imagesArray.length; i++) {
        loadImages(i)
    }

    function loadImages(i) {
        setTimeout(function() {
        imagesArray[i].classList.add('visible')
    }, 400 * i)
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