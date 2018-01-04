$(function() {
	
	var host = location.hash;
	$(".case_nav").on("click","li",function(){
		$(this).addClass("active").siblings("li").removeClass("active");
		$(".case_nav").siblings("div").fadeOut();
		$(".case_nav").siblings("div").eq($(this).index()).fadeIn();
	});
	console.log(host);
	if(host == '#view'){
		$(".case_nav").find("li").eq(0).trigger("click");
	}
	if(host == '#animate'){
		$(".case_nav").find("li").eq(2).trigger("click");
	}
	if(host == '#info'){
		$(".case_nav").find("li").eq(1).trigger("click");
	}
	
	
});