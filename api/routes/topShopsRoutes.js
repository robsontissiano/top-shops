'use strict';
module.exports = function(app) {
  var topShop = require('../controllers/topShopController');

  // topShop Routes
  app.route('/shop')
    .get(topShop.list_all_shop);
    // .post(topShop.create_a_shop);


  app.route('/shop/:shopId')
    .get(topShop.read_a_shop);
    // .put(topShop.update_a_shop)
    // .delete(topShop.delete_a_shop);
};
