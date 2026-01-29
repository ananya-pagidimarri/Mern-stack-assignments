import { getProductById, checkStock } from './product.js';
let cartItems = [];
export function addToCart(productId, quantity) {
    // 1. Get product details
    const product = getProductById(productId);
    if (!product) {
        return "Product not found.";
    }
    // 2. Check stock availability
    if (!checkStock(productId, quantity)) {
        return "Insufficient stock.";
    }
    // 3. Check if product already in cart
    //    - If yes, update quantity
    //    - If no, add new item
    const existingItem = cartItems.find(item => item.productId === productId);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cartItems.push({ productId, quantity });
    }
    // 4. Return success/error message
    return "Product added to cart successfully.";
}

export function removeFromCart(productId) {
    cartItems = cartItems.filter(item => item.productId !== productId);
}

export function getCartItems() {
    return cartItems.map(item => {
        const product = getProductById(item.productId);
        return {
            ...item,
            name: product.name,
            price: product.price
        };
    });
}

export function getCartTotal() {
    return cartItems.reduce((total, item) => {
        const product = getProductById(item.productId);
        return total + (product.price * item.quantity);
    }, 0);
}
export function updateQuantity(productId, quantity) {
    const item = cartItems.find(i => i.productId === productId);
    if (item) {
        item.quantity = quantity;
    }
}
export function clearCart() {
    cartItems = [];
}