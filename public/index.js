window.addEventListener('load', function() {

    particlesJS.load('particles-js', 'particles.json', function() {
        console.log('callback - particles.js config loaded');
    });

    window.sr = ScrollReveal();
    sr.reveal('#intro-text');
    sr.reveal('#about-text');
    
}, false);