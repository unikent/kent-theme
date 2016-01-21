$(document).ready(function(){
	$('.kent-slider').slick({
		dots:true,
		dotsClass:'kent-slider-dots',
		mobileFirst:true,
		useTransform:true,
		accessibility: true,	
	}).on("afterChange", function(){
		console.log("hi");
	}).on("breakpoint", function(){
		console.log("zink");
	});



});