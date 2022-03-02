const slides = document.getElementsByClassName('carousel-item')
// const btnNextEl = document.getElementById('btn-next')
// const btnPrevEl = document.getElementById('btn-prev')


let slidePosition = 0
const totalSlides = slides.length
const time = 4000;

// btnNextEl.addEventListener('click', moveToNextSlide)
// btnPrevEl.addEventListener('click', moveToPrevSlide)

function hideAllSlides() {
    Array.from(slides).forEach(slide => {
        slide.classList.remove('carousel-item-visible')
        slide.classList.add('carousel-item-hidden')
    })

}

function moveToNextSlide () {
    hideAllSlides()
    if(slidePosition === totalSlides -1) {
        slidePosition = 0
    } else {
        slidePosition++
    } 
    slides[slidePosition].classList.add('carousel-item-visible')
    setTimeout('moveToNextSlide()', time)
}

window.onload = moveToNextSlide

// function moveToPrevSlide(){
//     hideAllSlides()
//     if(slidePosition === 0) {
//         slidePosition = totalSlides - 1
//     } else {
//         slidePosition--
//     }
//  slides[slidePosition].classList.add('carousel-item-visible')
// }