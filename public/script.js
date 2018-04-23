// an array with all of our cart items
var cart = [];

var _countItemInArr = function (name) {
  var count = 0;
  for (var i = 0; i < cart.length; ++i) {
    if (cart[i].name === name)
      count++;
  }
  return count;
}

var updateCart = function () {
  // Write this function. In this function we render the page.
  // Meaning we make sure that all our cart items are displayed in the browser.
  // Remember to empty the "cart div" before you re-add all the item elements.

  $('.cart-list').empty();

  var total = 0;
  for (var i in cart) {
    if (cart[i].amount !== 1)
      $('.cart-list').append('<span>' + cart[i].name + ' - $' + cart[i].price * cart[i].amount + ' (' + cart[i].amount + ')' + ' </span> <br>');
    else
      $('.cart-list').append('<span>' + cart[i].name + ' - $' + cart[i].price + ' </span> <br>');

    total += cart[i].price * cart[i].amount;
  }

  $('.total').text(total);

}


var addItem = function (item) {
  // Write this function. Remember this function has nothing to do with display. 
  // It simply is for adding an item to the cart array, no HTML involved - honest ;-)

  cart.push(item);
  console.log(cart);
}

var clearCart = function () {
  // Write a function that clears the cart ;-)
  $('.total').text(0); // set back the total to $ 0
  cart.length = 0; // empty all the cart array 
  $('.cart-list').empty(); // empty the cartlist from page
}

$('.view-cart').on('click', function () {
  // hide/show the shopping cart!

  $('.shopping-cart').toggleClass('show');
});

var _findIndex = function (name) {
  for (var i in cart) {
    if (name === cart[i].name) {
      return i;
    }
  }
  return -1;
}

$('.add-to-cart').on('click', function () {
  //  get the "item" object from the page
  var $clickedItem = $(this).closest('.card.item');

  // check if item exist
  var index = _findIndex($clickedItem.data().name);
  if (index !== -1) // the item is already in array cart
    cart[index].amount++;
  else // the item is not exist in array cart yet
  {
    var item = {
      name: $clickedItem.data().name,
      price: $clickedItem.data().price,
      amount: 1
    }
    addItem(item); // add to cart array
  }

  updateCart();
});

$('.clear-cart').on('click', function () {
  clearCart();
});

// update the cart as soon as the page loads!
updateCart();

// when the web page is max-width 740px
$('.navbar-toggle.collapsed').on('click', function () {
  $('.view-cart').css('display', 'none');
  $('.nav.navbar-nav.navbar-right').css('display', 'none');
  $('.shopping-cart').toggleClass('show');
})