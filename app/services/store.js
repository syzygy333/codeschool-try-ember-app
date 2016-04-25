import Ember from 'ember';
import LineItem from 'woodland/models/line-item';
import Order from 'woodland/models/order';
import Product from 'woodland/models/product';

const products = [
  Product.create({
    title: 'Tent',
    price: 10,
    description: 'Sleeps 2',
    imageUrl: ''
  }),
  Product.create({
    title: 'Sleeping Bag',
    price: 5,
    description: 'Good to 30 degrees F',
    imageUrl: ''
  }),
  Product.create({
    title: 'Flashlight',
    price: 2,
    description: 'Light up your life',
    imageUrl: ''
  }),
  Product.create({
    title: 'First-aid Kit',
    price: 3,
    description: 'Stay not dead',
    imageUrl: ''
  })
];

const orders = [
  Order.create({
    id: '1234', name: 'Blaise Blobfish', items: [
      LineItem.create({product: products[0], quantity: 1}),
      LineItem.create({product: products[1], quantity: 1}),
      LineItem.create({product: products[2], quantity: 0}),
      LineItem.create({product: products[3], quantity: 0})
    ]
  }),
  Order.create({
    id: '5678', name: 'Arthur Anglerfish', items: [
      LineItem.create({product: products[0], quantity: 0}),
      LineItem.create({product: products[1], quantity: 2}),
      LineItem.create({product: products[2], quantity: 1}),
      LineItem.create({product: products[3], quantity: 1})
    ]
  })
];

export default Ember.Service.extend({
  getOrderById(id) {
    return orders.findBy('id', id);
  },
  getOrders() {
    return orders;
  },
  getProducts() {
    return products;
  },
  newOrder() {
    return Order.create({
      items: products.map((product) => {
        return LineItem.create({
          product: product
        });
      })
    });
  },
  saveOrder(order) {
    order.set('id', 9999);
    orders.pushObject(order);
  }
});
