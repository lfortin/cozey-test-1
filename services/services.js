const _ = require("lodash");
const shelfProducts = require("../data/products.json");
const items = require("../data/items.json");
const orders = require("../data/orders.json");

async function getOrders() {
  return orders.map(order => {
    const formattedOrder = { ...order };
    formattedOrder.items = order.items.map(orderItemId => {
      const shelfItem = _.find(items, (item) => item.id === orderItemId);
      return { id: orderItemId, name: shelfItem.name };
    });
    return formattedOrder;
  });
}

async function getProducts() {
  const products = {};
  const productList = [];
  // compute products here
  for (let order of orders) {
    for (let itemId of order.items) {
      const item = _.find(items, (item) => item.id === itemId);
      item.content.forEach((productId) => {
        products[productId] ||= 0;
        products[productId]++;
      });
    }
  }
  // generate list here
  for (let shelfProduct of shelfProducts) {
    if(products[shelfProduct.id]) {
      productList.push({
        id: shelfProduct.id,
        name: shelfProduct.name,
        quantity: products[shelfProduct.id],
      });
    }
  }

  return productList;
}

module.exports = {
  getOrders,
  getProducts,
};
