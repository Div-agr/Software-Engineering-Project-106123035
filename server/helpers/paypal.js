const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: 'sandbox',
  client_id: 'your_client_id_here',
  client_secret: 'your_client_secret_here'
});

module.exports = paypal;
