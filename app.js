const slides = document.querySelectorAll('.slide')

let count = 0

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`
})


const slideImage = () => {
    slides.forEach(slide => {
        slide.style.transform = `translateX(-${count * 100}%)`
        // slide.style.transform = `translateY(-${count * 100}%)`
    })
}

const goPrev = () => {
    if(count > 0)
    count--
    slideImage()
}

const goNext = () => {
    if(count < 4)
    count++
    slideImage()
}