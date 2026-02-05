// Generate floating hearts in the background
function createFloatingHeart() {
    const heartsContainer = document.querySelector('.hearts-background');
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    heart.textContent = ['❤️', '💕', '💖', '💗', '💓', '💝'][Math.floor(Math.random() * 6)];
    
    // Random position from left
    heart.style.left = Math.random() * 100 + '%';
    
    // Random animation duration
    const duration = 4 + Math.random() * 4;
    heart.style.animationDuration = duration + 's';
    
    // Random delay
    heart.style.animationDelay = Math.random() * 2 + 's';
    
    heartsContainer.appendChild(heart);
    
    // Remove heart after animation completes
    setTimeout(() => {
        heart.remove();
    }, (duration + 2) * 1000);
}

// Create hearts periodically
setInterval(createFloatingHeart, 500);

// Initial hearts
for (let i = 0; i < 10; i++) {
    setTimeout(createFloatingHeart, i * 300);
}

// Surprise button functionality
const surpriseBtn = document.getElementById('surpriseBtn');
const loveNote = document.getElementById('loveNote');
let noteVisible = false;

surpriseBtn.addEventListener('click', function() {
    noteVisible = !noteVisible;
    
    if (noteVisible) {
        loveNote.classList.add('show');
        surpriseBtn.textContent = 'Hide Surprise';
        
        // Create burst of hearts
        for (let i = 0; i < 20; i++) {
            setTimeout(createFloatingHeart, i * 50);
        }
    } else {
        loveNote.classList.remove('show');
        surpriseBtn.textContent = 'Click for a Surprise!';
    }
    
    // Add pulse effect to button
    surpriseBtn.classList.add('pulse');
    setTimeout(() => {
        surpriseBtn.classList.remove('pulse');
    }, 500);
});

// Big heart interaction
const bigHeart = document.querySelector('.big-heart');
bigHeart.addEventListener('click', function() {
    // Create multiple hearts around the clicked heart
    for (let i = 0; i < 10; i++) {
        setTimeout(createFloatingHeart, i * 100);
    }
    
    // Add pulse animation
    this.classList.add('pulse');
    setTimeout(() => {
        this.classList.remove('pulse');
    }, 500);
});

// Add sparkle effect on mouse move
document.addEventListener('mousemove', function(e) {
    // Randomly create hearts near cursor
    if (Math.random() < 0.03) {
        const sparkle = document.createElement('div');
        sparkle.textContent = '✨';
        sparkle.style.position = 'fixed';
        sparkle.style.left = e.clientX + 'px';
        sparkle.style.top = e.clientY + 'px';
        sparkle.style.fontSize = '20px';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '9999';
        sparkle.style.animation = 'fadeOut 1s ease-out forwards';
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.remove();
        }, 1000);
    }
});

// Add fadeOut animation for sparkles
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(-30px);
        }
    }
`;
document.head.appendChild(style);

console.log('💝 Happy Valentine\'s Day! 💝');
