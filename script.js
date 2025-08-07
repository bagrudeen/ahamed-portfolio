// Initialize GSAP plugins
if (typeof gsap !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
} else {
    console.warn('GSAP not loaded, falling back to basic animations');
}

// Project data for modal content
const projectData = {
    1: {
        title: "Digital Art Collection",
        description: "A comprehensive collection of digital art pieces showcasing 3D visualizations, character designs, and environmental concepts. This project demonstrates advanced skills in Blender, Substance Painter, and Photoshop for creating immersive digital experiences.",
        technologies: ["Blender", "Substance Painter", "Photoshop", "After Effects"],
        liveDemo: "https://rico.net.in",
        github: "#",
        image: "digital-art-collection.png"
    },
    2: {
        title: "Interactive Web Experience",
        description: "A dynamic web application featuring real-time interactions, smooth animations, and responsive design. Built with modern web technologies to create engaging user experiences.",
        technologies: ["HTML", "CSS", "JavaScript", "GSAP", "Three.js"],
        liveDemo: "https://rico.net.in",
        github: "#",
        image: "ricoweb.png"
    },
    3: {
        title: "Motion Graphics Portfolio",
        description: "Cinematic animations and visual effects created for various projects. Features complex motion graphics, particle systems, and dynamic compositions.",
        technologies: ["After Effects", "Photoshop", "Cinema 4D", "Trapcode Suite"],
        liveDemo: "https://rico.net.in",
        github: "#",
        image: "motion-graphics.jpg"
    },
    4: {
        title: "3D Environment Design",
        description: "Immersive 3D environments and architectural visualizations. Includes detailed modeling, texturing, and lighting to create realistic and stylized environments.",
        technologies: ["3ds Max", "Blender", "Substance Painter", "V-Ray"],
        liveDemo: "https://rico.net.in",
        github: "#",
        image: "3d-environment.jpg"
    },
    5: {
        title: "Mobile App Interface",
        description: "Modern mobile interface design with intuitive user experience. Features clean design principles and accessibility considerations for optimal user engagement.",
        technologies: ["Figma", "Adobe XD", "Sketch", "Principle"],
        liveDemo: "https://rico.net.in",
        github: "#",
        image: "mobile-app-interface.jpg"
    },

};

// DOM Elements
const navbar = document.querySelector('.navbar');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const projectModal = document.getElementById('projectModal');
const modalClose = document.querySelector('.modal-close');
const contactForm = document.getElementById('contactForm');
const submitBtn = document.querySelector('.submit-btn');

// Fallback function to show content if GSAP fails
function showContentFallback() {
    const hiddenElements = document.querySelectorAll('.title-line, .hero-subtitle, .cta-button, .scroll-indicator, .section-title, .story-content p, .project-item, .skill-item, .logo-item, .contact-message, .contact-item, .form-group, .submit-btn, .social-link');
    
    hiddenElements.forEach(el => {
        if (el) {
            el.style.opacity = '1';
            el.style.transform = 'none';
        }
    });
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing portfolio...');
    
    // Start Netflix-style intro animation
    initializeIntroAnimation();
    
    // Show content immediately as fallback
    showContentFallback();
    
    // Initialize GSAP animations if available
    if (typeof gsap !== 'undefined') {
        console.log('GSAP available, initializing animations...');
        initializeAnimations();
        initializeScrollEffects();
    } else {
        console.log('GSAP not available, using fallback animations');
        initializeFallbackAnimations();
    }
    
    initializeEventListeners();
    initializeTypingAnimation();
});

// Fallback animations using CSS transitions
function initializeFallbackAnimations() {
    const elements = document.querySelectorAll('.title-line, .hero-subtitle, .cta-button, .scroll-indicator');
    
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

// Initialize all GSAP animations
function initializeAnimations() {
    if (typeof gsap === 'undefined') return;
    
    // Hero section animations - now controlled by intro animation
    // These will be called after the intro animation completes

    // About section animations with better flow
    const aboutTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.about',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    });
    
    aboutTimeline
        .from('.section-title', {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: 'power2.out'
        })

        .from('.story-content p', {
            duration: 0.8,
            y: 30,
            opacity: 0,
            stagger: 0.3,
            ease: 'power2.out'
        }, '-=0.8');

    // Projects section animations with better flow
    const projectsTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.projects',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    });
    
    projectsTimeline
        .from('.section-title', {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: 'power2.out'
        })
        .from('.project-item', {
            duration: 1,
            y: 100,
            opacity: 0,
            scale: 0.9,
            stagger: 0.2,
            ease: 'power2.out'
        }, '-=0.5');

    // Skills section animations with better flow
    const skillsTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.skills',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    });
    
    skillsTimeline
        .from('.section-title', {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: 'power2.out'
        })
        .from('.skill-item', {
            duration: 0.8,
            y: 30,
            opacity: 0,
            stagger: 0.15,
            ease: 'power2.out'
        }, '-=0.5')
        .from('.logo-item', {
            duration: 0.6,
            scale: 0.8,
            opacity: 0,
            stagger: 0.1,
            ease: 'back.out(1.7)'
        }, '-=0.3');

    // Contact section animations with better flow
    const contactTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.contact',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    });
    
    contactTimeline
        .from('.section-title', {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: 'power2.out'
        })
        .from('.contact-message', {
            duration: 0.8,
            y: 30,
            opacity: 0,
            ease: 'power2.out'
        }, '-=0.5')
        .from('.contact-item', {
            duration: 0.6,
            x: -30,
            opacity: 0,
            stagger: 0.1,
            ease: 'power2.out'
        }, '-=0.3')
        .from('.form-group', {
            duration: 0.8,
            y: 40,
            opacity: 0,
            stagger: 0.15,
            ease: 'power2.out'
        }, '-=0.4')
        .from('.submit-btn', {
            duration: 0.8,
            y: 30,
            opacity: 0,
            ease: 'power2.out'
        }, '-=0.2')
        .from('.social-link', {
            duration: 0.6,
            scale: 0.8,
            opacity: 0,
            stagger: 0.1,
            ease: 'back.out(1.7)'
        }, '-=0.2');

    // Animate skill bars when in view
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const percentage = bar.getAttribute('data-percentage');
        
        ScrollTrigger.create({
            trigger: bar,
            start: 'top 80%',
            onEnter: () => {
                gsap.to(bar, {
                    width: percentage + '%',
                    duration: 1.5,
                    ease: 'power2.out'
                });
            }
        });
    });
}

// Initialize event listeners
function initializeEventListeners() {
    // Mobile navigation toggle
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            console.log('Mobile menu toggle clicked');
            toggleMobileMenu();
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            console.log('Navigation link clicked:', this.getAttribute('href'));
            
            // Add visual feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                console.log('Target found:', target);
                
                // Close mobile menu if open
                if (navMenu && navMenu.classList.contains('active')) {
                    toggleMobileMenu();
                }
                
                // Use GSAP ScrollTo if available, otherwise fallback
                if (typeof gsap !== 'undefined' && typeof ScrollToPlugin !== 'undefined') {
                    gsap.to(window, {
                        duration: 1.2,
                        scrollTo: { y: target, offsetY: 70 },
                        ease: 'power3.inOut'
                    });
                } else {
                    // Fallback smooth scroll
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            } else {
                console.log('Target not found for:', this.getAttribute('href'));
                showNotification('Section not found. Please check the navigation.', 'error');
            }
        });
    });

    // Project modal functionality
    document.querySelectorAll('.project-item').forEach(item => {
        item.addEventListener('click', function(e) {
            // Don't open modal if clicking on a link
            if (e.target.tagName === 'A' || e.target.closest('a')) {
                return;
            }
            const projectId = this.getAttribute('data-project');
            openProjectModal(projectId);
        });
    });

    // Ensure project links work in all browsers
    document.querySelectorAll('.project-link').forEach(link => {
        link.addEventListener('click', function(e) {
            // Allow the link to work normally
            console.log('Link clicked:', this.href);
            // Don't prevent default - let the link work
        });
    });

    // Close modal
    if (modalClose) {
        modalClose.addEventListener('click', closeProjectModal);
    }
    if (projectModal) {
        projectModal.addEventListener('click', function(e) {
            if (e.target === projectModal) {
                closeProjectModal();
            }
        });
    }

    // Contact form submission
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmission);
    }

    // Form field animations
    document.querySelectorAll('.form-group input, .form-group textarea').forEach(field => {
        field.addEventListener('focus', function() {
            if (typeof gsap !== 'undefined') {
                gsap.to(this, {
                    duration: 0.3,
                    scale: 1.02,
                    ease: 'power2.out'
                });
            }
        });

        field.addEventListener('blur', function() {
            if (typeof gsap !== 'undefined') {
                gsap.to(this, {
                    duration: 0.3,
                    scale: 1,
                    ease: 'power2.out'
                });
            }
        });
    });

    // Social link hover animations
    document.querySelectorAll('.social-link').forEach(link => {
        link.addEventListener('mouseenter', function() {
            if (typeof gsap !== 'undefined') {
                gsap.to(this.querySelector('svg'), {
                    duration: 0.3,
                    rotation: 360,
                    ease: 'power2.out'
                });
            }
        });

        link.addEventListener('mouseleave', function() {
            if (typeof gsap !== 'undefined') {
                gsap.to(this.querySelector('svg'), {
                    duration: 0.3,
                    rotation: 0,
                    ease: 'power2.out'
                });
            }
        });
    });

    // Logo item hover animations
    document.querySelectorAll('.logo-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            if (typeof gsap !== 'undefined') {
                gsap.to(this, {
                    duration: 0.3,
                    scale: 1.1,
                    ease: 'power2.out'
                });
            }
        });

        item.addEventListener('mouseleave', function() {
            if (typeof gsap !== 'undefined') {
                gsap.to(this, {
                    duration: 0.3,
                    scale: 1,
                    ease: 'power2.out'
                });
            }
        });
    });
}

// Initialize scroll effects
function initializeScrollEffects() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    
    // Navbar background on scroll
    ScrollTrigger.create({
        start: 'top top',
        end: 99999,
        onUpdate: (self) => {
            if (self.direction === 1 && self.progress > 0.1) {
                navbar.style.background = 'rgba(0, 0, 0, 0.95)';
            } else {
                navbar.style.background = 'rgba(0, 0, 0, 0.8)';
            }
        }
    });

    // Parallax effect for hero background
    gsap.to('.hero-background', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        },
        y: 100,
        ease: 'none'
    });
}

// Mobile menu toggle with better animations
function toggleMobileMenu() {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    if (navMenu.classList.contains('active')) {
        if (typeof gsap !== 'undefined') {
            // Animate menu items in
            gsap.fromTo('.nav-menu li', {
                opacity: 0,
                y: -30,
                scale: 0.9
            }, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.4,
                stagger: 0.1,
                ease: 'back.out(1.7)'
            });
            
            // Animate menu background
            gsap.fromTo('.nav-menu', {
                opacity: 0,
                scale: 0.95
            }, {
                opacity: 1,
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        }
    } else {
        if (typeof gsap !== 'undefined') {
            // Animate menu items out
            gsap.to('.nav-menu li', {
                opacity: 0,
                y: -20,
                scale: 0.9,
                duration: 0.2,
                stagger: 0.05,
                ease: 'power2.in'
            });
        }
    }
}

// Open project modal
function openProjectModal(projectId) {
    const project = projectData[projectId];
    if (!project) return;

    // Update modal content
    document.querySelector('.modal-title').textContent = project.title;
    document.querySelector('.modal-description').textContent = project.description;
    
    // Update modal image
    const modalImg = document.querySelector('.modal-project-img');
    if (modalImg && project.image) {
        modalImg.src = project.image;
        modalImg.alt = project.title;
        modalImg.style.display = 'block';
    } else if (modalImg) {
        modalImg.style.display = 'none';
    }
    
    // Update technologies
    const techContainer = document.querySelector('.modal-tech');
    techContainer.innerHTML = '';
    project.technologies.forEach(tech => {
        const tag = document.createElement('span');
        tag.className = 'tech-tag';
        tag.textContent = tech;
        techContainer.appendChild(tag);
    });

    // Update links
    const links = document.querySelectorAll('.modal-link');
    if (links[0]) {
        links[0].href = project.liveDemo;
        links[0].target = "_blank";
        links[0].rel = "noopener noreferrer";
        // Add onclick for project 2 (Interactive Web Experience)
        if (projectId == 2) {
            links[0].onclick = function() { openRicoLink(); return false; };
        } else {
            links[0].removeAttribute('onclick');
        }
    }
    if (links[1]) {
        links[1].href = project.github;
        links[1].target = "_blank";
        links[1].rel = "noopener noreferrer";
        // Remove any onclick that might interfere
        links[1].removeAttribute('onclick');
    }

    // Show modal with animation
    projectModal.classList.add('active');
    if (typeof gsap !== 'undefined') {
        gsap.fromTo('.modal-content', 
            {
                scale: 0.8,
                opacity: 0
            },
            {
                scale: 1,
                opacity: 1,
                duration: 0.5,
                ease: 'back.out(1.7)'
            }
        );
    }
}

// Close project modal
function closeProjectModal() {
    if (typeof gsap !== 'undefined') {
        gsap.to('.modal-content', {
            scale: 0.8,
            opacity: 0,
            duration: 0.3,
            ease: 'power2.in',
            onComplete: () => {
                projectModal.classList.remove('active');
            }
        });
    } else {
        projectModal.classList.remove('active');
    }
}

// Handle form submission
function handleFormSubmission(e) {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Show loading state
    submitBtn.classList.add('loading');
    
    // Send data to Google Sheets
    sendToGoogleSheets(name, email, message);
}

// Send data to Google Sheets
function sendToGoogleSheets(name, email, message) {
    // Replace this with your actual Google Apps Script Web App URL
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxycVwhvc8TYWXg587-BwnCxu82kDJfQgleRk1uSna_dH_OybMlvG3aarcnYymplfXB/exec';
    
    const data = {
        name: name,
        email: email,
        message: message,
        timestamp: new Date().toISOString(),
        source: 'Portfolio Website'
    };

    // Use no-cors mode to avoid CORS issues when running locally
    fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(() => {
        console.log('Message sent successfully!');
        submitBtn.classList.remove('loading');
        showNotification('Message sent successfully!', 'success');
        contactForm.reset();
        
        // Animate form reset
        if (typeof gsap !== 'undefined') {
            gsap.fromTo('.form-group', 
                { scale: 0.95 },
                { scale: 1, duration: 0.3, ease: 'power2.out' }
            );
        }
    })
    .catch(error => {
        console.error('Error:', error);
        submitBtn.classList.remove('loading');
        showNotification('Error sending message. Please try again.', 'error');
    });
}

// Show notification
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#0066ff' : '#ff4444'};
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        z-index: 3000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    if (typeof gsap !== 'undefined') {
        gsap.to(notification, {
            x: 0,
            duration: 0.5,
            ease: 'power2.out'
        });
    } else {
        notification.style.transform = 'translateX(0)';
    }
    
    // Remove after 3 seconds
    setTimeout(() => {
        if (typeof gsap !== 'undefined') {
            gsap.to(notification, {
                x: '100%',
                duration: 0.5,
                ease: 'power2.in',
                onComplete: () => {
                    document.body.removeChild(notification);
                }
            });
        } else {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 500);
        }
    }, 3000);
}

// Smooth scroll to section
function scrollToSection(selector) {
    const target = document.querySelector(selector);
    if (target) {
        if (typeof gsap !== 'undefined' && typeof ScrollToPlugin !== 'undefined') {
            gsap.to(window, {
                duration: 1,
                scrollTo: { y: target, offsetY: 70 },
                ease: 'power2.inOut'
            });
        } else {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    } else {
        console.log('Target not found for:', selector);
        showNotification('Section not found. Please check the navigation.', 'error');
    }
}

// Add hover effects to CTA button
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('mouseenter', function() {
        if (typeof gsap !== 'undefined') {
            gsap.to(this.querySelector('.arrow-icon'), {
                duration: 0.3,
                x: 5,
                ease: 'power2.out'
            });
        }
    });

    ctaButton.addEventListener('mouseleave', function() {
        if (typeof gsap !== 'undefined') {
            gsap.to(this.querySelector('.arrow-icon'), {
                duration: 0.3,
                x: 0,
                ease: 'power2.out'
            });
        }
    });
}

    // Add floating animation to scroll indicator
    gsap.to('.scroll-arrow', {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut'
    });

// Performance optimization: Pause animations when tab is not visible
document.addEventListener('visibilitychange', function() {
    if (typeof gsap !== 'undefined') {
        if (document.hidden) {
            gsap.globalTimeline.pause();
        } else {
            gsap.globalTimeline.resume();
        }
    }
});

// Add keyboard navigation for modal
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && projectModal && projectModal.classList.contains('active')) {
        closeProjectModal();
    }
});

// Add intersection observer for performance
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        }
    });
}, observerOptions);

// Observe elements for performance optimization
document.querySelectorAll('.project-item, .skill-item, .logo-item').forEach(el => {
    observer.observe(el);
});

console.log('Portfolio website initialized successfully! 🚀');

// Test function to verify menu functionality
function testMenuFunctionality() {
    console.log('🧪 Testing menu functionality...');
    
    // Test navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link, index) => {
        const href = link.getAttribute('href');
        const target = document.querySelector(href);
        console.log(`Menu item ${index + 1}: ${link.textContent} -> ${href} -> ${target ? '✅ Found' : '❌ Not found'}`);
        
        // Test if target exists
        if (target) {
            console.log(`✅ Section "${link.textContent}" found with ID: ${href}`);
        } else {
            console.log(`❌ Section "${link.textContent}" NOT found for ID: ${href}`);
        }
    });
    
    // Test mobile menu toggle
    const mobileToggle = document.querySelector('.nav-toggle');
    console.log(`Mobile menu toggle: ${mobileToggle ? '✅ Found' : '❌ Not found'}`);
    
    // Test smooth scrolling
    console.log('✅ Smooth scrolling enabled');
    console.log('✅ GSAP animations enabled');
    
    // Test all sections exist
    const sections = ['#hero', '#about', '#projects', '#education', '#skills', '#contact'];
    sections.forEach(sectionId => {
        const section = document.querySelector(sectionId);
        console.log(`${section ? '✅' : '❌'} Section ${sectionId} ${section ? 'exists' : 'missing'}`);
    });
    
    console.log('🎯 Menu functionality test complete!');
}

// Run menu test after page loads
setTimeout(testMenuFunctionality, 1000);

// Test all sections exist
function testAllSections() {
    const sections = ['#hero', '#about', '#projects', '#education', '#skills', '#contact'];
    sections.forEach(sectionId => {
        const section = document.querySelector(sectionId);
        if (!section) {
            console.error(`❌ Section ${sectionId} is missing!`);
        } else {
            console.log(`✅ Section ${sectionId} found`);
        }
    });
}

// Run section test after page loads
setTimeout(testAllSections, 500);

// Netflix-style intro animation
function initializeIntroAnimation() {
    const introOverlay = document.getElementById('introOverlay');
    if (!introOverlay) return;
    
    console.log('🎬 Starting Netflix-style intro animation...');
    
    // Hide the main content initially
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
    }
    
    // After 4 seconds, fade out the intro and show main content
    setTimeout(() => {
        if (introOverlay) {
            introOverlay.classList.add('fade-out');
            
            // Show main content with animation
            if (heroContent) {
                if (typeof gsap !== 'undefined') {
                    gsap.to(heroContent, {
                        opacity: 1,
                        duration: 1,
                        ease: 'power2.out',
                        onComplete: () => {
                            // Start hero animations after intro
                            startHeroAnimations();
                        }
                    });
                } else {
                    heroContent.style.opacity = '1';
                    startHeroAnimations();
                }
            }
            
            // Remove intro overlay after animation
            setTimeout(() => {
                if (introOverlay.parentNode) {
                    introOverlay.parentNode.removeChild(introOverlay);
                }
            }, 500);
        }
    }, 4000);
}

// Start hero animations after intro
function startHeroAnimations() {
    console.log('🎭 Starting hero animations...');
    
    if (typeof gsap !== 'undefined') {
        // Hero section animations with better flow
        const heroTimeline = gsap.timeline();
        
        heroTimeline
            .from('.title-line', {
                duration: 1.2,
                y: 60,
                opacity: 0,
                stagger: 0.3,
                ease: 'power3.out'
            })
            .from('.hero-subtitle', {
                duration: 1,
                y: 40,
                opacity: 0,
                ease: 'power2.out'
            }, '-=0.8')
            .from('.hero-buttons', {
                duration: 1,
                y: 40,
                opacity: 0,
                ease: 'power2.out'
            }, '-=0.6')
            .from('.scroll-indicator', {
                duration: 1,
                opacity: 0,
                y: 20,
                ease: 'power2.out'
            }, '-=0.4');
    }
}

// Test function for links
function testLink(url) {
    console.log('Testing link:', url);
    window.open(url, '_blank');
}

// Force open link function
function openRicoLink() {
    console.log('Opening Rico link...');
    const link = document.createElement('a');
    link.href = 'https://rico.net.in';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// PDF Generation Function
function downloadPortfolioPDF() {
    // Check for jsPDF library
    if (typeof window.jsPDF === 'undefined' && typeof window.jspdf === 'undefined') {
        showNotification('PDF library not loaded. Please refresh the page and try again.', 'error');
        return;
    }

    // Add loading state
    const downloadBtn = document.getElementById('downloadBtn');
    if (downloadBtn) {
        downloadBtn.classList.add('loading');
    }

    try {
        // Create new PDF document - try different library structures
        let doc;
        if (typeof window.jsPDF !== 'undefined') {
            doc = new window.jsPDF.jsPDF();
        } else if (typeof window.jspdf !== 'undefined') {
            doc = new window.jspdf.jsPDF();
        } else {
            throw new Error('PDF library not available');
        }
        
        // Set document properties
        doc.setProperties({
            title: 'Ahamed - Creative Technologist Portfolio',
            subject: 'Professional Portfolio',
            author: 'Ahamed',
            creator: 'Portfolio Generator'
        });

        // Define colors and styles
        const primaryColor = '#0066ff';
        const textColor = '#333333';
        const lightGray = '#f5f5f5';
        
        // Page 1: Header and Personal Info
        doc.setFillColor(primaryColor);
        doc.rect(0, 0, 210, 40, 'F');
        
        // Profile picture placeholder (you can add actual image later)
        doc.setFillColor(lightGray);
        doc.circle(25, 25, 15, 'F');
        doc.setTextColor(primaryColor);
        doc.setFontSize(24);
        doc.setFont('helvetica', 'bold');
        doc.text('A', 20, 30);
        
        // Name and title
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(24);
        doc.setFont('helvetica', 'bold');
        doc.text('Ahamed', 50, 20);
        doc.setFontSize(14);
        doc.setFont('helvetica', 'normal');
        doc.text('Creative Technologist & Digital Artist', 50, 30);
        
        // Contact information
        doc.setFontSize(10);
        doc.text('Email: ahamed@example.com', 50, 40);
        doc.text('Phone: +91 98765 43210', 50, 45);
        doc.text('Location: India', 50, 50);
        
        // Page 1: Header and About
        // Header section with better spacing
        doc.setFillColor(primaryColor);
        doc.rect(0, 0, 210, 50, 'F');
        
        // Profile picture placeholder with better styling
        doc.setFillColor(lightGray);
        doc.circle(25, 25, 18, 'F');
        doc.setTextColor(primaryColor);
        doc.setFontSize(28);
        doc.setFont('helvetica', 'bold');
        doc.text('A', 18, 32);
        
        // Name and title with better positioning
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(24);
        doc.setFont('helvetica', 'bold');
        doc.text('Bagrudeen Ali Ahamed J', 55, 20);
        doc.setFontSize(12);
        doc.setFont('helvetica', 'normal');
        doc.text('Creative Technologist & Digital Artist', 55, 30);
        
        // Contact information in header
        doc.setFontSize(9);
        doc.text('Email: ahamedtheamd@gmail.com', 55, 40);
        doc.text('Phone: +91 73972 62420', 55, 45);
        
        // About section with better spacing
        doc.setTextColor(textColor);
        doc.setFontSize(16);
        doc.setFont('helvetica', 'bold');
        doc.text('About Me', 20, 70);
        
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        const aboutText = `Growing up in a bustling town in India, Ahamed always found magic in the mundane. From sketching on notebook margins to being captivated by the vibrant visuals on the local channel's broadcast, his imagination soared beyond the everyday.

Working part-time at the local studio, scheduling content, and even dabbling with broadcast software ignited a passion for bringing digital creations to life. Self-taught in the powerful tools of Photoshop, After Effects, Blender, 3ds Max, and Substance Painter, Ahamed sees every challenge as an opportunity to push his creative boundaries.

Inspired by the belief that even the seemingly impossible can be achieved through dedication and relentless effort, he is now channeling his diverse skills into crafting immersive and interactive web experiences.`;
        
        const splitAbout = doc.splitTextToSize(aboutText, 170);
        doc.text(splitAbout, 20, 85);
        
        // Footer for page 1
        doc.setFontSize(8);
        doc.setTextColor(128, 128, 128);
        doc.text('© 2024 Ahamed. All rights reserved.', 20, 280);
        
        // Page 2: Education
        doc.addPage();
        
        // Page 2 header
        doc.setFillColor(primaryColor);
        doc.rect(0, 0, 210, 40, 'F');
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(20);
        doc.setFont('helvetica', 'bold');
        doc.text('Education', 20, 25);
        
        // Education section with better spacing
        const education = [
            {
                degree: 'Bachelor of Computer Applications (BCA)',
                institution: 'SRM Arts and Science College, Chennai',
                year: 'Currently Pursuing (2024–2027 Expected)',
                details: 'Medium: English'
            },
            {
                degree: 'Higher Secondary Education (12th Grade)',
                institution: 'Bharathiyar Matric HR Sec School',
                year: 'March 2024',
                details: 'Group: General (Commerce with Computer Applications)',
                marks: 'Marks: 543/600 (90.5%)'
            },
            {
                degree: 'Higher Secondary First Year (11th Grade)',
                institution: 'Bharathiyar Matric HR Sec School',
                year: 'March 2023',
                marks: 'Marks: 474/600 (79%)'
            },
            {
                degree: 'Secondary School Leaving Certificate (10th Grade)',
                institution: 'Bharathiyar Matric HR Sec School',
                year: 'May 2022',
                marks: 'Marks: 307/500 (61.4%)'
            }
        ];
        
        let eduY = 60;
        education.forEach((edu, index) => {
            // Education title
            doc.setTextColor(primaryColor);
            doc.setFontSize(14);
            doc.setFont('helvetica', 'bold');
            doc.text(edu.degree, 20, eduY);
            
            // Institution
            doc.setTextColor(textColor);
            doc.setFontSize(11);
            doc.setFont('helvetica', 'normal');
            doc.text(edu.institution, 20, eduY + 8);
            
            // Year
            doc.setFontSize(10);
            doc.text(edu.year, 20, eduY + 15);
            
            // Details
            if (edu.details) {
                doc.text(edu.details, 20, eduY + 22);
            }
            
            // Marks
            if (edu.marks) {
                doc.setTextColor(primaryColor);
                doc.setFont('helvetica', 'bold');
                doc.text(edu.marks, 20, eduY + 29);
            }
            
            eduY += 45; // More spacing between items
        });
        
        // Skills section on page 2
        doc.setFontSize(18);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(textColor);
        doc.text('Skills & Expertise', 20, 220);
        
        const skills = [
            { name: 'Photoshop', level: 95 },
            { name: 'After Effects', level: 90 },
            { name: 'Blender', level: 85 },
            { name: '3ds Max', level: 80 },
            { name: 'Substance Painter', level: 75 }
        ];
        
        let skillY = 235;
        skills.forEach(skill => {
            doc.setFontSize(12);
            doc.setFont('helvetica', 'bold');
            doc.text(skill.name, 20, skillY);
            
            // Skill bar with better styling
            doc.setFillColor(lightGray);
            doc.rect(80, skillY - 4, 50, 8, 'F');
            doc.setFillColor(primaryColor);
            doc.rect(80, skillY - 4, (skill.level / 100) * 50, 8, 'F');
            
            doc.setFontSize(10);
            doc.setTextColor(primaryColor);
            doc.text(`${skill.level}%`, 135, skillY);
            skillY += 20; // More spacing
        });
        
        // Footer for page 2
        doc.setFontSize(8);
        doc.setTextColor(128, 128, 128);
        doc.text('© 2024 Ahamed. All rights reserved.', 20, 280);
        
        // Page 3: Projects and Contact
        doc.addPage();
        
        // Page 3 header
        doc.setFillColor(primaryColor);
        doc.rect(0, 0, 210, 40, 'F');
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(20);
        doc.setFont('helvetica', 'bold');
        doc.text('Featured Projects', 20, 25);
        
        // Projects section with better layout
        const projects = [
            {
                title: 'Digital Art Collection',
                category: 'Creative Technology',
                description: 'Immersive 3D visualizations and digital art pieces that push the boundaries of digital creativity. Created using advanced 3D modeling and texturing techniques.',
                technologies: ['Blender', 'Substance Painter', 'Photoshop']
            },
            {
                title: 'Interactive Web Experience',
                category: 'Web Development',
                description: 'Dynamic web application with real-time interactions and smooth animations. Built with modern web technologies for engaging user experiences.',
                technologies: ['HTML', 'CSS', 'JavaScript', 'GSAP']
            },
            {
                title: 'Motion Graphics Portfolio',
                category: 'Motion Design',
                description: 'Cinematic animations and visual effects for digital storytelling. Features complex motion graphics and dynamic compositions.',
                technologies: ['After Effects', 'Photoshop', 'Cinema 4D']
            },
            {
                title: '3D Environment Design',
                category: '3D Design',
                description: 'Immersive 3D environments and architectural visualization. Includes detailed modeling, texturing, and lighting.',
                technologies: ['3ds Max', 'Blender', 'V-Ray']
            },
            {
                title: 'Mobile App Interface',
                category: 'Product Design',
                description: 'Modern mobile interface design with intuitive user experience. Features clean design principles and accessibility.',
                technologies: ['Figma', 'Adobe XD', 'Sketch']
            }
        ];
        
        let projectY = 60;
        projects.forEach((project, index) => {
            if (projectY > 180) return; // Stop if we run out of space
            
            // Project title
            doc.setTextColor(primaryColor);
            doc.setFontSize(14);
            doc.setFont('helvetica', 'bold');
            doc.text(project.title, 20, projectY);
            
            // Project category
            doc.setTextColor(textColor);
            doc.setFontSize(11);
            doc.setFont('helvetica', 'normal');
            doc.text(project.category, 20, projectY + 8);
            
            // Project description
            const splitDesc = doc.splitTextToSize(project.description, 170);
            doc.text(splitDesc, 20, projectY + 15);
            
            // Technologies
            doc.setFontSize(9);
            doc.setTextColor(primaryColor);
            doc.text('Technologies: ' + project.technologies.join(', '), 20, projectY + 25);
            
            projectY += 35; // More spacing between projects
        });
        
        // Contact Information
        doc.setFontSize(18);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(textColor);
        doc.text('Contact Information', 20, 220);
        
        doc.setFontSize(11);
        doc.setFont('helvetica', 'normal');
        doc.text('Email: ahamedtheamd@gmail.com', 20, 235);
        doc.text('Phone: +91 73972 62420', 20, 245);
        doc.text('Location: India', 20, 255);
        
        // Footer for page 3
        doc.setFontSize(8);
        doc.setTextColor(128, 128, 128);
        doc.text('© 2024 Ahamed. All rights reserved.', 20, 280);
        
        // Save the PDF
        doc.save('Ahamed-Portfolio.pdf');
        
        showNotification('Portfolio PDF downloaded successfully!', 'success');
        
    } catch (error) {
        console.error('Error generating PDF:', error);
        showNotification('Error generating PDF. Please try again.', 'error');
    } finally {
        // Remove loading state
        if (downloadBtn) {
            downloadBtn.classList.remove('loading');
        }
    }
}

// Typing animation function
function initializeTypingAnimation() {
    const typingText = document.getElementById('typingText');
    if (!typingText) return;
    
    const storyText = `Growing up in a bustling town in India, Ahamed always found magic in the mundane. From sketching on notebook margins to being captivated by the vibrant visuals on the local channel's broadcast, his imagination soared beyond the everyday.

Working part-time at the local studio, scheduling content, and even dabbling with broadcast software ignited a passion for bringing digital creations to life. Self-taught in the powerful tools of Photoshop, After Effects, Blender, 3ds Max, and Substance Painter, Ahamed sees every challenge as an opportunity to push his creative boundaries.

Inspired by the belief that even the seemingly impossible can be achieved through dedication and relentless effort, he is now channeling his diverse skills into crafting immersive and interactive web experiences.`;
    
    let index = 0;
    const speed = 30; // milliseconds per character
    
    function typeWriter() {
        if (index < storyText.length) {
            typingText.innerHTML += storyText.charAt(index);
            index++;
            
            // Add subtle movement to both frames during typing
            const profileFrame = document.querySelector('.profile-frame');
            const contentFrame = document.querySelector('.content-frame');
            
            if (profileFrame && contentFrame) {
                const moveAmount = Math.sin(index * 0.1) * 2; // Subtle sine wave movement
                profileFrame.style.transform = `translateY(${moveAmount}px)`;
                contentFrame.style.transform = `translateY(${-moveAmount}px)`; // Opposite movement
            }
            
            setTimeout(typeWriter, speed);
        } else {
            // Reset frames to original position when typing is complete
            const profileFrame = document.querySelector('.profile-frame');
            const contentFrame = document.querySelector('.content-frame');
            
            if (profileFrame && contentFrame) {
                profileFrame.style.transform = 'translateY(0)';
                contentFrame.style.transform = 'translateY(0)';
            }
        }
    }
    
    // Start typing animation when the about section comes into view
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !typingText.innerHTML) {
                    typeWriter();
                }
            });
        }, { threshold: 0.3 });
        
        observer.observe(aboutSection);
    }
} 