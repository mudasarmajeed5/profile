

    document.addEventListener('DOMContentLoaded', function() {
        const scrollDiv = document.querySelector('.scroll');

        scrollDiv.addEventListener('click', function() {
            const aboutSection = document.querySelector('#about');

            aboutSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

