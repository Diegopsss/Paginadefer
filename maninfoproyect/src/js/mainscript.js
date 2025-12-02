document.addEventListener('DOMContentLoaded', () => {
    // --- Animación de Elementos al Hacer Scroll (Intersection Observer API) ---

    // Selecciona todos los elementos que deben animarse al aparecer
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');

    // Opciones para el Intersection Observer
    const observerOptions = {
        root: null, // El viewport es el root
        rootMargin: '0px',
        threshold: 0.15 // El elemento es visible si el 15% está en el viewport
    };

    // Callback que se ejecuta cuando la visibilidad de un elemento cambia
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Si el elemento está en el viewport, añade la clase 'visible'
                entry.target.classList.add('visible');
                // Deja de observar el elemento, ya que ya está animado
                observer.unobserve(entry.target);
            }
        });
    };

    // Crear y configurar el observador
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observar cada elemento
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });

    // --- Smooth Scrolling para la Navegación ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});