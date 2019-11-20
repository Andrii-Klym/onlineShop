$('.multi-carousel .carousel-item').each(function() {
    let next = $(this).next();
    if (!next.length) next = $(this).siblings(':first');
    next.children(':first-child').clone().appendTo($(this));
  });
  $('.multi-carousel .carousel-item').each(function() {
    let prev = $(this).prev();
    if (!prev.length) prev = $(this).siblings(':last');
    prev.children(':nth-last-child(2)').clone().prependTo($(this));
  });


// ;(function ( document, url, useXDR ) {

// 	let
// 	key = "basket-bootstrap",
// 	text,

// 	fetchBasket = function() {
// 	    // Enable the use of a CDN, even through IE8
// 		// Assumes the CDN sets Access-Control-Allow-* headers correctly
// 		if( !!useXDR && window.XDomainRequest ) {
// 			let xdr = new XDomainRequest();

// 			xdr.open("GET", url);

// 			xdr.onerror = function() {
// 				useXDR = false;
// 				fetchBasket();
// 			};

// 			xdr.onload = function() {
// 				setInjectScript(xdr.responseText);
// 			};

// 			xdr.send();
// 		}
// 		else {
// 			let xhr = new XMLHttpRequest();
// 			xhr.open( "GET", url, true );

// 			xhr.onreadystatechange = function() {
// 				if ( xhr.readyState === 4 ) {
// 					setInjectScript(xhr.responseText);
// 				}
// 			};

// 			xhr.send();
// 		}
// 	},

// 	setInjectScript = function( text ) {
// 		localStorage.setItem( key, text );
// 		injectScript( text );
// 	},

// 	injectScript = function( text ) {
// 		let
// 		script = document.createElement("script"),
// 		head = document.head || document.getElementsByTagName("head")[ 0 ];

// 		script.defer = true;
// 		// Have to use .text, since we support IE8,
// 		// which won't allow appending to a script
// 		script.text = text;

// 		head.appendChild( script );
// 	};

//  	text = localStorage.getItem( key );
// 	if(text) {
// 		injectScript( text );
// 	}
//  	else {
// 		fetchBasket();
// 	}

// }( document, "basket.js", false ));