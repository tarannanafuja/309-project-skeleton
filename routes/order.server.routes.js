 module.exports = function(app){
 
 var orders = require('./../controllers/order.server.controller.js');
  var products = require('./../controllers/products.server.controller.js');
 var users = require('./../controllers/users.server.controller.js');
 
 
 app.route('/orders/:productId').get(orders.orderByID);
 
app.route('/product/orders/all')
    .get(orders.orderlist);
 
 app.route('/api/orders')
	.get(orders.list)
	.post(orders.create);

  app.route('/api/orders/:orderId')
	.get(orders.read)
  .delete(orders.delete);

	app.route('/api/orders/edit/:ordrId')
	.get(orders.read)
	.put( orders.update);



app.param('orderId', orders.orderByID);
 
 
 }