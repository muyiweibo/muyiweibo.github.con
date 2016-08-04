$(document).ready(function(){
	var minClient=Math.min($(window).width(),640);
	$("html").css("fontSize",minClient/7.5);
	$(window).resize(function(){
		$("html").css("fontSize",minClient/7.5);
	})
})