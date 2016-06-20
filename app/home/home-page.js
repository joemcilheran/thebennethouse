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
//function loadTestimonials(){
	//$("#testimonialsbutton").click(function(){
		//$("#homeMain").load("testimonials.html #testimonials");
	//}
//}

//loadTestimonials();
changeTextColorInNavbar();