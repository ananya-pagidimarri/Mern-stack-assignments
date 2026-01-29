const coupons = {
    'WELCOME10': { type: 'percentage', value: 10, minAmount: 1000 },
    'FLAT500': { type: 'flat', value: 500, minAmount: 5000 },
    'ELECTRONICS20': { type: 'percentage', value: 20, minAmount: 10000, category: 'electronics' }
};
export function validateCoupon(couponCode, cartTotal, cartItems) {
    // 1. Check if coupon exists
    const coupon = coupons[couponCode];
    if (!coupon) {
        return { valid: false, message: "Invalid coupon code." };
    }
    // 2. Check minimum amount requirement
    if (cartTotal < coupon.minAmount) {
        return { valid: false, message: `Minimum cart amount for this coupon is ₹${coupon.minAmount}.` };
    }
    // 3. Check category requirement (if any)
    if (coupon.category) {
        const hasCategoryItem = cartItems.some(item => item.category === coupon.category);
        if (!hasCategoryItem) {
            return { valid: false, message: `This coupon is applicable only on ${coupon.category} products.` };
        }
    }
    return { valid: true, message: "Coupon is valid." };
}
export function calculateDiscount(couponCode, cartTotal, cartItems) {
    const coupon = coupons[couponCode];
    if (!coupon) {
        return 0;
    }
    // Calculate discount based on type
    let discount = 0;
    if (coupon.type === 'percentage') {
        discount = (coupon.value / 100) * cartTotal;
    } else if (coupon.type === 'flat') {
        discount = coupon.value;
    }
    return discount;
}
export function applyDiscount(cartTotal, couponCode, cartItems) {
    // 1. Validate coupon
    const validation = validateCoupon(couponCode, cartTotal, cartItems);
    if (!validation.valid) {
        return {
            originalTotal: cartTotal,
            discount: 0,
            finalTotal: cartTotal,
            message: validation.message
        };
    }
    // 2. Calculate discount
    const discount = calculateDiscount(couponCode, cartTotal, cartItems);
    const finalTotal = cartTotal - discount;
    return {
        originalTotal: cartTotal,
        discount,
        finalTotal,
        message: `Coupon applied successfully! You saved ₹${discount}.`
    };
}   