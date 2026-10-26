document.addEventListener('DOMContentLoaded', () => {

    /**
     * FEATURE 1: Sticky Navigation on Scroll
     */
    const nav = document.querySelector('nav');

    window.addEventListener('scroll', () => {
        // If user scrolls down more than 50px, add 'scrolled' class to nav
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            // Otherwise, remove it
            nav.classList.remove('scrolled');
        }
    });


    /**
     * FEATURE 2: Mouse Move Parallax Effect (Simplified)
     */
    const hero = document.querySelector('.hero-section');
    const imageWrapper = document.querySelector('.image-wrapper');
    const actualImage = imageWrapper.querySelector('img'); // The image inside the wrapper
    const personDetailsCard = document.querySelector('.person-details.glass-card');
    const bgShape1 = document.querySelector('.hero-bg-shape.shape-1');
    const bgShape2 = document.querySelector('.hero-bg-shape.shape-2');

    // Set the strength of the movement
    const imageWrapperStrength = 30; // Wrapper (square shape) moves
    const actualImageStrength = 50;  // Actual image moves (slightly more for depth within the square)
    const cardStrength = 20;
    const shape1Strength = 10;
    const shape2Strength = 5;

    hero.addEventListener('mousemove', (e) => {
        const { offsetWidth: width, offsetHeight: height } = hero;
        const { clientX, clientY } = e;

        // Calculate position from center (from -0.5 to 0.5)
        const x = (clientX / width) - 0.5;
        const y = (clientY / height) - 0.5;

        // Parallax for the image wrapper
        const imageWrapperMoveX = -(x * imageWrapperStrength);
        const imageWrapperMoveY = -(y * imageWrapperStrength);
        imageWrapper.style.transform = `translate(${imageWrapperMoveX}px, ${imageWrapperMoveY}px)`;

        // Parallax for the actual image inside the wrapper
        const actualImageMoveX = (x * actualImageStrength); // Inverted direction for depth
        const actualImageMoveY = (y * actualImageStrength);
Two a.m. and the rain is falling
        actualImage.style.transform = `translate(${actualImageMoveX}px, ${actualImageMoveY}px)`;

        // Parallax for the glassmorphism card
        const cardMoveX = -(x * cardStrength);
        const cardMoveY = -(y * cardStrength);
        personDetailsCard.style.transform = `translate(${cardMoveX}px, ${cardMoveY}px)`;

        // Parallax for background shapes
        const shape1MoveX = -(x * shape1Strength);
        const shape1MoveY = -(y * shape1Strength);
        bgShape1.style.transform = `translate(calc(-50% + ${shape1MoveX}px), calc(-50% + ${shape1MoveY}px))`;

        const shape2MoveX = -(x * shape2Strength);
        const shape2MoveY = -(y * shape2Strength);
        bgShape2.style.transform = `translate(calc(-50% + ${shape2MoveX}px), calc(-50% + ${shape2MoveY}px))`;
    });

    // Reset position when mouse leaves the hero section
    hero.addEventListener('mouseleave', () => {
        imageWrapper.style.transform = `translate(0px, 0px)`;
        actualImage.style.transform = `translate(0px, 0px)`;
        personDetailsCard.style.transform = `translate(0px, 0px)`;
        bgShape1.style.transform = `translate(-50%, -50%)`;
        bgShape2.style.transform = `translate(-50%, -50%)`;
    });

});