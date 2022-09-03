let images = [
    'pictures/laurasima/laurasima-5.jpeg',
    'pictures/laurasima/laurasima-8.jpeg',
    'pictures/laurasima/laurasima-4.jpeg',
    'pictures/laurasima/laurasima.jpeg'
]

let galleryMessage = document.querySelector('p.gallery')

function openOverlay() {

    let html = 
    `
    <div class="image-overlay">
        <div class="overlay-close">
            <button class="overlay-close">
                <h1>&#x2715</h1>
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
    fadeInImages()
    removeGalleryMessage()
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
}

