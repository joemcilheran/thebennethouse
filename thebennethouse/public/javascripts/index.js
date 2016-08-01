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
function loadTestimonials(){
	$("#testimonialsbutton").on("click", function(){
		$("#testimonials").toggle("slow")
	})
};


loadTestimonials();
changeTextColorInNavbar();