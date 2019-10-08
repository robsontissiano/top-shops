'use strict';

exports.list_all_shops = function(req, res) {
  // Shop.find({}, function(err, shop) {

    const yelp = require('yelp-fusion');

    const apiKey = '8ZrKLjDVqCgbAL4uh736OZev15c-MIMuJ8kCDm1NfUDJ8vAItJwY2cWTamsslYXuFZG_SWm_O2GB8h-9asfrLQUtyBafmHe7fZmz0GP29dGa6sCK1B_tSfzy7qCAXXYx';

    const searchRequest = {
      term: 'ice cream shop',
      location: 'Alpharetta',
    };

    const client = yelp.client(apiKey);


    client.search(searchRequest)
      // .then((response) => {
      //     console.log(response.jsonBody);
      //     return response
      // })
      .then(function(result){
        console.log(result)
        res.json(result);
      })
      .catch((error) => {
          console.log(error);
      });

    // if (err)
    //   res.send(err);
    // res.json(shop);
  // });
};

exports.read_a_shop = function(req, res) {
    Shop.findById(req.params.shopId, function(err, shop) {
    if (err)
      res.send(err);
    res.json(shop);
  });
};

