// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 RavenOfGod Profile loaded successfully!');
    console.log('🔍 Security Researcher & Exploit Developer');

    // Initialize typing animation
    initTypingAnimation();
    
    // Initialize visitor counter
    initVisitorCounter();
    
    // Initialize interactive effects
    initInteractiveEffects();
    
    // Initialize particle effects
    initParticleEffects();
    
    // Initialize keyboard shortcuts
    initKeyboardShortcuts();
    
    // Initialize Konami Code
    initKonamiCode();
});

// Typing Animation
function initTypingAnimation() {
    const typingWords = document.querySelector('.typing-words');
    const words = ['Exploit Developer', 'Web Security Researcher', 'Payload Engineer', ''];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            typingWords.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingWords.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = 100;
        
        if (isDeleting) {
            typeSpeed /= 2;
        }
        
        if (!isDeleting && charIndex === currentWord.length) {
            typeSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 500; // Pause before typing next word
        }
        
        setTimeout(type, typeSpeed);
    }
    
    setTimeout(type, 1000);
}

// Visitor Counter
function initVisitorCounter() {
    const visitorCount = document.getElementById('visitor-count');
    let count = localStorage.getItem('visitorCount') || 0;
    count = parseInt(count) + 1;
    localStorage.setItem('visitorCount', count);
    
    // Animate counter
    let currentCount = 0;
    const targetCount = count;
    const duration = 2000;
    const increment = targetCount / (duration / 16);
    
    function updateCounter() {
        currentCount += increment;
        if (currentCount < targetCount) {
            visitorCount.textContent = Math.floor(currentCount);
            requestAnimationFrame(updateCounter);
        } else {
            visitorCount.textContent = targetCount;
        }
    }
    
    updateCounter();
}

// Interactive Effects
function initInteractiveEffects() {
    // Skill items hover effects
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.1)';
            this.style.boxShadow = '0 20px 40px rgba(99, 102, 241, 0.4)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = 'none';
        });
    });
    
    // Specialty cards hover effects
    const specialtyCards = document.querySelectorAll('.specialty-card');
    specialtyCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 25px 50px rgba(99, 102, 241, 0.4)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = 'none';
        });
    });
    
    // Contact cards hover effects
    const contactCards = document.querySelectorAll('.contact-card');
    contactCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.05)';
            this.style.boxShadow = '0 20px 40px rgba(99, 102, 241, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = 'none';
        });
    });
    
    // OS items hover effects
    const osItems = document.querySelectorAll('.os-item');
    osItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-6px) scale(1.05)';
            this.style.boxShadow = '0 15px 30px rgba(99, 102, 241, 0.3)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = 'none';
        });
    });
}

// Particle Effects
function initParticleEffects() {
    // Create particle effect on click
    document.addEventListener('click', function(e) {
        createParticleEffect(e.clientX, e.clientY);
    });
    
    // Create particle effect on avatar click
    const avatar = document.querySelector('.avatar-container');
    if (avatar) {
        avatar.addEventListener('click', function(e) {
            e.stopPropagation();
            createParticleEffect(e.clientX, e.clientY, 20);
        });
    }
}

function createParticleEffect(x, y, count = 10) {
    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.width = '4px';
        particle.style.height = '4px';
        particle.style.background = '#6366f1';
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '9999';
        particle.style.transition = 'all 0.6s ease-out';
        
        document.body.appendChild(particle);
        
        const angle = (Math.PI * 2 * i) / count;
        const velocity = 50 + Math.random() * 50;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        setTimeout(() => {
            particle.style.transform = `translate(${vx}px, ${vy}px)`;
            particle.style.opacity = '0';
        }, 10);
        
        setTimeout(() => {
            document.body.removeChild(particle);
        }, 600);
    }
}

// Keyboard Shortcuts
function initKeyboardShortcuts() {
    document.addEventListener('keydown', function(e) {
        // Ctrl/Cmd + K to focus search (if we had one)
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            console.log('🔍 Search shortcut triggered');
        }
        
        // Escape to clear any selections
        if (e.key === 'Escape') {
            document.querySelectorAll('.skill-item').forEach(item => {
                item.style.transform = 'translateY(0) scale(1)';
                item.style.boxShadow = 'none';
            });
        }
    });
}

// Konami Code Easter Egg
function initKonamiCode() {
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
    let konamiIndex = 0;
    
    document.addEventListener('keydown', function(e) {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            
            if (konamiIndex === konamiCode.length) {
                // Konami code completed!
                console.log('🎮 Konami Code activated!');
                activateKonamiEasterEgg();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });
}

function activateKonamiEasterEgg() {
    // Create a matrix rain effect
    const matrixRain = document.createElement('div');
    matrixRain.style.position = 'fixed';
    matrixRain.style.top = '0';
    matrixRain.style.left = '0';
    matrixRain.style.width = '100%';
    matrixRain.style.height = '100%';
    matrixRain.style.background = 'rgba(0, 0, 0, 0.8)';
    matrixRain.style.zIndex = '10000';
    matrixRain.style.pointerEvents = 'none';
    matrixRain.style.fontFamily = 'monospace';
    matrixRain.style.fontSize = '20px';
    matrixRain.style.color = '#6366f1';
    matrixRain.style.overflow = 'hidden';
    
    document.body.appendChild(matrixRain);
    
    // Create matrix characters
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const columns = Math.floor(window.innerWidth / 20);
    const drops = new Array(columns).fill(0);
    
    function drawMatrix() {
        let output = '';
        for (let i = 0; i < drops.length; i++) {
            const char = chars[Math.floor(Math.random() * chars.length)];
            output += char;
            drops[i]++;
            
            if (drops[i] * 20 > window.innerHeight && Math.random() > 0.975) {
                drops[i] = 0;
            }
        }
        matrixRain.textContent = output;
    }
    
    const matrixInterval = setInterval(drawMatrix, 50);
    
    // Remove matrix rain after 5 seconds
    setTimeout(() => {
        clearInterval(matrixInterval);
        document.body.removeChild(matrixRain);
    }, 5000);
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for scroll animations
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(section);
});

// Add touch effects for mobile
if ('ontouchstart' in window) {
    document.querySelectorAll('.skill-item, .specialty-card, .contact-card, .os-item').forEach(item => {
        item.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.95)';
        });
        
        item.addEventListener('touchend', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

// Performance optimization: Throttle scroll events
let ticking = false;
function updateOnScroll() {
    // Add any scroll-based animations here
    ticking = false;
}

window.addEventListener('scroll', function() {
    if (!ticking) {
        requestAnimationFrame(updateOnScroll);
        ticking = true;
    }
});

// Add console welcome message
console.log(`
%c🔍 Welcome to RavenOfGod's Profile!
%c
%cExploit Developer | Web Security Researcher | Payload Engineer
%c
%cType 'help' for available commands
`, 
'color: #6366f1; font-size: 20px; font-weight: bold;',
'',
'color: #8b5cf6; font-size: 14px;',
'',
'color: #ccc; font-size: 12px;'
);

// Add console commands
window.help = function() {
    console.log(`
Available commands:
- help() - Show this help
- about() - About RavenOfGod
- skills() - Show skills
- contact() - Show contact info
- matrix() - Activate matrix effect
    `);
};

window.about = function() {
    console.log(`
About RavenOfGod:
- Independent exploit developer
- Web security researcher
- OSINT engineer

- 4+ years in cybersecurity
    `);
};

window.skills = function() {
    console.log(`
Skills:
- Advanced Web Exploitation
- Payload Design & Fuzzing
- Python/Bash Tool Development
- AV/WAF Bypassing
- OSINT Automation
- Dark Web Crawling
    `);
};

window.contact = function() {
    console.log(`
Contact:
- Telegram: t.me/ravenofgod
- Website: ravenofgod.org
- GitHub: github.com/ravenofgod
    `);
};

window.matrix = function() {
    activateKonamiEasterEgg();
}; 