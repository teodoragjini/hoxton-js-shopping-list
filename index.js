let shoppingList = [
  {
    product: "Milk",
    price: 1.2,
  },

  {
    product: "Cocoa",
    price: 2.0,
  },

  {
    product: "Salad",
    price: 2.0,
  },

  {
    product: "Carrots",
    price: 2.0,
  },

  {
    product: "Tomatoes",
    price: 2.5,
  },

  {
    product: "Ready meals",
    price: 5.0,
  },
];

let product = prompt("What is the name of the item?");
let price = Number(prompt("What is the price?"));

// @ts-ignore 

shoppingList.push({
 product: product,
  price: price,
});

let total = 0;
for (let item of shoppingList) {
  console.log(`
    ${item.product}
    costs $${item.price.toFixed(2)}
    `);

  total += item.price;
}

console.log(`$${total.toFixed(2)}`);
