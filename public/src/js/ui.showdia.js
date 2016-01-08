function showDia (content, dia_class) {
	$("body").append("<div style='display:none;' class='dia-wrap "+dia_class+"'>"+
		"<div class='dia'>"+
			content+
		"</div>"+
	"</div>");
	$('.dia-wrap').height($(window).height());
	window.setTimeout(function(){
		var h = $('.dia').height();
		var styles = {
		  marginTop : -(h/2),
		  top: "50%"
		};    	
		$('.dia').css(styles);
	},1);

	$(".dia-wrap").fadeIn();
	if(dia_class == "dia_info"){
		window.setTimeout(function(){
		  $(".dia-wrap").fadeOut(300,function(){
			  $(".dia-wrap").remove();
		  });
		},1000);
	}
}


$(document).ready(function(){

	$('body').on("click", ".dia", function(event){
		event.stopPropagation();
	});

	$('body').on("click", ".dia-wrap", function(event){
		event.stopPropagation();
	});

	$('body').on("click", ".dia-wrap", function(){
		$(".dia-wrap").fadeOut(300,function(){
			$(".dia-wrap").remove();
		});
	});

});