/**
 * FARM2HOME - CART MANAGEMENT
 * Handles shopping cart logic and localStorage persistence
 */

const CART_STORAGE_KEY = 'farm2home_cart';

class Cart {
    constructor() {
        this.items = this.loadCart();
        this.observers = [];
    }

    /**
     * Load cart from localStorage
     */
    loadCart() {
        const saved = localStorage.getItem(CART_STORAGE_KEY);
        return saved ? JSON.parse(saved) : [];
    }

    /**
     * Save cart to localStorage
     */
    saveCart() {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(this.items));
        this.notifyObservers();
    }

    /**
     * Add item to cart
     */
    addItem(product, quantity = 1) {
        quantity = Math.max(1, quantity);
        
        const existingItem = this.items.find(item => item.id === product.id);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                category: product.category,
                quantity: quantity
            });
        }
        
        this.saveCart();
    }

    /**
     * Remove item from cart
     */
    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.saveCart();
    }

    /**
     * Update item quantity
     */
    updateQuantity(productId, quantity) {
        quantity = Math.max(1, quantity);
        const item = this.items.find(item => item.id === productId);
        
        if (item) {
            item.quantity = quantity;
            this.saveCart();
        }
    }

    /**
     * Get all cart items
     */
    getItems() {
        return this.items;
    }

    /**
     * Get total number of items in cart
     */
    getItemCount() {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }

    /**
     * Get cart subtotal
     */
    getSubtotal() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    /**
     * Get shipping cost (free shipping for now)
     */
    getShipping() {
        return 0;
    }

    /**
     * Get total price
     */
    getTotal() {
        return this.getSubtotal() + this.getShipping();
    }

    /**
     * Clear cart
     */
    clear() {
        this.items = [];
        this.saveCart();
    }

    /**
     * Check if cart is empty
     */
    isEmpty() {
        return this.items.length === 0;
    }

    /**
     * Subscribe to cart changes
     */
    subscribe(observer) {
        this.observers.push(observer);
    }

    /**
     * Unsubscribe from cart changes
     */
    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    /**
     * Notify all observers of cart changes
     */
    notifyObservers() {
        this.observers.forEach(observer => observer(this));
    }
}

// Create global cart instance
const cart = new Cart();
