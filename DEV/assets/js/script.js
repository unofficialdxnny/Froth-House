// Froth House | Main Script

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navActions = document.querySelector('.nav-actions');

    // Add shadow on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 20px rgba(44, 30, 22, 0.08)';
            navbar.style.padding = '0.5rem 0';
        } else {
            navbar.style.boxShadow = 'none';
            navbar.style.padding = '0';
        }
    });

    mobileToggle.addEventListener('click', () => {
        const isExpanded = navLinks.style.display === 'flex';

        if (isExpanded) {
            navLinks.style.display = 'none';
            navActions.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.backgroundColor = 'var(--color-surface)';
            navLinks.style.backdropFilter = 'blur(12px)';
            navLinks.style.webkitBackdropFilter = 'blur(12px)';
            navLinks.style.padding = '2rem';
            navLinks.style.borderBottom = '1px solid rgba(44, 30, 22, 0.05)';
            navLinks.style.boxShadow = '0 10px 20px rgba(44, 30, 22, 0.05)';

            navActions.style.display = 'flex';
            navActions.style.position = 'absolute';
            navActions.style.top = 'calc(100% + ' + navLinks.offsetHeight + 'px)';
            navActions.style.left = '0';
            navActions.style.width = '100%';
            navActions.style.justifyContent = 'center';
            navActions.style.padding = '1rem';
            navActions.style.backgroundColor = 'var(--color-surface)';
            navActions.style.backdropFilter = 'blur(12px)';
            navActions.style.webkitBackdropFilter = 'blur(12px)';
        }
    });
});
