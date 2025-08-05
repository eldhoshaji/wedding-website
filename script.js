// Countdown Timer
function updateCountdown() {
    const weddingDate = new Date('August 30, 2025 11:00:00').getTime();
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Check if countdown elements exist before updating
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    
    if (daysElement) daysElement.textContent = days.toString().padStart(2, '0');
    if (hoursElement) hoursElement.textContent = hours.toString().padStart(2, '0');
    if (minutesElement) minutesElement.textContent = minutes.toString().padStart(2, '0');
    if (secondsElement) secondsElement.textContent = seconds.toString().padStart(2, '0');
    
    // Update hero countdown
    const heroDays = document.getElementById('hero-days');
    const heroHours = document.getElementById('hero-hours');
    const heroMinutes = document.getElementById('hero-minutes');
    const heroSeconds = document.getElementById('hero-seconds');
    
    if (heroDays) heroDays.textContent = days.toString().padStart(2, '0');
    if (heroHours) heroHours.textContent = hours.toString().padStart(2, '0');
    if (heroMinutes) heroMinutes.textContent = minutes.toString().padStart(2, '0');
    if (heroSeconds) heroSeconds.textContent = seconds.toString().padStart(2, '0');

    if (distance < 0) {
        if (daysElement) daysElement.textContent = '00';
        if (hoursElement) hoursElement.textContent = '00';
        if (minutesElement) minutesElement.textContent = '00';
        if (secondsElement) secondsElement.textContent = '00';
        
        if (heroDays) heroDays.textContent = '00';
        if (heroHours) heroHours.textContent = '00';
        if (heroMinutes) heroMinutes.textContent = '00';
        if (heroSeconds) heroSeconds.textContent = '00';
    }
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call

// Smooth scrolling for navigation links
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

// Navbar scroll effect - DISABLED
/*
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});
*/

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (hamburger && navMenu) {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
});

// Intersection Observer for animations
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

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.countdown-item, .gallery-item, .detail-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add some interactive effects
document.addEventListener('DOMContentLoaded', () => {
    // Add click effect to countdown items
    const countdownItems = document.querySelectorAll('.countdown-item');
    countdownItems.forEach(item => {
        item.addEventListener('click', () => {
            item.style.transform = 'scale(0.95)';
            setTimeout(() => {
                item.style.transform = 'translateY(-5px)';
            }, 150);
        });
    });

    // Add parallax effect to floating hearts
    window.addEventListener('mousemove', (e) => {
        const hearts = document.querySelectorAll('.floating-hearts i');
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        hearts.forEach((heart, index) => {
            const speed = (index + 1) * 0.5;
            const x = (mouseX - 0.5) * speed;
            const y = (mouseY - 0.5) * speed;
            heart.style.transform = `translate(${x}px, ${y}px)`;
        });
    });

    // Timeline rotation for mobile
    const timelineItems = document.querySelectorAll('.timeline-item');
    let currentIndex = 0;
    let rotationInterval;

    function rotateTimeline() {
        // Remove active class from all items first
        timelineItems.forEach(item => {
            item.classList.remove('active');
        });

        // Add active class to current item
        if (timelineItems[currentIndex]) {
            timelineItems[currentIndex].classList.add('active');
        }

        // Move to next item
        currentIndex = (currentIndex + 1) % timelineItems.length;
    }

    // Start rotation only on mobile devices
    function startTimelineRotation() {
        if (window.innerWidth <= 768 && timelineItems.length > 0) {
            // Clear any existing intervals
            if (rotationInterval) {
                clearInterval(rotationInterval);
            }
            
            // Reset all items to hidden state
            timelineItems.forEach(item => {
                item.classList.remove('active');
            });
            
            // Set initial active item
            timelineItems[0].classList.add('active');
            
            // Start rotation every 3 seconds
            rotationInterval = setInterval(rotateTimeline, 3000);
        }
    }

    // Stop rotation on desktop
    function stopTimelineRotation() {
        if (rotationInterval) {
            clearInterval(rotationInterval);
            rotationInterval = null;
        }
        
        // Reset all items to visible state for desktop
        if (window.innerWidth > 768) {
            timelineItems.forEach(item => {
                item.classList.remove('active');
                item.style.position = 'static';
                item.style.opacity = '1';
                item.style.transform = 'none';
            });
        }
    }

    // Handle window resize
    window.addEventListener('resize', () => {
        stopTimelineRotation();
        if (window.innerWidth <= 768) {
            startTimelineRotation();
        }
    });

    // Initialize rotation
    startTimelineRotation();
}); 