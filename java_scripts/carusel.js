let index = 0;

function showSlide(i) {
    const slides = document.querySelectorAll('.slide');
    if (i >= slides.length) { index = 0 }
    if (i < 0) { index = slides.length - 1 }
    slides.forEach((slide, idx) => {
        slide.style.transform = `translateX(${-index * 100}%)`;
    });
}

document.querySelectorAll('.carousel').forEach(carousel => {
    carousel.addEventListener('click', () => {
        index++;
        showSlide(index);
    });
});

showSlide(index);
