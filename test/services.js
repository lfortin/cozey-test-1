const assert = require("node:assert");
const {
  getOrders,
  getProducts,
} = require("../services/services");

describe("services", () => {
  describe("getOrders", () => {
    it("should return formatted orders json", async () => {
      const orders = await getOrders();
      assert.ok(orders[0].id, "order id expected");
      assert.ok(orders[0].date, "date expected");
      assert.ok(orders[0].address, "address expected");
      assert.ok(orders[0].customerName, "customerName expected");
      assert.ok(orders[0].customerEmail, "customerEmail expected");
      assert.ok(orders[0].items[0].id, "item id expected");
      assert.ok(orders[0].items[0].name, "item name expected");
    });
  });
  describe("getProducts", () => {
    it("should return formatted products json", async () => {
      const products = await getProducts();
      assert.ok(products[0].id, "id expected");
      assert.ok(products[0].name, "name expected");
      assert.ok(products[0].quantity, "quantity expected");
    });
  });
});
