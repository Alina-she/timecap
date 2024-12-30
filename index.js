// your code goes here
document.addEventListener('DOMContentLoaded', () => {

    // Smooth Scroll for internal links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').slice(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    // Scroll Animation for fade-in effect
    const fadeInElements = document.querySelectorAll('.card');
    window.addEventListener('scroll', () => {
        fadeInElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementPosition < windowHeight - 100) {
                element.classList.add('visible');
            }
        });
    });

});