"use strict"
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
function displayWholeTextWhenHover(){
	$(".pic").hover(function(){
		$(".rest").show();
	},function(){
		$(".pic").hide();

	});
}
changeTextColorInNavbar();
displayWholeTextWhenHover();