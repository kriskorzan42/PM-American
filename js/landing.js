// Modern landing page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Animate illustration elements
    const illustrationElements = document.querySelectorAll('.illustration-element');
    
    illustrationElements.forEach((element, index) => {
        // Add subtle animation
        element.style.animation = `float ${2 + index * 0.5}s ease-in-out infinite alternate`;
    });
    
    // Add hover effects to preview images
    const previewImages = document.querySelectorAll('.preview-image');
    
    previewImages.forEach(image => {
        image.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.15)';
        });
        
        image.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '';
        });
    });
    
    // Animate feature cards on scroll
    const featureCards = document.querySelectorAll('.feature-card');
    
    const animateOnScroll = function() {
        featureCards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (cardPosition < screenPosition) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for feature cards
    featureCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease-out';
    });
    
    // Add scroll event listener
    window.addEventListener('scroll', animateOnScroll);
    
    // Run once on page load
    animateOnScroll();
    
    // Add CSS for floating animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0% { transform: translateY(0) rotate(-10deg); }
            100% { transform: translateY(-10px) rotate(-8deg); }
        }
        
        .illustration-element.certificate {
            animation: float 3s ease-in-out infinite alternate;
        }
        
        .illustration-element.flag {
            animation: float 4s ease-in-out infinite alternate;
        }
        
        .illustration-element.chart {
            animation: float 3.5s ease-in-out infinite alternate;
        }
    `;
    document.head.appendChild(style);
}); 