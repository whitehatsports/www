var domain = "nfdn.whitehatsports.com";
var url = "http://" + domain + '/scpt/add_shoppingcart_item.php';

//alert(document.domain);

var myurl = "http://nfdn.whitehatsports.com/scpt/add_shoppingcart_item.php?product_id=5443";

// As per XMLHttpRequest level 2, browsers allow cross-origin GETs to be sent without preflighting, but don't allow the results to be read from the response unless the remote domain opts in. There is no additional vulnerability here because you can already cause a GET to an arbitrary URL to be sent (including query string, for what it's worth) through multiple more basic interfaces.

// For example you have always been able to create an <img> element with its src set to an address on a remote domain; taking away that cross-domain ability would break a lot of the existing web.




// "http://httpstat.us/400",

// dealer_id 744
// shopping_cart_id 202974
// dealer_location_id 744

$(document).ready(function(){


    $('#addProduct').submit(function() {
        alert('Handler for .submit() called.');
        return false;
    });


    $("formX").submit(function() {

        /* Request an HTTP 400 */
        $.ajax({
            url: url, 
            statusCode: {
                200: function() {
                    console.log("HTTP 200 received");
                },
                400: function() {
                    console.log("HTTP 400 received");
                }
            }
        });
        /* stop the form submission */
        return false;
    });
   

});


addProduct = function(productId) {


    $.ajax({
        type: "POST",
        url: myurl,
        async: false,
        dataType: "xml",
        global: false
        // success: function(result) {
        //     if(result.isOk == false)
        //         alert(result.message);
        // }
        
    });

    // var result = $.post(myurl);
    // alert( result.responseText );

    // data: { product_id: productId }
    //function processData(data){
    //    alert(data);
   // }


    // //document.domain = domain;

    // $.ajax({
    //     url: url,
    //     data: { product_id: productId },
    //     type: "GET",
    //     dataType: "jsonp",
    //     //jsonpCallback: "success",
    //     error: function(xhr, ajaxOptions, thrownError) {
    //         alert(xhr.status);
    //         alert(thrownError);
    //     }

    // });
    
    // function callback (data, textStatus, jqXHR) { 
    //     alert(data) 
    // }

    //$.getJSON(url + "?callback=?", null, function(data) {
    //    alert(data);
// 
//    });

}



// $(document).ready(function () {
//      $.getJSON(url, {product_id: 5442});
//  });
