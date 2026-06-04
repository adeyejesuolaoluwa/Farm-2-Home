/**
 * FARM2HOME - PRODUCTS DATA
 * Contains all product information for the store
 */

const PRODUCTS = [
    // ============ VEGETABLES ============
    {
        id: 1,
        name: "Organic Tomatoes",
        category: "vegetables",
        price: 4.99,
        originalPrice: 6.99,
        image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=500&h=500&fit=crop",
        description: "Crisp, juicy, and perfectly ripe organic tomatoes. Packed with natural flavor and nutrients. Perfect for salads, sauces, and fresh cooking.",
        rating: 4.8,
        inStock: true
    },
    {
        id: 2,
        name: "Fresh Spinach",
        category: "vegetables",
        price: 3.49,
        originalPrice: 4.99,
        image: "https://images.unsplash.com/photo-1599599810694-1f57e6a5a5b5?w=500&h=500&fit=crop",
        description: "Tender, nutrient-dense organic spinach leaves. Perfect for salads, smoothies, and cooking. Grown without pesticides.",
        rating: 4.9,
        inStock: true
    },
    {
        id: 3,
        name: "Rainbow Bell Peppers",
        category: "vegetables",
        price: 5.99,
        originalPrice: 7.99,
        image: "https://images.unsplash.com/photo-1599599810986-b4309e25d15f?w=500&h=500&fit=crop",
        description: "Vibrant, colorful bell peppers in red, yellow, and orange. Sweet and crunchy. Great for stir-fries and salads.",
        rating: 4.7,
        inStock: true
    },
    {
        id: 4,
        name: "Organic Carrots",
        category: "vegetables",
        price: 2.99,
        originalPrice: 4.49,
        image: "https://images.unsplash.com/photo-1599599810831-0c43cae6b4be?w=500&h=500&fit=crop",
        description: "Sweet, tender organic carrots with natural earthiness. Perfect for cooking, juicing, or eating raw.",
        rating: 4.8,
        inStock: true
    },
    {
        id: 5,
        name: "Fresh Broccoli",
        category: "vegetables",
        price: 3.99,
        originalPrice: 5.49,
        image: "https://images.unsplash.com/photo-1599599810444-5f73e0dfb0e2?w=500&h=500&fit=crop",
        description: "Vibrant green organic broccoli heads. Nutrient-packed and delicious. Perfect for steaming, roasting, or raw.",
        rating: 4.9,
        inStock: true
    },
    {
        id: 6,
        name: "Organic Cucumbers",
        category: "vegetables",
        price: 2.49,
        originalPrice: 3.99,
        image: "https://images.unsplash.com/photo-1602496443298-8e0c89d6a8a1?w=500&h=500&fit=crop",
        description: "Crisp, refreshing organic cucumbers. Perfect for salads, smoothies, or snacking. Pesticide-free.",
        rating: 4.7,
        inStock: true
    },

    // ============ FRUITS ============
    {
        id: 7,
        name: "Fresh Strawberries",
        category: "fruits",
        price: 6.99,
        originalPrice: 8.99,
        image: "https://images.unsplash.com/photo-1615485276934-a965f71b16a6?w=500&h=500&fit=crop",
        description: "Sweet, juicy organic strawberries. Bursting with flavor and natural sweetness. Perfect for desserts and smoothies.",
        rating: 4.9,
        inStock: true
    },
    {
        id: 8,
        name: "Organic Blueberries",
        category: "fruits",
        price: 7.99,
        originalPrice: 10.99,
        image: "https://images.unsplash.com/photo-1599599810519-c90900bc9de1?w=500&h=500&fit=crop",
        description: "Plump, antioxidant-rich organic blueberries. Sweet and delicious. Great for breakfast and snacking.",
        rating: 4.8,
        inStock: true
    },
    {
        id: 9,
        name: "Fresh Apples",
        category: "fruits",
        price: 4.49,
        originalPrice: 5.99,
        image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=500&h=500&fit=crop",
        description: "Crisp, sweet organic apples. Perfect for snacking, baking, or making fresh juice. Pesticide-free.",
        rating: 4.8,
        inStock: true
    },
    {
        id: 10,
        name: "Organic Bananas",
        category: "fruits",
        price: 3.99,
        originalPrice: 5.49,
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500&h=500&fit=crop",
        description: "Creamy, naturally sweet organic bananas. Perfect for smoothies, baking, or eating fresh.",
        rating: 4.9,
        inStock: true
    },
    {
        id: 11,
        name: "Fresh Oranges",
        category: "fruits",
        price: 5.49,
        originalPrice: 7.49,
        image: "https://images.unsplash.com/photo-1599599810964-b70eca2b9bb9?w=500&h=500&fit=crop",
        description: "Juicy, vitamin C-rich organic oranges. Perfect for fresh juice or eating whole. Naturally sweet.",
        rating: 4.7,
        inStock: true
    },
    {
        id: 12,
        name: "Organic Grapes",
        category: "fruits",
        price: 6.49,
        originalPrice: 8.99,
        image: "https://images.unsplash.com/photo-1599599810730-1e50b9d4c1b7?w=500&h=500&fit=crop",
        description: "Plump, juicy organic grapes. Sweet and refreshing. Perfect for snacking or entertaining.",
        rating: 4.8,
        inStock: true
    },

    // ============ DAIRY ============
    {
        id: 13,
        name: "Fresh Milk",
        category: "dairy",
        price: 4.99,
        originalPrice: 6.49,
        image: "https://images.unsplash.com/photo-1599599810694-8f389c2c2c6f?w=500&h=500&fit=crop",
        description: "Fresh, organic farm milk. Creamy and delicious. Rich in calcium and nutrients. Direct from local farms.",
        rating: 4.9,
        inStock: true
    },
    {
        id: 14,
        name: "Organic Yogurt",
        category: "dairy",
        price: 5.99,
        originalPrice: 7.99,
        image: "https://images.unsplash.com/photo-1599599810785-2c1d5b5b5b5b?w=500&h=500&fit=crop",
        description: "Creamy, protein-rich organic yogurt. Probiotic cultures for digestive health. No artificial additives.",
        rating: 4.8,
        inStock: true
    },
    {
        id: 15,
        name: "Artisan Cheese",
        category: "dairy",
        price: 8.99,
        originalPrice: 11.99,
        image: "https://images.unsplash.com/photo-1599599810864-2c1d5b5b5b5b?w=500&h=500&fit=crop",
        description: "Handcrafted organic cheese from local dairies. Rich flavor and creamy texture. Perfect for any occasion.",
        rating: 4.9,
        inStock: true
    },
    {
        id: 16,
        name: "Organic Butter",
        category: "dairy",
        price: 6.49,
        originalPrice: 8.99,
        image: "https://images.unsplash.com/photo-1589985643862-8b4b3bb8e5d0?w=500&h=500&fit=crop",
        description: "Pure, creamy organic butter. Made from grass-fed dairy. Perfect for cooking and baking.",
        rating: 4.8,
        inStock: true
    },

    // ============ ORGANIC HERBS & SPICES ============
    {
        id: 17,
        name: "Fresh Basil",
        category: "herbs",
        price: 2.99,
        originalPrice: 4.49,
        image: "https://images.unsplash.com/photo-1599599810873-d1b5b4a6d5b0?w=500&h=500&fit=crop",
        description: "Aromatic, fresh organic basil. Perfect for Italian dishes and salads. Fragrant and flavorful.",
        rating: 4.8,
        inStock: true
    },
    {
        id: 18,
        name: "Organic Garlic",
        category: "herbs",
        price: 1.99,
        originalPrice: 3.49,
        image: "https://images.unsplash.com/photo-1599599810882-d1b5b4a6d5b0?w=500&h=500&fit=crop",
        description: "Strong, aromatic organic garlic bulbs. Essential for cooking. Fresh from the farm.",
        rating: 4.9,
        inStock: true
    },
    {
        id: 19,
        name: "Fresh Cilantro",
        category: "herbs",
        price: 2.49,
        originalPrice: 3.99,
        image: "https://images.unsplash.com/photo-1599599810891-d1b5b4a6d5b0?w=500&h=500&fit=crop",
        description: "Vibrant, fresh organic cilantro. Perfect for Mexican and Asian cuisine. Packed with flavor.",
        rating: 4.7,
        inStock: true
    },
    {
        id: 20,
        name: "Organic Ginger",
        category: "herbs",
        price: 3.49,
        originalPrice: 5.49,
        image: "https://images.unsplash.com/photo-1599599810900-d1b5b4a6d5b0?w=500&h=500&fit=crop",
        description: "Fresh, zesty organic ginger root. Great for cooking, tea, and health benefits.",
        rating: 4.8,
        inStock: true
    }
];

/**
 * Get all products
 */
function getAllProducts() {
    return PRODUCTS;
}

/**
 * Get products by category
 */
function getProductsByCategory(category) {
    if (category === 'all') {
        return PRODUCTS;
    }
    return PRODUCTS.filter(product => product.category === category);
}

/**
 * Get unique categories
 */
function getCategories() {
    const categories = [...new Set(PRODUCTS.map(product => product.category))];
    return categories.map(cat => ({
        id: cat,
        name: cat.charAt(0).toUpperCase() + cat.slice(1)
    }));
}

/**
 * Search products
 */
function searchProducts(query) {
    const lowerQuery = query.toLowerCase();
    return PRODUCTS.filter(product => 
        product.name.toLowerCase().includes(lowerQuery) ||
        product.description.toLowerCase().includes(lowerQuery) ||
        product.category.toLowerCase().includes(lowerQuery)
    );
}

/**
 * Sort products
 */
function sortProducts(products, sortType) {
    const sorted = [...products];
    
    switch (sortType) {
        case 'price-low':
            sorted.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            sorted.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            sorted.sort((a, b) => a.name.localeCompare(b.name));
            break;
        default:
            // Keep original order
            break;
    }
    
    return sorted;
}

/**
 * Get product by ID
 */
function getProductById(id) {
    return PRODUCTS.find(product => product.id === id);
}
