$(function() {
	var block11Height = 0;
	var block111Height = 0;
	var block12Width = 0;
	var block122Width = 0;
	var block13Height = 0;
	var block133Height = 0;
	var block14Width = 0;
	var block144Width = 0;
	var scrollFunc = function(e) {
		if(document.body.clientHeight + document.body.scrollTop >= document.documentElement.offsetHeight ){
			return;
		}
		e = e || window.event;
		if(e.wheelDelta) { //判断浏览器IE，谷歌滑轮事件 
			console.log(1)
			if(e.wheelDelta > 0) { //当滑轮向上滚动时
				if(block144Width>0 && block133Height>0 && block122Width>0){
					block144Width -= 55;
					$("#block444").css({"height":"100%","background":"#2a1046","width":block144Width+"px"});
				}else if(block133Height>0 && block144Width<=0){
					block133Height-=55;
					$("#block333").css({"width":"100%","background":"#2a1046","height":block133Height+"px"});
				}else if(block122Width>0 && block133Height<=0){
					block122Width -= 55;
					$("#block222").css({"height":"100%","background":"#2a1046","width":block122Width+"px"});
				}else if(block11Height>0 && block12Width<=0 && block13Height<=0 && block14Width<=0){
					block11Height -= 55;
					$("#block11").css({"height":block11Height+"px","background":"#fbee4e","width":"100%"})
				}else if(block11Height >=$(".block1").height() && block13Height<=0 && block14Width<=0 && block12Width>=0 ){
					
					block12Width-=55;
					$("#block22").css({"height":"100%","background":"#fbee4e","width":block12Width+"px"})
				}else if(block11Height >=$(".block1").height() &&block12Width>=$(".block2").width() && block13Height>=0 && block14Width<=0 ){
				
					block13Height-=55;
					$("#block33").css({"height":block13Height+"px","background":"#fbee4e","width":"100%"})
				}else if(block11Height>0 && block12Width>0 && block13Height>0 && block14Width>0 && block111Height>0){
					block111Height-=55;
					$("#block111").css({"width":"100%","background":"#2a1046","height":block111Height+"px"});
				}else if(block11Height >=$(".block1").height() &&block12Width>=$(".block2").width() && block13Height>=$(".block3").height() && block14Width>=0){
					
					block14Width-=55;
					$("#block44").css({"height":"100%","background":"#fbee4e","width":block14Width+"px"})
				}
			}
			if(e.wheelDelta < 0) { //当滑轮向下滚动时
				
				if(block11Height <$(".block1").height() && block12Width<$(".block2").width()){
//					console.log(block11Height,$(".block1").height())
					console.log("xia");	
					if($(".block1").height()-block11Height<55){
						block11Height = $(".block1").height();
					}else{
						block11Height += 55;
					}
					$("#block11").css({"height":block11Height+"px","background":"#fbee4e","width":"100%"});
				}else if(block11Height ==$(".block1").height() && block12Width<$(".block2").width()){
					if($(".block2").width()-block12Width<55){
						block12Width = $(".block2").width();
					}else{
						block12Width += 55;
					}
					$("#block22").css({"height":"100%","background":"#fbee4e","width":block12Width+"px"})
				}else if(block12Width==$(".block2").width() && block13Height<$(".block3").height()){
					if($(".block3").height()-block13Height<55){
						block13Height = $(".block3").height();
					}else{
						block13Height += 55;
					}
					$("#block33").css({"height":block13Height+"px","background":"#fbee4e","width":"100%"})
				}else if(block13Height==$(".block3").height() && block14Width<$(".block4").width()){
					if($(".block4").width()-block14Width<55){
						block14Width = $(".block4").width();
					}else{
						block14Width += 55;
					}
					$("#block44").css({"height":"100%","background":"#fbee4e","width":block14Width+"px"})
				}else if(block14Width==$(".block4").width() && block111Height<$("#block11").height()){
					if($("#block11").height()-block111Height<55){
						block111Height = $("#block11").height();
					}else{
						block111Height += 55;
					}
					$("#block111").css({"width":"100%","background":"#2a1046","height":block111Height+"px"})
				}else if(block111Height == $("#block11").height() && block122Width<$("#block22").width()){
					if($("#block22").width()-block122Width<55){
						block122Width = $("#block22").width();
					}else{
						block122Width += 55;
					}
					$("#block222").css({"height":"100%","background":"#2a1046","width":block122Width+"px"})
				}else if(block122Width == $("#block222").width() && block133Height<$("#block33").height()){
					if($("#block33").height()-block133Height<55){
						block133Height = $("#block33").height();
					}else{
						block133Height += 55;
					}
					$("#block333").css({"width":"100%","background":"#2a1046","height":block133Height+"px"});
				}else if(block133Height == $("#block33").height() && block144Width<$("#block44").width()){
					if($("#block44").width()-block144Width<55){
						block144Width = $("#block44").width();
					}else{
						block144Width += 55;
					}
					$("#block444").css({"height":"100%","background":"#2a1046","width":block144Width+"px"});
				}
				
			}
		} else if(e.detail) { //Firefox滑轮事件
			if(e.detail > 0) { //当滑轮向上滚动时
			}
			if(e.detail < 0) { //当滑轮向下滚动时
			}
		}
	}
	

	//给页面绑定滑轮滚动事件
	if(document.addEventListener) { //firefox
		document.addEventListener('DOMMouseScroll', scrollFunc, false);
	}
	//滚动滑轮触发scrollFunc方法 //ie 谷歌
	window.onmousewheel = document.onmousewheel = scrollFunc;
	
	
	$(".case_nav").on("click","li",function(){
		$(this).addClass("active").siblings("li").removeClass("active");
		$(".case_nav").siblings("div").fadeOut();
		$(".case_nav").siblings("div").eq($(this).index()).fadeIn();
	});

});