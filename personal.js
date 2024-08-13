// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add an effect to the name when hovering
const nameElement = document.querySelector('h1.name');
nameElement.addEventListener('mouseenter', () => {
    nameElement.style.transform = 'scale(1.1)';
    nameElement.style.transition = 'transform 0.3s ease';
});

nameElement.addEventListener('mouseleave', () => {
    nameElement.style.transform = 'scale(1)';
});

// Toggle dropdowns
document.querySelectorAll('.contact-dropdown').forEach(dropdown => {
    dropdown.addEventListener('click', () => {
        const content = dropdown.querySelector('.contact-dropdown-content');
        const isVisible = content.style.display === 'block';
        content.style.display = isVisible ? 'none' : 'block';
    });
});

// Close dropdown when clicking outside
window.addEventListener('click', function(e) {
    if (!e.target.matches('.contact-dropdown')) {
        document.querySelectorAll('.contact-dropdown-content').forEach(content => {
            if (content.style.display === 'block') {
                content.style.display = 'none';
            }
        });
    }
});

// Light up social icons on hover
document.querySelectorAll('.social-icons a').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.color = 'yellow';
    });

    icon.addEventListener('mouseleave', () => {
        icon.style.color = '';
    });
});
