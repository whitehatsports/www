// this is a test


// keep your markup clean; 
// you must until doc is ready before you can bind to events
// http://stackoverflow.com/questions/3498492/javascriptvoid0-vs-return-false-vs-preventdefault

// rather than writing in a vacuum; write to an audience
// poll on HN if anyone wants to participate

// today build the music app and announce plan on Monday


// TODO: it doesn't create the cart cookie until you add something via the web page. Why?

// make hidden iframe target of form submission
// http://ctrlq.org/code/19233-submit-forms-with-javascript


var url = "http://nfdn.whitehatsports.com/scpt/add_shoppingcart_item.php";

//var productId = 99010;
//var productId = 68817;
var productId = 101781;


window.myCallback = function(data) {
     //console.log(data);
    JSON.stringify(data);
}


//document.domain = document.domain;

// reload, reload, reload, click almost works (maybe cookies have to be set in order)
// I get the response header NFDNetwork=2023270 cookie; 
// maybe this best be done server side

// http://stackoverflow.com/questions/6046008/jsonp-request-returning-error-uncaught-syntaxerror-unexpected-token
// http://stackoverflow.com/questions/2067472/what-is-jsonp-all-about (GOOD!)

// setting crossDomain true worked! -- verify this is really needed


// try also getJSON().always()
// http://api.jquery.com/jQuery.getJSON/

// The jqXHR Object

// The jQuery XMLHttpRequest (jqXHR) object returned by $.ajax() as of jQuery 1.5 is a superset of the browser's native XMLHttpRequest object. For example, it contains responseText and responseXML properties, as well as a getResponseHeader() method. When the transport mechanism is something other than XMLHttpRequest (for example, a script tag for a JSONP request) the jqXHR object simulates native XHR functionality where possible.

// As of jQuery 1.5.1, the jqXHR object also contains the overrideMimeType() method (it was available in jQuery 1.4.x, as well, but was temporarily removed in jQuery 1.5). The .overrideMimeType() method may be used in the beforeSend() callback function, for example, to modify the response content-type header:

// $.ajax({
//   url: "http://fiddle.jshell.net/favicon.png",
//   beforeSend: function ( xhr ) {
//     xhr.overrideMimeType("text/plain; charset=x-user-defined");
//   }
// }).done(function ( data ) {
//   if( console && console.log ) {
//     console.log("Sample of data:", data.slice(0, 100));
//   }
// });


// jqXHR.always(function(data|jqXHR, textStatus, jqXHR|errorThrown) { });
// An alternative construct to the complete callback option, the .always() method replaces the deprecated .complete() method.

// Assign handlers immediately after making the request,
// and remember the jqxhr object for this request
// var jqxhr = $.ajax( "example.php" )
//     .done(function() { alert("success"); })
//     .fail(function() { alert("error"); })
//     .always(function() { alert("complete"); });
 
// perform other work here ...
 
// Set another completion function for the request above
// jqxhr.always(function() { alert("second complete"); });

// http://api.jquery.com/jQuery.ajax/

addProduct = function() {

    $.ajax({
        url: url,
        type: "GET",
        data: {product_id: productId},
        dataType: "jsonp html json",
        crossDomain: true,
        contentType: "application/json",
        jsonp: 'myCallback',
        async: false,
        jsonpCallback: 'myCallback',
        //converters: {"html jsonp": $.parseJSON},
        success: function(data, textStatus, jqXHR) { 
            console.log('Success!'); 
            console.log(myCallback(data)); 
            console.log(textStatus);},
        error: function(jqXHR, textStatus, errorThrown) {
            // The docs say...
            // Note: This handler is not called for cross-domain script and 
            // cross-domain JSONP requests.
            // However, this is being called here.
            console.log(JSON.stringify(jqXHR));
            console.log(textStatus);
            console.log(errorThrown);
        }
        //error: function(data) { console.log('Uh Oh!'); console.log(data.status); }
        });

}


$(document).ready(function () {

    $('#addProduct').submit(
        function(event) {
            event.preventDefault();
        }
    );


    $('.add_to_cart').click(
        function() {
            addProduct($(this));
            return false;
        }        
    );

});









