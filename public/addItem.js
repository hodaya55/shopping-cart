

var addProduct = function (name, price, src) {
    console.log('Im in add product');

    $('#name').css('border-color', 'gray');
    $('#price').css('border-color', 'gray');
    $('#src').css('border-color', 'gray');

    var s1 = '<div class="col-md-4"> ' +
        '<div class="card-container"> ';
    var s2 = '<div class="card item" item data-name="' + name + '" data-price="' + price + '"> ';
    var s3 = '<div class="pricebox"> ' +
        '<p class="price"> $' + price + '</p>';
    var s4 = '  </div><div class="buybox"> <p class="add-to-cart"> ADD TO CART </p> </div>';
    var s5 = '<div class="card-inner">' +
        ' <img src="' + src + '" class="proimage">';
    var s6 = '  <img  class="proimage"> </div>  </div> </div> </div> ';

    $('.container').append(s1 + s2 + s3 + s4 + s5 + s6);

}

$('#AddBtn').click(function () {
    var name = $('#name').val();
    var src = $('#src').val();
    var price = $('#price').val();

    // if (name === '' && price === '' && src==='') {
    //     $('#name').css('border-color', 'red');
    //     $('#price').css('border-color', 'red');
    //     $('#src').css('border-color', 'red');
    // }
    // else if (price === '' && src===''){
    //     $('#price').css('border-color', 'red');
    //     $('#src').css('border-color', 'red');
    // }
    // else if (name === '')
    //     $('#name').css('border-color', 'red');

    // else // all is filled
    // {
    //     var productArray = $('.container').find('.card.item');
    //     // check if the product name is already exist - then display error message
    //     // otherwise - add the product to the page
    //     for (var i = 0; i < productArray.length; i++)
    //         if (productArray[i].dataset.name === name) {
    //             // empty the input of name and display error message
    //             $('#name').val('');
    //             $("#msgError").css("display", "block").fadeOut(4000);
    //             return;
    //         }

    //    // when all is o.k
    //     addProduct(name, price, src);
    // }

    $('#name').css('border-color', 'gray');
    $('#price').css('border-color', 'gray');
    $('#src').css('border-color', 'gray');

    // all is filled
    if (name !== '' && price !== '' && src !== '') {
        var productArray = $('.container').find('.card.item');
        // check if the product name is already exist - then display error message
        // otherwise - add the product to the page
        for (var i = 0; i < productArray.length; i++)
            if (productArray[i].dataset.name === name) {
                // empty the input of name and display error message
                $('#name').val('');
                $("#msgError").css("display", "block").fadeOut(4000);
                return;
            }

        // when all is o.k
        addProduct(name, price, src);
    }
    else if (price !== '' && src !== '') { //  name empty
        $('#name').css('border-color', 'red');
    }
    else if (price !== '' && name !== '') { // src empty
        $('#src').css('border-color', 'red');
    }
    else if (src !== '' && name !== '') { // price empty
        $('#price').css('border-color', 'red');
    }
    else if (price !== '') { //  name & src empty
        $('#name').css('border-color', 'red');
        $('#src').css('border-color', 'red');
    }
    else if (name !== '') { // price & src empty
        $('#price').css('border-color', 'red');
        $('#src').css('border-color', 'red');
    }
    else // all is empty
    {
        $('#name').css('border-color', 'red');
        $('#price').css('border-color', 'red');
        $('#src').css('border-color', 'red');

    }

});


$('.view-form').on('click', function () {
    // hide/show the form of adding new product
    $('.addProduct-form').toggleClass('show');
});

