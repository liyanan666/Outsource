$(function(){
//  $('#dowebok').fullpage({
//  	'autoScrolling':false
//  });
	var scroll = 0;
	$(window).scroll(function(e){
		scroll++;
		$("#block11").css({"height":scroll+"px","width":"100%","background":"#fbee4e"});
		if ($(document).scrollTop()<=0){
	      console.log("滚动条已经到达顶部为0");
	   	}
	    if ($(document).scrollTop() >= $(document).height() - document.body.clientHeight) {
	      console.log("滚动条已经到达底部为" + $(document).scrollTop());
	    }
	})
	
});