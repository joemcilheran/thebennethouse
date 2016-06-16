"use strict"
function hoverForDescription(roomDescription,pic){
	$(pic).hover(function() {
		$( roomDescription ).show( 100 );
	},
	function(){
		$( roomDescription ).hide( 100 );
	});
}

function displayRoomDescriptions(){
	hoverForDescription("#carolinaroomdescription","#carolinaroompic");
	hoverForDescription("#oregonroomdescription","#oregonroompic");
	hoverForDescription("#acadiaroomdescription","#acadiaroompic");
	hoverForDescription("#columbiaroomdescription","#columbiaroompic");
	hoverForDescription("#virginiaroomdescription","#virginiaroompic");
}
function changeColorWhenHover(id){
	$(id).hover(function(){
		$(id).css("color","red");
	},function(){
		$(id).css("color","#ffffff");
	});
}
function changeTextColorInNavbar(){
	changeColorWhenHover("#home");
	changeColorWhenHover("#history");
	changeColorWhenHover("#tours");
	changeColorWhenHover("#rooms");
	changeColorWhenHover("#bar");
}
displayRoomDescriptions();
changeTextColorInNavbar();