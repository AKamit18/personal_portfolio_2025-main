const images = [
    "/images/certificates/c-1.png",
    "/images/certificates/c-14.png",
    "/images/certificates/c-2.png",
    "/images/certificates/c-10.png",
    "/images/certificates/c-11.png",
    "/images/certificates/c-3.png",
    "/images/certificates/c-4.png",
    "/images/certificates/c-12.png",
    "/images/certificates/c-13.png",
    "/images/certificates/c-5.png",
    "/images/certificates/c-6.png",
    "/images/certificates/c-14.png",
    "/images/certificates/c-15.png",
    "/images/certificates/c-7.png",
    "/images/certificates/c-8.png",
    "/images/certificates/c-9.png",
    "/images/certificates/c-16.png"
];


let index = 1;

function updateCarousel() {
    document.getElementById("leftImg").src = images[(index - 1 + images.length) % images.length];
    document.getElementById("mainImg").src = images[index];
    document.getElementById("rightImg").src = images[(index + 1) % images.length];
}

function moveRight() {
    index = (index + 1) % images.length;
    updateCarousel();
}

function moveLeft() {
    index = (index - 1 + images.length) % images.length;
    updateCarousel();
}

setInterval(moveRight, 5000); // Auto-slide every 10 seconds

updateCarousel(); // Initial setup
