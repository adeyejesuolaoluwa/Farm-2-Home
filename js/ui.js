/**
 * FARM2HOME - UI MANAGEMENT
 * Handles all UI rendering and user interactions
 */

class UI {
    constructor() {
        this.currentFilter = 'all';
        this.currentSort = 'default';
        this.searchQuery = '';
        this.init();
    }

    /**
     * Initialize UI event listeners
     */
    init() {
        this.setupEventListeners();
        this.setupScrollAnimations();
        this.renderInitialUI();
    }

    /**
     * Setup all event listeners
     */
    setupEventListeners() {
        // Cart toggle
        document.getElementById('cart-toggle').addEventListener('click', () => this.toggleCart());
        document.getElementById('cart-close').addEventListener('click', () => this.toggleCart());
        document.getElementById('continue-shopping').addEventListener('click', () => this.toggleCart());

        // Mobile menu
        document.getElementById('mobile-menu-toggle').addEventListener('click', () => this.toggleMobileMenu());

        // Search
        document.getElementById('search-input').addEventListener('input', (e) => {
            this.searchQuery = e.target.value;
            this.applyFilters();
        });

        // Category filter
        document.getElementById('category-filter').addEventListener('change', (e) => {
            this.currentFilter = e.target.value;
            this.applyFilters();
        });

        // Sort
        document.getElementById('sort-filter').addEventListener('change', (e) => {
            this.currentSort = e.target.value;
            this.applyFilters();
        });

        // Newsletter
        document.getElementById('newsletter-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleNewsletterSignup();
        });

        // Modal
        document.getElementById('modal-close').addEventListener('click', () => this.closeProductModal());
        document.getElementById('product-modal').addEventListener('click', (e) => {
            if (e.target.id === 'product-modal') this.closeProductModal();
        });

        document.getElementById('modal-qty-decrease').addEventListener('click', () => {
            const input = document.getElementById('modal-qty-input');
            input.value = Math.max(1, parseInt(input.value) - 1);
        });

        document.getElementById('modal-qty-increase').addEventListener('click', () => {
            const input = document.getElementById('modal-qty-input');
            input.value = parseInt(input.value) + 1;
        });

        document.getElementById('modal-add-to-cart').addEventListener('click', () => this.addFromModal());

        // Checkout button
        document.getElementById('checkout-btn').addEventListener('click', () => this.handleCheckout());

        // Cart observer
        cart.subscribe((cartInstance) => this.updateCartUI(cartInstance));
    }

    /**
     * Setup scroll animations
     */
    setupScrollAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.fade-in-on-scroll').forEach(el => {
            observer.observe(el);
        });
    }

    /**
     * Render initial UI
     */
    renderInitialUI() {
        this.renderCategories();
        this.renderProducts(getAllProducts());
        this.updateCartUI(cart);
    }

    /**
     * Render category buttons and filter
     */
    renderCategories() {
        const categories = getCategories();
        const categoryFilter = document.getElementById('category-filter');
        const categoryButtons = document.getElementById('category-buttons');

        // Clear existing options (keep the first one)
        const firstOption = categoryFilter.innerHTML;
        categoryFilter.innerHTML = firstOption;

        // Add category options
        categories.forEach(cat => {
            const option = document.createElement('option');
            option.value = cat.id;
            option.textContent = cat.name;
            categoryFilter.appendChild(option);
        });

        // Add category buttons
        categoryButtons.innerHTML = '<button class="category-btn px-6 py-2 rounded-full font-medium transition-all duration-300 bg-green-600 text-white border-2 border-green-600" data-category="all">All Products</button>';
        
        categories.forEach(cat => {
            const btn = document.createElement('button');
            btn.className = 'category-btn px-6 py-2 rounded-full font-medium transition-all duration-300 bg-white text-gray-700 border-2 border-gray-300 hover:border-green-600';
            btn.textContent = cat.name;
            btn.setAttribute('data-category', cat.id);
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.currentFilter = cat.id;
                this.updateCategoryButtons(cat.id);
                document.getElementById('category-filter').value = cat.id;
                this.applyFilters();
            });
            categoryButtons.appendChild(btn);
        });

        // Add event listeners to initial all button
        document.querySelector('[data-category="all"]').addEventListener('click', (e) => {
            e.preventDefault();
            this.currentFilter = 'all';
            this.updateCategoryButtons('all');
            document.getElementById('category-filter').value = 'all';
            this.applyFilters();
        });
    }

    /**
     * Update category button styles
     */
    updateCategoryButtons(activeCategory) {
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.classList.remove('bg-green-600', 'text-white', 'border-green-600');
            btn.classList.add('bg-white', 'text-gray-700', 'border-gray-300');
            
            if (btn.getAttribute('data-category') === activeCategory) {
                btn.classList.remove('bg-white', 'text-gray-700', 'border-gray-300');
                btn.classList.add('bg-green-600', 'text-white', 'border-green-600');
            }
        });
    }

    /**
     * Apply filters and sorting
     */
    applyFilters() {
        let products = getAllProducts();

        // Apply category filter
        if (this.currentFilter !== 'all') {
            products = getProductsByCategory(this.currentFilter);
        }

        // Apply search
        if (this.searchQuery) {
            products = searchProducts(this.searchQuery);
            if (this.currentFilter !== 'all') {
                products = products.filter(p => p.category === this.currentFilter);
            }
        }

        // Apply sorting
        products = sortProducts(products, this.currentSort);

        this.renderProducts(products);
    }

    /**
     * Render products grid
     */
    renderProducts(products) {
        const grid = document.getElementById('products-grid');
        const countEl = document.getElementById('products-count');

        if (products.length === 0) {
            grid.innerHTML = `
                <div class="col-span-full text-center py-12 text-gray-500">
                    <i class="fas fa-inbox text-4xl mb-4 opacity-30"></i>
                    <p class="text-lg">No products found matching your criteria</p>
                </div>
            `;
            countEl.textContent = '';
            return;
        }

        grid.innerHTML = products.map(product => this.createProductCard(product)).join('');
        countEl.textContent = `Showing ${products.length} product${products.length !== 1 ? 's' : ''}`;

        // Add click handlers
        document.querySelectorAll('.product-card').forEach(card => {
            card.addEventListener('click', () => {
                const productId = parseInt(card.getAttribute('data-product-id'));
                this.openProductModal(productId);
            });
        });
    }

    /**
     * Create product card HTML
     */
    createProductCard(product) {
        const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
        
        return `
            <div class="product-card fade-in-on-scroll" data-product-id="${product.id}">
                <div class="relative">
                    <img src="${product.image}" alt="${product.name}" class="product-card-image">
                    ${discount > 0 ? `<div class="product-card-badge">-${discount}%</div>` : ''}
                </div>
                <div class="product-card-content">
                    <p class="product-card-category">${product.category}</p>
                    <h3 class="product-card-name">${product.name}</h3>
                    <div class="product-card-rating">
                        <span class="star"><i class="fas fa-star"></i></span>
                        <span>${product.rating}</span>
                    </div>
                </div>
                <div class="product-card-footer">
                    <div>
                        <p class="product-card-price">$${product.price.toFixed(2)}</p>
                        ${product.originalPrice > product.price ? `<p class="text-xs text-gray-500 line-through">$${product.originalPrice.toFixed(2)}</p>` : ''}
                    </div>
                    <button class="product-card-btn" onclick="event.stopPropagation();">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
        `;
    }

    /**
     * Open product modal
     */
    openProductModal(productId) {
        const product = getProductById(productId);
        if (!product) return;

        document.getElementById('modal-product-image').src = product.image;
        document.getElementById('modal-product-category').textContent = product.category.toUpperCase();
        document.getElementById('modal-product-name').textContent = product.name;
        document.getElementById('modal-product-price').textContent = `$${product.price.toFixed(2)}`;
        document.getElementById('modal-product-description').textContent = product.description;
        document.getElementById('modal-qty-input').value = 1;
        
        // Store current product in modal
        document.getElementById('product-modal').setAttribute('data-product-id', productId);

        document.getElementById('product-modal').classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    /**
     * Close product modal
     */
    closeProductModal() {
        document.getElementById('product-modal').classList.add('hidden');
        document.body.style.overflow = 'auto';
    }

    /**
     * Add product from modal to cart
     */
    addFromModal() {
        const productId = parseInt(document.getElementById('product-modal').getAttribute('data-product-id'));
        const quantity = parseInt(document.getElementById('modal-qty-input').value);
        const product = getProductById(productId);

        if (product) {
            cart.addItem(product, quantity);
            this.showToast(`${product.name} added to cart!`, 'success');
            this.closeProductModal();
        }
    }

    /**
     * Toggle cart sidebar
     */
    toggleCart() {
        const sidebar = document.getElementById('cart-sidebar');
        sidebar.classList.toggle('translate-x-full');
    }

    /**
     * Update cart UI
     */
    updateCartUI(cartInstance) {
        const cartCount = document.getElementById('cart-count');
        const itemCount = cartInstance.getItemCount();

        // Update cart count badge
        if (itemCount > 0) {
            cartCount.textContent = itemCount;
            cartCount.classList.add('opacity-100');
        } else {
            cartCount.classList.remove('opacity-100');
        }

        // Update cart items container
        this.renderCartItems(cartInstance);

        // Update cart totals
        document.getElementById('cart-subtotal').textContent = `$${cartInstance.getSubtotal().toFixed(2)}`;
        document.getElementById('cart-total').textContent = `$${cartInstance.getTotal().toFixed(2)}`;
    }

    /**
     * Render cart items
     */
    renderCartItems(cartInstance) {
        const container = document.getElementById('cart-items-container');
        const items = cartInstance.getItems();

        if (items.length === 0) {
            container.innerHTML = `
                <div class="text-center py-12 text-gray-500">
                    <i class="fas fa-shopping-bag text-4xl mb-4 opacity-30"></i>
                    <p>Your cart is empty</p>
                </div>
            `;
            return;
        }

        container.innerHTML = items.map(item => this.createCartItemHTML(item)).join('');

        // Add event listeners
        items.forEach(item => {
            const decreaseBtn = document.querySelector(`[data-decrease="${item.id}"]`);
            const increaseBtn = document.querySelector(`[data-increase="${item.id}"]`);
            const removeBtn = document.querySelector(`[data-remove="${item.id}"]`);
            const qtyInput = document.querySelector(`[data-qty="${item.id}"]`);

            if (decreaseBtn) {
                decreaseBtn.addEventListener('click', () => {
                    cart.updateQuantity(item.id, Math.max(1, item.quantity - 1));
                });
            }

            if (increaseBtn) {
                increaseBtn.addEventListener('click', () => {
                    cart.updateQuantity(item.id, item.quantity + 1);
                });
            }

            if (removeBtn) {
                removeBtn.addEventListener('click', () => {
                    const product = getProductById(item.id);
                    cart.removeItem(item.id);
                    this.showToast(`${product.name} removed from cart`, 'info');
                });
            }

            if (qtyInput) {
                qtyInput.addEventListener('change', (e) => {
                    const qty = Math.max(1, parseInt(e.target.value) || 1);
                    cart.updateQuantity(item.id, qty);
                });
            }
        });
    }

    /**
     * Create cart item HTML
     */
    createCartItemHTML(item) {
        return `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-content">
                    <p class="cart-item-name">${item.name}</p>
                    <p class="cart-item-price">$${item.price.toFixed(2)}</p>
                    <div class="cart-item-quantity">
                        <button data-decrease="${item.id}">−</button>
                        <input type="number" data-qty="${item.id}" value="${item.quantity}" min="1">
                        <button data-increase="${item.id}">+</button>
                    </div>
                </div>
                <button data-remove="${item.id}" class="cart-item-remove">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
    }

    /**
     * Toggle mobile menu
     */
    toggleMobileMenu() {
        const menu = document.getElementById('mobile-menu');
        menu.classList.toggle('hidden');
    }

    /**
     * Handle newsletter signup
     */
    handleNewsletterSignup() {
        const form = document.getElementById('newsletter-form');
        const email = form.querySelector('input[type="email"]').value;

        this.showToast(`Welcome! You'll receive a 20% discount code at ${email}`, 'success');
        form.reset();
    }

    /**
     * Handle checkout
     */
    handleCheckout() {
        if (cart.isEmpty()) {
            this.showToast('Your cart is empty', 'error');
            return;
        }

        this.showToast('Proceeding to checkout... (Demo only)', 'info');
        setTimeout(() => {
            this.showToast('Thank you for your order!', 'success');
            cart.clear();
            this.toggleCart();
        }, 2000);
    }

    /**
     * Show toast notification
     */
    showToast(message, type = 'success') {
        const container = document.getElementById('toast-container');
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        
        const icons = {
            success: '<i class="fas fa-check-circle"></i>',
            error: '<i class="fas fa-times-circle"></i>',
            info: '<i class="fas fa-info-circle"></i>'
        };

        toast.innerHTML = `
            <div class="toast-icon ${type}">${icons[type]}</div>
            <div class="toast-text">${message}</div>
            <button class="toast-close"><i class="fas fa-times"></i></button>
        `;

        container.appendChild(toast);

        const closeBtn = toast.querySelector('.toast-close');
        closeBtn.addEventListener('click', () => {
            toast.remove();
        });

        setTimeout(() => {
            toast.remove();
        }, 4000);
    }
}

// Create global UI instance when DOM is ready
let ui;
document.addEventListener('DOMContentLoaded', () => {
    ui = new UI();
});
