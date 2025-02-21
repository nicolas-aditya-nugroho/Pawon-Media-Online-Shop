const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display
            = 'none';
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior:
            'smooth'
    });
}