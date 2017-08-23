var x = 0;

$(document).ready(function(){

	$(window).scroll(function(){
  		//$("span").text(x+=1);
    	console.log($(window).scrollTop());
    	
    	if ($(window).scrollTop() >= 150){
    		console.log("YOOO!");
      		$("#navigationContainer").css("position", "fixed");
      		$("#navigationContainer").css("top", "0px");
      		$("#slideshow-container").css("margin-top", "215px");
      		$("#store-container").css("margin-top", "215px");
      		$("#events-container").css("margin-top", "215px");
    	}else if ($(window).scrollTop() <150){
    		$("#navigationContainer").css("position", "relative");
      		$("#navigationContainer").css("top", "150px");
      		$("#slideshow-container").css("margin-top", "150px");
      		$("#store-container").css("margin-top", "150px");
      		$("#events-container").css("margin-top", "150px");
    	};
  	});
	
	$(".nav-item").hover(
		function(){
			$(this).css("text-decoration", "underline");
		},
		function(){
			$(this).css("text-decoration", "none");
		});

	if ($("body").is(".home")){
		slideshow();
		$(".profile-picture").hover(
		function(){
			$(this).css("filter", "grayscale(0%)");
		},
		function(){
			$(this).css("filter", "grayscale(100%)");
		});	
	};
	
	if ($("body").is(".store")){
		displayProducts();
		
		$(".fa-shopping-cart").hover(
			function(){
				$(this).css("color", "gray");
			},
			function(){
				$(this).css("color", "black");
			});
	};
});


/*window.onload = slideshow();*/
/*window.onload = test();*/


var slideIndex = 0;


function slideshow() {
    var x = document.getElementsByClassName("slideshow-image");
    for (var i = 0; i < x.length; i++) {
      x[i].style.opacity = "0"; 
    }
    
    if (slideIndex === x.length){
    	slideIndex = 0;
    }

    console.log("Slideindex: " + slideIndex);
    console.log("length: " + x.length)
    x[slideIndex].style.display = "block";
	x[slideIndex].style.opacity= "1";
    
    slideIndex++;

    setTimeout(slideshow, 5000); // Change image every 2 seconds
}



//xxxxxxxxxxxxxxx Store scripts xxxxxxxxxxxxxxxxxxxxx
function product(name, sizes, colors, price, image) {
    this.name = name;
    this.sizes = sizes;
    this.colors = colors;
    this.price = price;
    this.image = image;
}

var iLoveTrickingGray = new product("I <3 Tricking", "S, M, L", ["gray", "white", "light gray"], "$20.00", "store\\ilovetrickinglightgray.jpg");
var trickingGray = new product("Tricking Flash", "S, M, L", ["gray"], "$20.00", "store\\trickinggray.jpg");
var trickingX3 = new product("Trickingx3", "S, M, L", ["gray"], "$30.00", "store\\trickinglongsleeve.jpg");
var keychain = new product("Keychain", "One-Size-Fits-All", ["gray"], "$8.00", "store\\keychain.jpeg");
var lanyard = new product("Lanyard", "One-Size-Fits-All", ["blue"], "$10.00", "store\\lanyard.jpg");
var snapback = new product("Snapback Hat", "One-Size-Fits-All", ["gray-blue"], "$25.00", "store\\snapbackhat.jpg");
var beanie = new product("Beanie", "One-Size-Fits-All", ["yellow-blue"], "$25.00", "store\\beanie.jpg");
var ovalSticker = new product("Oval Sticker", "One-Size-Fits-All", ["blue", "white"], "$5.00", "store\\ovalstickerblue.jpg");
var fighterSticker = new product("Fighter Sticker", "One-Size-Fits-All", ["red"], "$5.00", "store\\fightersticker.jpg")

var productList = [iLoveTrickingGray, trickingGray, trickingX3, keychain, lanyard, snapback, beanie, ovalSticker, fighterSticker];

function displayProducts(){
	console.log("Product list length: " + productList.length);

	var currentRow = 1;

	for (var i=0; i<productList.length; i++){
		console.log(productList[i]);

		//set images
		var imageTemp = document.createElement("img");

		//var elem = document.createElement("img");
		imageTemp.setAttribute("class", "item-image");
		imageTemp.setAttribute("id", "image-" + i);
		imageTemp.src = productList[i].image;

		//elem.setAttribute("src", "images/hydrangeas.jpg");
//elem.setAttribute("height", "768");
//elem.setAttribute("width", "1024");
//elem.setAttribute("alt", "Flower");

		document.getElementById("item-" + i).appendChild(imageTemp);

		//set item descriptions
		var itemDescriptionTemp = document.createElement("div");

		itemDescriptionTemp.setAttribute("class", "item-description");
		itemDescriptionTemp.setAttribute("id", "item-" + i + "-description");
		//document.getElementById("item-" + i).innerHTML=productList[i].name;
		//document.getElementById("item-" + i).innerHTML=productList[i].price;

		document.getElementById("item-" + i).appendChild(itemDescriptionTemp);

		//<p class="item-name">Name of item</p>

		var itemNameTemp = document.createElement("p");

		itemNameTemp.setAttribute("class", "item-name");
		itemNameTemp.setAttribute("id", "item-" + i + "-name");
		itemNameTemp.innerHTML=productList[i].name;

		document.getElementById("item-" + i + "-description").appendChild(itemNameTemp);

		var itemSizeColorFlexTemp = document.createElement("div");

		itemSizeColorFlexTemp.setAttribute("class", "item-size-color-flex");
		itemSizeColorFlexTemp.setAttribute("id", "item-" + i + "-size-color-flex");

		document.getElementById("item-" + i + "-description").appendChild(itemSizeColorFlexTemp);


		var itemSizeTemp = document.createElement("p");

		itemSizeTemp.setAttribute("class", "item-sizes");
		itemSizeTemp.setAttribute("id", "item-" + i + "-size");
		itemSizeTemp.innerHTML=productList[i].sizes;

		document.getElementById("item-" + i + "-size-color-flex").appendChild(itemSizeTemp);

		//<p class="item-colors" id="item-0-color">Colors</p>

		var itemColorTemp = document.createElement("p");

		itemColorTemp.setAttribute("class", "item-colors");
		itemColorTemp.setAttribute("id", "item-" + i + "-color");
		itemColorTemp.innerHTML=productList[i].colors;

		document.getElementById("item-" + i + "-size-color-flex").appendChild(itemColorTemp);


		var itemPriceCartFlex = document.createElement("div");

		itemPriceCartFlex.setAttribute("class", "item-price-cart-flex");
		itemPriceCartFlex.setAttribute("id", "item-" + i + "-price-cart-flex");

		document.getElementById("item-" + i + "-description").appendChild(itemPriceCartFlex);



		var itemPriceTemp = document.createElement("p");

		itemPriceTemp.setAttribute("class", "item-prices");
		itemPriceTemp.setAttribute("id", "item-" + i + "-price");
		itemPriceTemp.innerHTML=productList[i].price;

		document.getElementById("item-" + i + "-price-cart-flex").appendChild(itemPriceTemp);

		//<i class="fa fa-shopping-cart fa-2x" id="item-0-cart" aria-hidden="true"></i>	

		var itemCartTemp = document.createElement("i");

		itemCartTemp.setAttribute("class", "fa fa-shopping-cart fa-2x");
		itemCartTemp.setAttribute("id", "item-" + i + "-cart");

		document.getElementById("item-" + i + "-price-cart-flex").appendChild(itemCartTemp);

		console.log("hello");
	};



}

/*
var c = document.createDocumentFragment();
for (var i=0; i<10000; i++) {
    var e = document.createElement("div");
    e.className = "test-div";
    c.appendChild(e);
}*/