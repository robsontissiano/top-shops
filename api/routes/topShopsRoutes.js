'use strict';
module.exports = function(app) {
  var topShop = require('../controllers/topShopController');

  // topShop Routes
  app.route('/shops')
    .get(topShop.list_all_shops);
    // .post(topShop.create_a_shop);


  app.route('/shops/:shopId')
    .get(topShop.read_a_shop);
    // .put(topShop.update_a_shop)
    // .delete(topShop.delete_a_shop);
};
