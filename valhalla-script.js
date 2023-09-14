/*========== POPUP IMAGE SLIDER ==========*/

const openModalBtn = document.getElementById('openModalBtn');
const modal = document.getElementById('myModal');
const closeBtn = document.querySelector('.close');

openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

/*========== scroll reveal ==========*/
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200

});

ScrollReveal().reveal('.about-content h2, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.about-content', { origin: 'right' });

/*========== disable right-click on img ==========*/
// Get all <img> elements on the page
var images = document.querySelectorAll("img");

// Loop through each <img> element and disable right-click
images.forEach(function(image) {
    image.addEventListener("contextmenu", function(e) {
        e.preventDefault();
    });
});
