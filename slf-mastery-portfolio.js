let backButton = document.getElementById('close-page')

let pageElements = document.querySelectorAll('#element')

let a = document.querySelector('a.back-btn')
let body = document.querySelector('body#slf-mastery')
let laurasimaLink = document.querySelectorAll('a.laurasima')
let fikaLink = document.querySelectorAll('a.fika')
let about = document.getElementById('about')
let home = document.querySelector('a.home')
let loadingScreen = document.querySelector('#slf-mastery.loading-screen.visible')
let pictures = document.querySelectorAll('img')

for (let i = 0; i < pictures.length; i++) {
    function removeLoadingScreen() {
        loadingScreen.remove()
    }

    if ( document.readyState === 'complete') {
        removeLoadingScreen()
    } else {
        pictures[i].addEventListener('load', removeLoadingScreen())
    }
}

function fadeOutContent() {
    fadeOnClick()
    setTimeout(fadeInBackgroundWhite, 800)
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
    body.classList.toggle('animated')
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

function fadeInBackgroundFika() {
    body.classList.toggle('animated-fika')
}

// Image Overlay Script

let imageContainer = document.querySelector('.image-container')
let contentContainer = document.querySelector('.content-1')
let galleryMessage = document.querySelector('p.gallery')

let images = [
    'pictures-full-size/slf-mastery/usman-3.jpeg',
    'pictures-full-size/slf-mastery/usman-5.jpeg',
    'pictures-full-size/slf-mastery/usman-4.jpeg',
    'pictures-full-size/slf-mastery/usman-6.jpeg'
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
            <img class="mobile" src="${images[0]}" alt="Mobile private coaching page screenshot - Large">
            <img class="mobile" src="${images[1]}" alt="Mobile offers and services page screenshot - Large">
            <img class="tablet" src="${images[2]}" alt="Tablet courses page screenshot - Large">
            <img class="desktop" src="${images[3]}" alt="Desktop landing page two collumn section screenshot - Large">
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