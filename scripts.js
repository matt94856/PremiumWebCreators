document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Smooth scroll for Learn More button
    const learnMoreButton = document.querySelector('.hero .btn');
    if (learnMoreButton) {
        learnMoreButton.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = document.getElementById('benefits');
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Form submission
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Placeholder for form submission logic
            alert('Form submitted successfully!');
        });
    }

    // Remove hover color change for hero text
    const heroText = document.querySelectorAll('.hero h2, .hero p');
    heroText.forEach(text => {
        text.addEventListener('mouseenter', () => {
            text.style.color = '#333';
        });
        text.addEventListener('mouseleave', () => {
            text.style.color = '#333';
        });
    });

    // Button hover effect for Learn More and Send Message buttons
    const buttons = document.querySelectorAll('.hero .btn, .contact form .btn');
    buttons.forEach(button => {
        button.style.backgroundColor = '#d3d3d3';
        button.style.color = '#333';
        button.addEventListener('mouseenter', () => {
            button.style.backgroundColor = '#a9a9a9';
            button.style.transform = 'translateY(-2px)';
        });
        button.addEventListener('mouseleave', () => {
            button.style.backgroundColor = '#d3d3d3';
            button.style.transform = 'translateY(0)';
        });
    });

    // Hover effect for service boxes and pricing boxes
    const serviceBoxes = document.querySelectorAll('.service-box, .pricing-box');
    serviceBoxes.forEach(box => {
        box.addEventListener('mouseenter', () => {
            box.style.transform = 'scale(1.05) rotate(3deg)';
            box.style.transition = 'transform 0.3s ease-in-out';
        });
        box.addEventListener('mouseleave', () => {
            box.style.transform = 'scale(1) rotate(0)';
        });
    });

    // Hover effect for benefit-box images
    const benefitBoxImages = document.querySelectorAll('.benefit-box img');
    benefitBoxImages.forEach(img => {
        img.addEventListener('mouseenter', () => {
            img.style.transform = 'scale(1.1) rotate(-3deg)';
            img.style.transition = 'transform 0.3s ease-in-out';
        });
        img.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1) rotate(0)';
        });
    });

    // Navigation button hover effect
    const navButtons = document.querySelectorAll('nav ul li a');
    navButtons.forEach(button => {
        button.style.color = '#000';
        button.addEventListener('mouseenter', () => {
            button.style.backgroundColor = '#ff7f50';
            button.style.color = '#fff';
            button.style.transform = 'rotateY(180deg)';
            button.style.transition = 'background-color 0.3s ease, color 0.3s ease, transform 0.5s ease';
        });
        button.addEventListener('mouseleave', () => {
            button.style.backgroundColor = 'transparent';
            button.style.color = '#000';
            button.style.transform = 'rotateY(0)';
        });
    });

    // Fade in effect for the title
    const title = document.querySelector('.main-header h1');
    if (title) {
        title.style.opacity = 0;
        title.style.transform = 'translateX(-100%)';
        setTimeout(() => {
            title.style.transition = 'opacity 2s ease-out, transform 2s ease-out';
            title.style.opacity = 1;
            title.style.transform = 'translateX(0)';
        }, 100);
    }

    // Fade in effect for other sections
    const fadeInElements = document.querySelectorAll('.services, .pricing, .contact, .main-footer, .benefits, .benefit-box, .projects');
    fadeInElements.forEach(element => {
        element.style.opacity = 0;
        window.addEventListener('scroll', () => {
            if (element.getBoundingClientRect().top < window.innerHeight) {
                element.style.transition = 'opacity 1s ease-out';
                element.style.opacity = 1;
            }
        });
    });

    // 3D tilt effect for boxes
    const tiltElements = document.querySelectorAll('.service-box, .pricing-box, .benefit-box img');
    tiltElements.forEach(element => {
        element.style.transformStyle = 'preserve-3d';
        element.style.perspective = '1000px';
        element.addEventListener('mousemove', (e) => {
            const { width, height, left, top } = element.getBoundingClientRect();
            const x = e.clientX - left;
            const y = e.clientY - top;
            const rotateX = (y / height - 0.5) * 20; // adjust values for effect
            const rotateY = (x / width - 0.5) * -20;
            element.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        element.addEventListener('mouseleave', () => {
            element.style.transform = 'rotateX(0) rotateY(0)';
        });
    });

    // Glowing effect for buttons
    const glowingButtons = document.querySelectorAll('.btn');
    glowingButtons.forEach(button => {
        button.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.5)';
        button.addEventListener('mouseenter', () => {
            button.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.8)';
        });
        button.addEventListener('mouseleave', () => {
            button.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.5)';
        });
    });

    // Parallax effect for hero section background
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrollPosition = window.pageYOffset;
            hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`; // adjust for effect
        });
    }

    // Mobile-specific adjustments
    if (window.innerWidth <= 768) {
        // Ensure Learn More button has smooth scrolling effect on mobile
        if (learnMoreButton) {
            learnMoreButton.addEventListener('click', function(e) {
                e.preventDefault();
                const targetSection = document.getElementById('benefits');
                targetSection.scrollIntoView({ behavior: 'smooth' });
            });
        }

        // Adjust hover effects for mobile
        const serviceBoxes = document.querySelectorAll('.service-box, .pricing-box');
        serviceBoxes.forEach(box => {
            box.style.transition = 'transform 0.3s ease'; // Ensure smooth scaling
        });

        const benefitBoxImages = document.querySelectorAll('.benefit-box img');
        benefitBoxImages.forEach(img => {
            img.style.transition = 'transform 0.3s ease'; // Ensure smooth scaling
        });

        // Disable hover effects on mobile since hover is not applicable
        serviceBoxes.forEach(box => {
            box.style.transform = 'none'; // Remove scaling on mobile
        });

        benefitBoxImages.forEach(img => {
            img.style.transform = 'none'; // Remove scaling on mobile
        });

        // Remove hover effects from buttons on mobile
        buttons.forEach(button => {
            button.style.backgroundColor = '#d3d3d3';
            button.style.color = '#333';
            button.removeEventListener('mouseenter', () => {
                button.style.backgroundColor = '#a9a9a9';
            });
            button.removeEventListener('mouseleave', () => {
                button.style.backgroundColor = '#d3d3d3';
            });
        });
    }
});

window.addEventListener('load', function() {
    document.querySelector('.main-header img').style.opacity = 1;
});
