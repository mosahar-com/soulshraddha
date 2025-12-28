// Soul Shraddha - Interactive Scripts

document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('main-header');
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('#nav-menu a');

    // 1. Sticky Header on Scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Mobile Menu Toggle
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
        });
    }

    // Close menu when link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });

    // 3. Scroll Reveal Animation
    const revealElements = document.querySelectorAll('section, .benefit-card, .about-content, .about-image');
    
    // Add data-reveal attribute to elements
    revealElements.forEach(el => el.setAttribute('data-reveal', ''));

    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;

        revealElements.forEach(el => {
            const top = el.getBoundingClientRect().top;
            if (top < triggerBottom) {
                el.classList.add('revealed');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Run once on load

    // 4. Smooth Anchor Scrolling (optional enhancement)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 5. Simple Form Submission Handing
    const forms = document.querySelectorAll('.subscribe-form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = form.querySelector('input').value;
            alert(`Namaste! Thank you for joining our journey. We've sent a welcome message to ${email}.`);
            form.reset();
        });
    });
});
