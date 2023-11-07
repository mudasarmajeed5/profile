document.addEventListener('DOMContentLoaded', function() {
    const socialLinks = document.querySelectorAll('.social-links ul li');
    const container = document.querySelector('.social-links');

    socialLinks.forEach((link, index) => {
        link.style.transition = `opacity 0.5s ease-in-out ${index * 0.5}s`; // Adjust the delay timing
        link.style.opacity = 0;
    });

    container.style.transition = "left 2s, transform 1s";

    function applyAnimation() {
        if (window.matchMedia("(max-width: 767px)").matches) {
            container.style.left = "30vw"; // Applied media query: move to 30vw
        } else {
            container.style.left = "15vw"; // Default for other resolutions
        }

        socialLinks.forEach((link, index) => {
            setTimeout(() => {
                link.style.opacity = 1;
            }, 50 + index * 50); // Adjust timing as needed
        });
    }

    applyAnimation(); // Initial call for the animation

    window.addEventListener('resize', applyAnimation); // Re-run animation on window resize
});
