document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('nav a');
    
    for (let link of navLinks) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Smooth scroll for Learn More button
    const learnMoreButton = document.querySelector('.hero .btn');
    learnMoreButton.addEventListener('click', function(e) {
        e.preventDefault();
        const targetSection = document.getElementById('benefits');
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });

    // Form submission
    const form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Placeholder for form submission logic
        alert('Form submitted successfully!');
    });

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
        });
        button.addEventListener('mouseleave', () => {
            button.style.backgroundColor = '#d3d3d3';
        });
    });

    // Hover effect for service boxes and pricing boxes
    const serviceBoxes = document.querySelectorAll('.service-box, .pricing-box');
    serviceBoxes.forEach(box => {
        box.addEventListener('mouseenter', () => {
            box.style.transform = 'scale(1.05)';
        });
        box.addEventListener('mouseleave', () => {
            box.style.transform = 'scale(1)';
        });
    });

    // Hover effect for benefit-box images
    const benefitBoxImages = document.querySelectorAll('.benefit-box img');
    benefitBoxImages.forEach(img => {
        img.addEventListener('mouseenter', () => {
            img.style.transform = 'scale(1.1)';
        });
        img.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1)';
        });
    });

    // Navigation button hover effect
    const navButtons = document.querySelectorAll('nav ul li a');
    navButtons.forEach(button => {
        button.style.color = '#000';
        button.addEventListener('mouseenter', () => {
            button.style.backgroundColor = '#ff7f50';
            button.style.color = '#fff';
        });
        button.addEventListener('mouseleave', () => {
            button.style.backgroundColor = 'transparent';
            button.style.color = '#000';
        });
    });

    // Fade in effect for the title
    const title = document.querySelector('.main-header h1');
    title.style.opacity = 0;
    title.style.transform = 'translateX(-100%)';
    setTimeout(() => {
        title.style.transition = 'opacity 2s ease-out, transform 2s ease-out';
        title.style.opacity = 1;
        title.style.transform = 'translateX(0)';
    }, 100);

    // Fade in effect for other sections
    const fadeInElements = document.querySelectorAll('.services, .pricing, .contact, .main-footer, .benefits, .benefit-box');
    fadeInElements.forEach(element => {
        element.style.opacity = 0;
        window.addEventListener('scroll', () => {
            if (element.getBoundingClientRect().top < window.innerHeight) {
                element.style.transition = 'opacity 1s ease-out';
                element.style.opacity = 1;
            }
        });
    });
});
