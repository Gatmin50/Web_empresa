let index = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(i) {
    if (i >= slides.length) { index = 0; }
    if (i < 0) { index = slides.length - 1; }
    slides.forEach((slide, idx) => {
        slide.style.transform = `translateX(${-index * 100}%)`;
    });
}

function nextSlide() {
    index++;
    showSlide(index);
}

document.querySelectorAll('.carousel').forEach(carousel => {
    carousel.addEventListener('click', () => {
        nextSlide();
    });
});

// Cambiar automáticamente cada 3 segundos
setInterval(nextSlide, 3000);

showSlide(index);
