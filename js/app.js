'use strict';

let renderMerch = function() {
  let merch = document.getElementById('merchandise');

  let div = document.createElement('div');
  div.setAttribute('class', 'shopItem');
  merch.appendChild(div);

  let img = document.createElement('img');
  img.setAttribute('src', this.image);
  div.appendChild(img);

  let h3 = document.createElement('h3');
  h3.textContent = this.product;
  div.appendChild(h3);

  let description = document.createElement('p');
  description.textContent = this.description;
  div.appendChild(description);

  let price = document.createElement('p');
  price.setAttribute('class', 'price');
  price.textContent = this.price;
  div.appendChild(price);
};

const MERCH = function(product, image, description, price) {
  this.product = product;
  this.image = image;
  this.description = description;
  this.price = price;
};

MERCH.prototype.render = renderMerch;

let tShirt = new MERCH('T-shirt', './images/shirt.jpg', 'Our Salmon Cookies t-shirts come in multiple sizes!', '$15.00');
let pants = new MERCH('Pants', './images/pants.jpg', 'Our Salmon Cookies pants come in multiple sizes!', '$20.00');
let socksMen = new MERCH('Socks - men', './images/socks-male.jpg', 'Our Salmon Cookies socks come in multiple sizes!', '$10.00');
let socksFemale = new MERCH('Socks - female', './images/socks-female.jpg', 'Our Salmon Cookies t-shirts come in multiple sizes!', '$15.00');
let jacket = new MERCH('Jacket', './images/jacket.jpg', 'Our Salmon Cookies pants come in multiple sizes!', '$20.00');
let watch = new MERCH('Watch', './images/watch.jpg', 'Our Salmon Cookies socks come in multiple sizes!', '$10.00');
let poster = new MERCH('Poster', './images/poster.jpg', 'Our Salmon Cookies socks come in multiple sizes!', '$10.00');

tShirt.render();
pants.render();
socksMen.render();
socksFemale.render();
jacket.render();
watch.render();
poster.render();
