//blank array to push accessories to
var accessories = [];

//Constructor function for list of accessories
function Accessory(name, image, requirements, color, stock, price) {
  this.name = name;
  this.image = image;
  this.requirements = requirements;
  this.color = color;
  this.stock = stock;
  this.price = price;

  //push each new Accessory method to the accessories array
  accessories.push(this);

}

//List of Accessories
new Accessory('Airpods', 'img/airpods.png', 'Bluetooth required', 'White', 8, '$164.99');
new Accessory('Samsung Case', 'img/samsung-case.png', 'GalaxyS9 required', 'Pink', 7, '$34.99');
new Accessory('Samsung Charger', 'img/samsung-charger.png', 'No requirements', 'Black', 16, '$11.49')
new Accessory('Earbuds', 'img/earbuds.png', 'Headphone jack', 'Blue', 14, '$10.99');
new Accessory('iPhone Case', 'img/iphone-x-case-red.png', 'iPhoneX required', 'Red', 7, '$34.99');
new Accessory('iPhone Charger', 'img/iphone-charger.png', 'iPhone5 & up', 'White', 20, '$14.99');
new Accessory('Chargable Case', 'img/juice-pack.png', 'iPhone 6 only', 'Green', 4, '$17.99');
new Accessory('External Backup Charger', 'img/external-charger.png', 'No requirements', 'Orange', 3, '$26.49');
new Accessory('Wireless Charger', 'img/wireless-charger.png', 'Phone needs wireless charging capabilities', 'Black', 5, '$44.99');

//create container for HTML to live in
var containerDiv = document.createElement('div');
document.body.appendChild(containerDiv);
containerDiv.className = 'container-fluid text-dark';
//create row inside the container, for accessories columns to live in
var rowDiv = document.createElement('div');
containerDiv.appendChild(rowDiv);
rowDiv.className = 'row align-items-center justify-content-center p-5';

//Loop through accessories & print HTML
for (var i = 0; i < accessories.length; i++) {
  //create a new column
  var columnDiv = document.createElement('div');
  rowDiv.appendChild(columnDiv);
  columnDiv.className = 'col-md-3 m-2 border border-secondary bg-light rounded align-items-center justify-content-center hvr-bob animated flipInY';
  columnDiv.style = 'min-height: 600px;'
  //create h2 for Name Header
  var h2 = document.createElement('h2');
  columnDiv.appendChild(h2);
  h2.innerHTML = accessories[i].name;
  h2.className = 'text-center text-dark';
  //create image
  var img = document.createElement('img');
  h2.appendChild(img);
  img.className = 'img-fluid border-light rounded';
  img.src = accessories[i].image;
  img.style = 'min-height: 400px';
  //create list of specifications
  var h5 = document.createElement('h5');
  columnDiv.appendChild(h5);
  h5.className = 'text-left';
  h5.innerHTML = 'Requirements:<h4> ' + accessories[i].requirements + '</h4>  Color:<h4> ' + accessories[i].color + '</h4>In Stock:<h4> ' + accessories[i].stock + '<br></h4><h3 class="text-center mt-4 align-items-center justify-content-center text-danger">' + accessories[i].price + '</h3>';
  //create button
  var buyNow = document.createElement('button');
  buyNow.className = 'btn-lg btn-primary hvr-grow';
  buyNow.style = '    margin: 7px auto; display: inherit;'
  buyNow.innerHTML = 'Buy Now';
  columnDiv.appendChild(buyNow);
}
