/**
 * FARM2HOME - MAIN APP
 * Application initialization and setup
 */

/**
 * Initialize the application
 */
function initializeApp() {
    console.log('🌿 Farm2Home Application Initialized');
    
    // Smooth scroll for anchor links
    setupSmoothScroll();
    
    // Setup navbar scroll effect
    setupNavbarEffect();
    
    // Log app stats
    logAppStats();
}

/**
 * Setup smooth scroll behavior for anchor links
 */
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                
                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
                
                // Close cart if open
                const cartSidebar = document.getElementById('cart-sidebar');
                if (cartSidebar && !cartSidebar.classList.contains('translate-x-full')) {
                    cartSidebar.classList.add('translate-x-full');
                }
            }
        });
    });
}

/**
 * Setup navbar scroll effect
 */
function setupNavbarEffect() {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            navbar.classList.add('shadow-lg');
        } else {
            navbar.classList.remove('shadow-lg');
        }
    });
}

/**
 * Log application statistics
 */
function logAppStats() {
    const totalProducts = getAllProducts().length;
    const categories = getCategories().length;
    
    console.log(`📊 App Statistics:`);
    console.log(`   - Total Products: ${totalProducts}`);
    console.log(`   - Categories: ${categories}`);
    console.log(`   - Cart Items: ${cart.getItemCount()}`);
    console.log(`✅ All systems ready!`);
}

/**
 * Handle errors globally
 */
window.addEventListener('error', (event) => {
    console.error('❌ Application Error:', event.error);
});

/**
 * Start the application when DOM is ready
 */
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}

/**
 * Log when user leaves page
 */
window.addEventListener('beforeunload', () => {
    const cartItems = cart.getItemCount();
    if (cartItems > 0) {
        console.log(`💾 Cart saved with ${cartItems} item${cartItems !== 1 ? 's' : ''}`);
    }
});
