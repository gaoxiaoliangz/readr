$(function(){
	$(".page-login, .page-sign-up").find("form .btn").click(function(){
		if($(".page-login, .page-sign-up").find("input[name='username']").val() == ''){
			return false;
		}
	});

});