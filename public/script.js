var STORAGE_ID = 'shoppingCart';

var ShoppingCartApp = function () {

  // an array with all of our cart items
  var cart = [];

  // This will stringify and save our entire cart array.
  var _saveToLocalStorage = function () {
    localStorage.setItem(STORAGE_ID, JSON.stringify(cart));
  };

  // This will get our cart array out of local storage and convert them back to JS objects
  // or, if none exists, it will simply return an empty array.
  var _getFromLocalStorage = function () {
    return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
  };



  var _findIndex = function (name) {
    for (var i in cart) {
      if (name === cart[i].name) {
        return i;
      }
    }
    return -1;
  };

  var updateCart = function () {
    // In this function we render the page.
    // Meaning we make sure that all our cart items are displayed in the browser.
    // we empty "cart div" before we re-add all the item elements.

    $('.cart-list').empty();

    var total = 0;
    for (var i in cart) {
      var trash = '<a role="button" class="remove-item" data-id=' + i + '> <i class="fa fa-trash"></i> </a> </p>';
      if (cart[i].amount !== 1)
        $('.cart-list').append('<p class="cart-item"> ' + cart[i].name + ' (' + cart[i].amount + ')' +
          ' - $' + cart[i].price + trash);
      else
        $('.cart-list').append('<p class="cart-item">' + cart[i].name +
          ' - $' + cart[i].price + trash);

      total += cart[i].price * cart[i].amount;
    }
    $('.total').text(total);
  };

  var addItem = function (clickedItem) {
    // check if item exist
    var index = _findIndex(clickedItem.data().name);
    if (index !== -1) {
      cart[index].amount++;

    } else {
      var item = {
        name: clickedItem.data().name,
        price: clickedItem.data().price,
        amount: 1
      };
      //adding an item to the cart array
      cart.push(item);
    }
    // store
    _saveToLocalStorage();
  };

  var removeItem = function (index) {
    if (cart[index].amount === 1)
      cart.splice(index, 1);
    else
      cart[index].amount--;

    _saveToLocalStorage();
  };



  var clearCart = function () {
    $('.total').text(0); // set back the total to $ 0
    cart.length = 0; // empty all the cart array
    $('.cart-list').empty(); // empty the cartlist from page
    // store
    _saveToLocalStorage();
  };

  // update cart from local storage soon as the page loads
  cart = _getFromLocalStorage();

  return {
    clearCart: clearCart,
    updateCart: updateCart,
    addItem: addItem,
    removeItem: removeItem
  };

};

var app = ShoppingCartApp();
// update the cart as soon as the page loads!
app.updateCart();

/***** event listeners: *****/
$('.cart-list').on('click', '.remove-item', function () {
  var index = $(this).data().id;
  app.removeItem(index);
  app.updateCart();
});

$('.container').on('click', '.add-to-cart', function () {
  // get the "item" object from the page
  // if the item name is already in the array - update its amount
  // otherwise - add new item into cart array
  var $clickedItem = $(this).closest('.card.item');
  app.addItem($clickedItem); // add to cart array
  app.updateCart();
});

$('.clear-cart').on('click', function () {
  app.clearCart();
});


$('.view-cart').on('click', function () {
  // hide/show the shopping cart!
  $('.shopping-cart').toggleClass('show');
});

// When burger-menu is clicked
$('.cart').on('click', function () {
  $('.shopping-cart').toggleClass('show');
});

