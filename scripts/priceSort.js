// Given an array of array of products
// Sort the array by price.

var products = [
    { name: 'Basketball', price: 12.00 },
    { name: 'Tennis Racquet', price: 66.00 },
    { name: 'Tennis Balls', price: 9.00 },
    { name: 'Tennis Balls', price: 9.00 }
  ];
  
  products.sort(function(a, b) {
      return a.price - b.price;
  });
  
  console.log(products);