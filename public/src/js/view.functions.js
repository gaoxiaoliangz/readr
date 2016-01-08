$(document).ready(function(){

	// functions
	$(".functions .home").tap(function(){
		location.href = base_url + "shelf";
	});

	$(".functions .clear").tap(function(){
		localStorage.removeItem("book-"+book_id);
		localStorage.removeItem("book-"+book_id+"-2");
		localStorage.removeItem("book-"+book_id+"-layout");
		location.reload();
	});

	// functions panel
	if($(".view").hasClass("hd")){
		$("body").on('mousemove', function(e){
			var y = e.pageY - $("body").scrollTop();
			var x = e.pageX;

			if(y < 90){
				$(".view .functions").slideDown();
			}else if($(".dia-wrap").length == 0){
				$(".view .functions").slideUp();
			}
		});
	}else if($(".view").hasClass("mobile")){
		$("body").tap(function(){
			$(".view .functions").slideToggle("fast");
		});
	}

});