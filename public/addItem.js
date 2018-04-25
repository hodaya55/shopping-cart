
var addProduct = function () {
    console.log('Im in add product');

    var name = $('#name').val();
    var src = $('#src').val();
    var price = $('#price').val();

    {
        var s1 = '<div class="col-md-4"> ' +
            '<div class="card-container"> ';
        var s2 = '<div class="card item" item data-name=" ' + name + '" data-price="' + price + '"> ';
        var s3 = '<div class="pricebox"> ' +
            '<p class="price"> $' + price + '</p>';
        var s4 = '  </div><div class="buybox"> <p class="add-to-cart"> ADD TO CART </p> </div>';
        var s5 = '<div class="card-inner">' +
            ' <img src="' + src + '" class="proimage">';
        var s6 = '  <img  class="proimage"> </div>  </div> </div> </div> ';

        $('.container').append(s1 + s2 + s3 + s4 + s5 + s6);
    }

}

$('#AddBtn').click(addProduct);