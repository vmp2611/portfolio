document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    const icon = themeToggle.querySelector('i');

    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', newTheme);
        icon.className = newTheme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
    });

    // Page Transitions
    const pageTransition = document.querySelector('.page-transition');
    
    function handlePageTransition(url) {
        pageTransition.classList.add('active');
        setTimeout(() => {
            window.location.href = url;
        }, 500);
    }

    // Navigation
    const blocks = document.querySelectorAll('.block');
    const navItems = document.querySelectorAll('.nav-item');
    
    blocks.forEach(block => {
        block.addEventListener('click', () => {
            const section = block.id;
            switch(section) {
                case 'introduction':
                    handlePageTransition('introduction.html');
                    break;
                case 'projects':
                    handlePageTransition('projects.html');
                    break;
                case 'experience':
                    handlePageTransition('experience.html');
                    break;
                case 'skills':
                    handlePageTransition('skills.html');
                    break;
            }
        });
    });

    // Smooth Scroll for Navigation
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = item.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // 3D Card Effect
    const cards = document.querySelectorAll('.block');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    });
}); 