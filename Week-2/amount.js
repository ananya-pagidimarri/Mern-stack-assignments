let total = 0;

function add(a) {
    return a;
}

function addToTotal(b) {
    return b;
}

function dis(totalAmount) {
    let discount = totalAmount * 18 / 100;  // 18% discount
    return discount;
}

total = add(500) + addToTotal(1200);
total = total - dis(total);

console.log(total);
