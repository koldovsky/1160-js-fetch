function init() {
    import('./header-text.js');
    import('./header-clock.js');
    import('./chat.js');
    import('./product-carousel.js');
    import('./product-carousel-animated.js');
    import('./product-list.js');
    import('./contact-form.js');
}

const totalPartials = document.querySelectorAll('[hx-trigger="load"], [data-hx-trigger="load"]').length;
let loadedPartialsCount = 0;

document.body.addEventListener('htmx:afterOnLoad', () => {
    loadedPartialsCount++;
    if (loadedPartialsCount === totalPartials) init();
});