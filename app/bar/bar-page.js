"use strict"
function switchPics(){
	$( ".barpics" ).on( "click", exchangepics );
}
function exchangepics(){
	$(".barpics").html("<img src = 'images/thebennetbaroldpic.jpg'>");

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
changeTextColorInNavbar();
switchPics();