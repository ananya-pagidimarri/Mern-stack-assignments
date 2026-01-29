import { reduceStock } from './product.js';
import { getCartItems, getCartTotal, clearCart } from './cart.js';
import { applyDiscount } from './discount.js';

export function validatePaymentMethod(method) {
    const validMethods = ['card', 'upi', 'cod'];
    return validMethods.includes(method.toLowerCase());
}

function generateOrderId() {
    return 'ORD' + Date.now();
}

export function processPayment(paymentMethod, couponCode = null) {
    // 1. Get cart items and total
    const cartItems = getCartItems();
    const subtotal = getCartTotal();

    // 2. Apply discount if coupon provided
    let discount = 0;
    let finalTotal = subtotal;
    let discountDetails = null;
    if (couponCode) {
        const discountResult = applyDiscount(subtotal, couponCode, cartItems);
        finalTotal = discountResult.finalTotal;
        discount = discountResult.discount;
        discountDetails = discountResult.message;
    }

    // 3. Validate payment method (card/upi/cod)
    if (!validatePaymentMethod(paymentMethod)) {
        return {
            status: 'failed',
            message: 'Invalid payment method.'
        };
    }

    // 4. Process payment (simulate)

    const paymentStatus = 'success';

    if (paymentStatus === 'success') {
        // 5. Reduce stock for all items
        cartItems.forEach(item => {
            reduceStock(item.productId, item.quantity);
        });

        // 6. Clear cart
        clearCart();

        // 7. Generate order summary
        const orderSummary = {
            orderId: generateOrderId(),
            items: cartItems,
            subtotal,
            discount,
            total: finalTotal,
            paymentMethod,
            status: 'success',
            message: discountDetails ? `Payment successful. ${discountDetails}` : 'Payment successful.'
        };
        return orderSummary;
    } else {
        return {
            status: 'failed',
            message: 'Payment processing failed.'
        };
    }
}