
var addProduct = function () {
    console.log('Im in add product');

    var name = $('#name').val();
    var src = $('#src').val();
    var price = $('#price').val();

    $('#name').css('border-color', 'gray');
    $('#price').css('border-color', 'gray');

    console.log("name new prod: " + name);
    var productArray = $('.container').find('.card.item');
    // check if the product name is already exist - then display error message
    // otherwise - add the product to the page
    if (name !== '') {
        for (var i = 0; i < productArray.length; i++)
            if (productArray[i].dataset.name === name) {
                $('#name').css('border-color', 'red');
                document.getElementById("msgError").innerHTML = "This product name is already exist."
                return;
            }
    }
    else
        $('#name').css('border-color', 'red');

    if (price === '') {
        $('#price').css('border-color', 'red');
        return;
    }

    var s1 = '<div class="col-md-4"> ' +
        '<div class="card-container"> ';
    var s2 = '<div class="card item" item data-name="' + name + '" data-price="' + price + '"> ';
    var s3 = '<div class="pricebox"> ' +
        '<p class="price"> $' + price + '</p>';
    var s4 = '  </div><div class="buybox"> <p class="add-to-cart"> ADD TO CART </p> </div>';
    var s5 = '<div class="card-inner">' +
        ' <img src="' + src + '" class="proimage">';
    var s6 = '  <img  class="proimage"> </div>  </div> </div> </div> ';

    document.getElementById("msgError").innerHTML = " ";
    // $('#name').css('border-color', 'gray');
    // $('#price').css('border-color', 'gray');
    $('.container').append(s1 + s2 + s3 + s4 + s5 + s6);

}

$('#AddBtn').click(addProduct);



$('.view-form').on('click', function () {
    // hide/show the form of adding new product
    $('.addProduct-form').toggleClass('show');
});