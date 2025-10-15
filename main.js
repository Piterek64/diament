// DIAMENT DELIVERY - Main JavaScript File
// Handles all animations, interactions, and dynamic content

class DiamentDelivery {
    constructor() {
        this.init();
        this.setupEventListeners();
        this.initAnimations();
        this.initParticles();
        this.initCounters();
        this.initSliders();
        this.initScrollEffects();
    }

    init() {
        // Initialize typed.js for hero headline
        if (document.getElementById('typed-headline')) {
            new Typed('#typed-headline', {
                strings: [
                    'Szybsze dostawy.',
                    'Niższe prowizje.',
                    'Większe zyski.',
                    'DIAMENT DELIVERY'
                ],
                typeSpeed: 80,
                backSpeed: 50,
                backDelay: 2000,
                startDelay: 500,
                loop: true,
                showCursor: true,
                cursorChar: '|'
            });
        }
    }

    setupEventListeners() {
        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        }

        // Role selection buttons
        const roleButtons = document.querySelectorAll('.role-btn.js');
        roleButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const buttonId = e.currentTarget.id;
                this.switchRoleContent(buttonId);
                this.updateButtonStates(e.currentTarget);
            });
        });

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

        // Form submissions
        document.querySelectorAll('form').forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleFormSubmission(form);
            });
        });

        // Sticky CTA visibility
        window.addEventListener('scroll', () => {
            this.toggleStickyCTA();
        });
    }

    switchRoleContent(buttonId) {
        const contentMap = {
            'btn-restaurants': 'restaurant-content',
            'btn-couriers': 'courier-content',
            'btn-ambassadors': 'ambassador-content'
        };

        // Hide all content
        document.querySelectorAll('.role-content').forEach(content => {
            content.classList.remove('active');
        });

        // Show selected content
        const targetContent = document.getElementById(contentMap[buttonId]);
        if (targetContent) {
            setTimeout(() => {
                targetContent.classList.add('active');
            }, 100);
        }
    }

    updateButtonStates(activeButton) {
        const roleButtons = document.querySelectorAll('.role-btn.js');
        
        roleButtons.forEach(button => {
            button.classList.remove('btn-primary');
            button.classList.add('glass-effect');
        });

        activeButton.classList.remove('glass-effect');
        activeButton.classList.add('btn-primary');
    }

	initAnimations() {
	  // Ujawniaj wcześniej (zanim dotknie dołu viewportu) i tylko raz
	  const io = new IntersectionObserver((entries, obs) => {
		entries.forEach(entry => {
		  if (entry.isIntersecting) {
			// 1) Klasa, która odpala płynny reveal z CSS
			entry.target.classList.add('is-visible');

			// 2) (opcjonalnie) jednorazowy „dopak” anime.js – tylko raz
			//    Jeśli nie chcesz anime.js, zakomentuj 3 linie poniżej.
			if (window.anime) {
			  anime({
				targets: entry.target,
				opacity: [0, 1],
				translateY: [16, 0],
				duration: 700,
				easing: 'easeOutCubic'
			  });
			}

			// Absolutnie kluczowe: przestań obserwować po ujawnieniu
			obs.unobserve(entry.target);
		  }
		});
	  }, {
		root: null,
		rootMargin: '0px 0px -15% 0px', // wchodzi ~15% wcześniej – brak „migania” na granicy
		threshold: 0.02                   // 2% widoczności wystarczy
	  });

	  // Obserwuj TYLKO elementy z klasą .reveal (masz pełną kontrolę, co ma wjeżdżać)
	  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
	}


    initParticles() {
        // P5.js particle system
        if (typeof p5 !== 'undefined') {
            new p5((p) => {
                let particles = [];
                const numParticles = 50;

                p.setup = () => {
                    const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
                    canvas.parent('particles-canvas');
                    
                    // Create particles
                    for (let i = 0; i < numParticles; i++) {
                        particles.push({
                            x: p.random(p.width),
                            y: p.random(p.height),
                            vx: p.random(-0.5, 0.5),
                            vy: p.random(-0.5, 0.5),
                            size: p.random(2, 6),
                            opacity: p.random(0.1, 0.3)
                        });
                    }
                };

                p.draw = () => {
                    p.clear();
                    
                    // Update and draw particles
                    particles.forEach(particle => {
                        // Update position
                        particle.x += particle.vx;
                        particle.y += particle.vy;
                        
                        // Wrap around edges
                        if (particle.x < 0) particle.x = p.width;
                        if (particle.x > p.width) particle.x = 0;
                        if (particle.y < 0) particle.y = p.height;
                        if (particle.y > p.height) particle.y = 0;
                        
                        // Draw particle
                        p.fill(107, 47, 184, particle.opacity * 255);
                        p.noStroke();
                        p.ellipse(particle.x, particle.y, particle.size);
                    });
                };

                p.windowResized = () => {
                    p.resizeCanvas(p.windowWidth, p.windowHeight);
                };
            });
        }
    }

    initCounters() {
        const counters = document.querySelectorAll('.counter');
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => {
            counterObserver.observe(counter);
        });
    }

    animateCounter(element) {
        const target = parseInt(element.dataset.target);
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                element.textContent = Math.floor(current) + (target > 99 ? '+' : '');
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target + (target > 99 ? '+' : '');
            }
        };

        updateCounter();
    }

    initSliders() {
        // Initialize testimonials slider
        if (document.getElementById('testimonials-slider')) {
            new Splide('#testimonials-slider', {
                type: 'loop',
                perPage: 3,
                perMove: 1,
                gap: '2rem',
                autoplay: true,
                interval: 5000,
                pauseOnHover: true,
                breakpoints: {
                    1024: { perPage: 2 },
                    640: { perPage: 1 }
                }
            }).mount();
        }
    }

    initScrollEffects() {
        // Parallax effect for hero background
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero-bg');
            if (hero) {
                hero.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        });
    }

    toggleStickyCTA() {
        const stickyCTA = document.querySelector('.sticky-cta');
        if (stickyCTA) {
            if (window.scrollY > 500) {
                stickyCTA.classList.add('visible');
            } else {
                stickyCTA.classList.remove('visible');
            }
        }
    }

    handleFormSubmission(form) {
        // Show loading state
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Wysyłanie...';
        submitBtn.disabled = true;

        // Simulate form submission
        setTimeout(() => {
            this.showNotification('Formularz został wysłany pomyślnie!', 'success');
            form.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 1500);
    }

    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `fixed top-20 right-4 z-50 p-4 rounded-lg shadow-lg max-w-sm transform translate-x-full transition-transform duration-300 ${
            type === 'success' ? 'bg-green-500 text-white' : 
            type === 'error' ? 'bg-red-500 text-white' : 
            'bg-blue-500 text-white'
        }`;
        notification.textContent = message;

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Animate out and remove
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 4000);
    }

    // Utility functions for other pages
    static initEarningsCalculator() {
        const hoursSlider = document.getElementById('hours-slider');
        const vehicleSelect = document.getElementById('vehicle-select');
        const peakHoursCheckbox = document.getElementById('peak-hours');
        const earningsDisplay = document.getElementById('earnings-display');

        if (hoursSlider && earningsDisplay) {
            const updateEarnings = () => {
                const hours = parseInt(hoursSlider.value);
                const vehicle = vehicleSelect?.value || 'bike';
                const isPeak = peakHoursCheckbox?.checked || false;

                let baseRate = vehicle === 'car' ? 35 : vehicle === 'scooter' ? 30 : 25;
                let peakBonus = isPeak ? 1.3 : 1;
                let totalEarnings = Math.round(hours * baseRate * peakBonus);

                earningsDisplay.textContent = `${totalEarnings}zł`;
            };

            hoursSlider.addEventListener('input', updateEarnings);
            if (vehicleSelect) vehicleSelect.addEventListener('change', updateEarnings);
            if (peakHoursCheckbox) peakHoursCheckbox.addEventListener('change', updateEarnings);

            updateEarnings();
        }
    }

    static initComparisonChart() {
        if (typeof echarts !== 'undefined' && document.getElementById('comparison-chart')) {
            const chart = echarts.init(document.getElementById('comparison-chart'));
            
            const option = {
				backgroundColor: '#ffffff',
                title: {
                    text: '',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                xAxis: {
                    type: 'category',
                    data: ['Diament Delivery', 'Glovo', 'Pyszne.pl', 'Uber Eats']
                },
                yAxis: {
                    type: 'value',
                    name: 'Prowizja (%)'
                },
                series: [{
                    data: [15, 25, 28, 30],
                    type: 'bar',
                    itemStyle: {
                        color: function(params) {
                            const colors = ['#6B2FB8', '#FF6B6B', '#4ECDC4', '#45B7D1'];
                            return colors[params.dataIndex];
                        }
                    }
                }]
            };

            chart.setOption(option);
            
            window.addEventListener('resize', () => {
                chart.resize();
            });
        }
    }

    static initMap() {
        if (typeof L !== 'undefined' && document.getElementById('map')) {
            const map = L.map('map').setView([52.0693, 19.4803], 6);
            
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors'
            }).addTo(map);

            // Active cities
            const activeCities = [
                { name: 'Kołobrzeg', lat: 54.1754, lng: 15.5844, restaurants: 15, couriers: 25 },
                { name: 'Zielona Góra', lat: 51.9356, lng: 15.5062, restaurants: 18, couriers: 32 }
            ];

            // Upcoming cities
            const upcomingCities = [
                { name: 'Szczecin', lat: 53.4289, lng: 14.5530 },
                { name: 'Gdańsk', lat: 54.3520, lng: 18.6466 },
                { name: 'Poznań', lat: 52.4064, lng: 16.9252 },
                { name: 'Kraków', lat: 50.0647, lng: 19.9450 },
                { name: 'Wrocław', lat: 51.1079, lng: 17.0385 }
            ];

            // Add markers for active cities
            activeCities.forEach(city => {
                const marker = L.marker([city.lat, city.lng]).addTo(map);
                marker.bindPopup(`
                    <div class="text-center">
                        <h3 class="font-bold text-purple-600">${city.name}</h3>
                        <p class="text-sm">✅ Aktywne miasto</p>
                        <p class="text-xs">Restauracje: ${city.restaurants} | Kurierzy: ${city.couriers}</p>
                    </div>
                `);
            });

            // Add markers for upcoming cities
            upcomingCities.forEach(city => {
                const marker = L.marker([city.lat, city.lng], {
                    icon: L.divIcon({
                        className: 'upcoming-city-marker',
                        html: '<div style="background: #FFA500; width: 20px; height: 20px; border-radius: 50%; border: 2px solid white;"></div>',
                        iconSize: [20, 20]
                    })
                }).addTo(map);
                marker.bindPopup(`
                    <div class="text-center">
                        <h3 class="font-bold text-orange-600">${city.name}</h3>
                        <p class="text-sm">🚧 Wkrótce uruchamiamy</p>
                        <p class="text-xs">Planowany start: Q2 2025</p>
                    </div>
                `);
            });
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new DiamentDelivery();
    
    // Initialize page-specific features
    if (document.getElementById('earnings-calculator')) {
        DiamentDelivery.initEarningsCalculator();
    }
    
    if (document.getElementById('comparison-chart')) {
        DiamentDelivery.initComparisonChart();
    }
    
    if (document.getElementById('map')) {
        // Load Leaflet CSS and JS for map
        const leafletCSS = document.createElement('link');
        leafletCSS.rel = 'stylesheet';
        leafletCSS.href = 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css';
        document.head.appendChild(leafletCSS);
        
        const leafletJS = document.createElement('script');
        leafletJS.src = 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.js';
        leafletJS.onload = () => {
            DiamentDelivery.initMap();
        };
        document.head.appendChild(leafletJS);
    }
});

// Export for use in other files
window.DiamentDelivery = DiamentDelivery;