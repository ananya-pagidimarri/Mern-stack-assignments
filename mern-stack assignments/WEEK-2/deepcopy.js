const order = {
                  orderId: "ORD1001",
                  customer: {
                    name: "Anita",
                    address: {
                      city: "Hyderabad",
                      pincode: 500085
                    }
                  },
                  items: [
                    { product: "Laptop", price: 70000 }
                  ]
                };
//Create a deep copy of order
deepcopy={...order}
//change customer.address.city
deepcopy.customer.address.city="andhra pradesh"
console.log(deepcopy)
//items[0].price
deepcopy.items[0].price=65000
console.log(deepcopy)