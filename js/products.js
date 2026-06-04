/**
 * FARM2HOME - PRODUCTS DATA
 * Contains all product information for the store
 */

const PRODUCTS = [
    {
        id: 1,
        name: "Free-Range Whole Chicken",
        category: "chicken",
        price: 14.99,
        originalPrice: 18.99,
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop",
        description: "Farm-fresh whole chicken raised on open pasture. Juicy, tender, and perfect for roasting or slow cooking.",
        rating: 4.9,
        inStock: true
    },
    {
        id: 2,
        name: "Boneless Skinless Chicken Breast",
        category: "chicken",
        price: 9.49,
        originalPrice: 12.49,
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=500&fit=crop",
        description: "Lean, high-protein chicken breast fillets, trimmed and ready to cook. Ideal for grilling and healthy meals.",
        rating: 4.8,
        inStock: true
    },
    {
        id: 3,
        name: "Chicken Thighs - Bone-In",
        category: "chicken",
        price: 7.99,
        originalPrice: 9.99,
        image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=500&h=500&fit=crop",
        description: "Juicy bone-in chicken thighs with rich flavor. Perfect for braising, baking, or slow cooking.",
        rating: 4.7,
        inStock: true
    },
    {
        id: 4,
        name: "Chicken Drumsticks",
        category: "chicken",
        price: 6.99,
        originalPrice: 8.99,
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&h=500&fit=crop",
        description: "Tender chicken drumsticks ideal for grilling, frying, or roasting with bold seasonings.",
        rating: 4.8,
        inStock: true
    },
    {
        id: 5,
        name: "Chicken Wings Pack",
        category: "chicken",
        price: 8.49,
        originalPrice: 10.99,
        image: "https://images.unsplash.com/photo-1518976024611-48933e6f1b49?w=500&h=500&fit=crop",
        description: "Crispy wing sections ready for your favorite sauces. Great for appetizers, parties, and game day.",
        rating: 4.9,
        inStock: true
    },
    {
        id: 6,
        name: "Chicken Tenderloins",
        category: "chicken",
        price: 10.99,
        originalPrice: 13.99,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&h=500&fit=crop",
        description: "Soft, juicy tenderloins for quick stovetop or air-fryer meals. Perfect for wraps and salads.",
        rating: 4.8,
        inStock: true
    },
    {
        id: 7,
        name: "Chicken Cutlets",
        category: "chicken",
        price: 9.99,
        originalPrice: 12.49,
        image: "https://images.unsplash.com/photo-1562967916-eb82221dfb27?w=500&h=500&fit=crop",
        description: "Thin-sliced chicken cutlets for easy pan-searing or breading. Fast, flavorful, and versatile.",
        rating: 4.7,
        inStock: true
    },
    {
        id: 8,
        name: "Organic Chicken Sausages",
        category: "chicken",
        price: 8.99,
        originalPrice: 11.49,
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=500&fit=crop",
        description: "Herb-seasoned chicken sausages made from organic poultry. Great for breakfast or grilling.",
        rating: 4.8,
        inStock: true
    },
    {
        id: 9,
        name: "Chicken Burgers",
        category: "chicken",
        price: 11.49,
        originalPrice: 14.49,
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&h=500&fit=crop",
        description: "Juicy chicken burger patties seasoned for rich flavor. Grill or pan-fry for a delicious sandwich.",
        rating: 4.9,
        inStock: true
    },
    {
        id: 10,
        name: "Chicken Kebabs",
        category: "chicken",
        price: 12.99,
        originalPrice: 15.99,
        image: "https://images.unsplash.com/photo-1548222316875-1b2ea11821f8?w=500&h=500&fit=crop",
        description: "Marinated chicken kebabs ready for skewering and grilling. Great for family gatherings.",
        rating: 4.8,
        inStock: true
    },
    {
        id: 11,
        name: "Smoked Chicken Breast",
        category: "chicken",
        price: 13.49,
        originalPrice: 16.49,
        image: "https://images.unsplash.com/photo-1605475124686-83b51ed8ad9f?w=500&h=500&fit=crop",
        description: "Smoked chicken breast with a savory, rich flavor. Perfect for sandwiches or chef-style salads.",
        rating: 4.7,
        inStock: true
    },
    {
        id: 12,
        name: "Garlic Herb Chicken",
        category: "chicken",
        price: 12.49,
        originalPrice: 15.49,
        image: "https://images.unsplash.com/photo-1481931715705-36f42a255c40?w=500&h=500&fit=crop",
        description: "Garlic and herb-marinated chicken pieces ready for roasting or grilling with bold flavors.",
        rating: 4.8,
        inStock: true
    },
    {
        id: 13,
        name: "Spicy Buffalo Chicken Wings",
        category: "chicken",
        price: 8.99,
        originalPrice: 11.49,
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&h=500&fit=crop",
        description: "Spicy buffalo-style chicken wings made for flavor lovers. Great for snacking and sharing.",
        rating: 4.8,
        inStock: true
    },
    {
        id: 14,
        name: "Honey Glazed Chicken Thighs",
        category: "chicken",
        price: 11.99,
        originalPrice: 14.99,
        image: "https://images.unsplash.com/photo-1514516870926-9d65a18b191b?w=500&h=500&fit=crop",
        description: "Sweet honey glazed thighs with tender meat and crisp edges. Ideal for family dinners.",
        rating: 4.9,
        inStock: true
    },
    {
        id: 15,
        name: "Chicken Parmesan Cutlets",
        category: "chicken",
        price: 12.99,
        originalPrice: 16.49,
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=500&fit=crop",
        description: "Breaded chicken cutlets ready for broiling with cheese and tomato sauce. Classic Italian comfort food.",
        rating: 4.8,
        inStock: true
    },
    {
        id: 16,
        name: "BBQ Chicken Drumsticks",
        category: "chicken",
        price: 9.99,
        originalPrice: 12.99,
        image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=500&h=500&fit=crop",
        description: "Sweet and smoky barbecue chicken drumsticks perfect for backyard grilling and meals.",
        rating: 4.7,
        inStock: true
    },
    {
        id: 17,
        name: "Boneless Chicken Thighs",
        category: "chicken",
        price: 10.49,
        originalPrice: 13.49,
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=500&fit=crop",
        description: "Boneless thighs with rich flavor and tender texture. Great for stir-fries and skillet dishes.",
        rating: 4.8,
        inStock: true
    },
    {
        id: 18,
        name: "Lemon Pepper Chicken Breast",
        category: "chicken",
        price: 10.99,
        originalPrice: 13.99,
        image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=500&h=500&fit=crop",
        description: "Zesty lemon pepper chicken breast for a bright, flavorful meal. Ready to sauté or grill.",
        rating: 4.9,
        inStock: true
    },
    {
        id: 19,
        name: "Chicken Bone Broth",
        category: "chicken",
        price: 7.49,
        originalPrice: 9.49,
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&h=500&fit=crop",
        description: "Rich, nourishing chicken bone broth slow-simmered for depth of flavor and wellness benefits.",
        rating: 4.8,
        inStock: true
    },
    {
        id: 20,
        name: "Chicken Nuggets",
        category: "chicken",
        price: 8.49,
        originalPrice: 10.49,
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=500&fit=crop",
        description: "Crispy chicken nuggets made from premium poultry, perfect for snacks and quick meals.",
        rating: 4.8,
        inStock: true
    }
];

const PLACEHOLDER_IMAGE = 'https://images.unsplash.com/photo-1495195134817-aeb325a55b65?w=500&h=500&fit=crop';
PRODUCTS.forEach(product => {
    if (!product.image) {
        product.image = PLACEHOLDER_IMAGE;
    }
});

console.log('Loaded PRODUCTS:', PRODUCTS.length);

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
