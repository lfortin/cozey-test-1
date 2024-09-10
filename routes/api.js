var express = require('express');
var router = express.Router();

const { getOrders, getProducts } = require('../services/services');

router.get('/orders', async function(req, res, next) {
  const orders = await getOrders();
  res.type('json');
  res.send(JSON.stringify(orders));
});
router.get('/products', async function(req, res, next) {
  const products = await getProducts();
  res.type('json');
  res.send(JSON.stringify(products));
});

module.exports = router;

