'use strict';


// var mongoose = require('mongoose'),
//   Shop = mongoose.model('Shops');

exports.list_all_shops = function(req, res) {
  const yelp = require('yelp-fusion');

  const apiKey = '8ZrKLjDVqCgbAL4uh736OZev15c-MIMuJ8kCDm1NfUDJ8vAItJwY2cWTamsslYXuFZG_SWm_O2GB8h-9asfrLQUtyBafmHe7fZmz0GP29dGa6sCK1B_tSfzy7qCAXXYx';

  const searchRequest = {
    term: 'restaurants',
    location: 'Los Angeles',
  };

  const client = yelp.client(apiKey);

  client.search(searchRequest)
    .then((response) => {
      console.log(response.jsonBody);
      return response
    })
    .catch((error) => {
      console.log(error);
    });
}
// output should include
//     business name
//     business address (street, city)
//     excerpt from a review of that business
//     name of the person that wrote the review
//     business information should be output in the order received from the API response

// exports.list_all_shops = function(req, res) {
//   Shop.find({}, function(err, shop) {
//     if (err)
//       res.send(err);
//     res.json(shop);
//   });
// };



// exports.create_a_shop = function(req, res) {
//   var new_shop = new Shop(req.body);
//   Shop.save(function(err, shop) {
//     if (err)
//       res.send(err);
//     res.json(shop);
//   });
// };


exports.read_a_shop = function(req, res) {
    Shop.findById(req.params.shopId, function(err, shop) {
    if (err)
      res.send(err);
    res.json(shop);
  });
};


// exports.update_a_shop = function(req, res) {
//   Shop.findOneAndUpdate({_id: req.params.shopId}, req.body, {new: true}, function(err, shop) {
//     if (err)
//       res.send(err);
//     res.json(shop);
//   });
// };


// exports.delete_a_shop = function(req, res) {


//   Shop.remove({
//     _id: req.params.shopId
//   }, function(err, shop) {
//     if (err)
//       res.send(err);
//     res.json({ message: 'Shop successfully deleted' });
//   });
// };
