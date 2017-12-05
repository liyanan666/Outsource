$(function() {
	var block11Height = 0;
	var block12Width = 0;
	var block13Height = 0;
	var block14Width = 0;
	var scrollFunc = function(e) {
//		if(document.body.clientHeight + document.body.scrollTop >= document.documentElement.offsetHeight ){
//			return;
//		}
		e = e || window.event;
		if(e.wheelDelta) { //判断浏览器IE，谷歌滑轮事件 
			console.log(1)
			if(e.wheelDelta > 0) { //当滑轮向上滚动时
				if(block11Height>0 && block12Width<=0 && block13Height<=0 && block14Width<=0){
					block11Height -= 100;
					$("#block11").css({"height":block11Height+"px","background":"#fbee4e","width":"100%"})
				}else if(block11Height >=$(".block1").height() && block13Height<=0 && block14Width<=0 && block12Width>=0 ){
					
					block12Width-=100;
					$("#block22").css({"height":"100%","background":"#fbee4e","width":block12Width+"px"})
				}else if(block11Height >=$(".block1").height() &&block12Width>=$(".block2").width() && block13Height>=0 && block14Width<=0 ){
				
					block13Height-=100;
					$("#block33").css({"height":block13Height+"px","background":"#fbee4e","width":"100%"})
				}else if(block11Height >=$(".block1").height() &&block12Width>=$(".block2").width() && block13Height>=$(".block3").height() && block14Width>=0){
					
					block14Width-=100;
					$("#block44").css({"height":"100%","background":"#fbee4e","width":block14Width+"px"})
				}
			}
			if(e.wheelDelta < 0) { //当滑轮向下滚动时
				
				if(block11Height <$(".block1").height() && block12Width<$(".block2").width()){
//					console.log(block11Height,$(".block1").height())
					console.log("xia");	
					if($(".block1").height()-block11Height<100){
						block11Height = $(".block1").height();
					}else{
						block11Height += 100;
					}
					$("#block11").css({"height":block11Height+"px","background":"#fbee4e","width":"100%"});
				}else if(block11Height ==$(".block1").height() && block12Width<$(".block2").width()){
					if($(".block2").width()-block12Width<100){
						block12Width = $(".block2").width();
					}else{
						block12Width += 100;
					}
					$("#block22").css({"height":"100%","background":"#fbee4e","width":block12Width+"px"})
				}else if(block12Width==$(".block2").width() && block13Height<$(".block3").height()){
					if($(".block3").height()-block13Height<100){
						block13Height = $(".block3").height();
					}else{
						block13Height += 100;
					}
					$("#block33").css({"height":block13Height+"px","background":"#fbee4e","width":"100%"})
				}else if(block13Height>=$(".block3").height() && block14Width<=$(".block4").width()){
					if($(".block4").width()-block14Width<100){
						block14Width = $(".block4").width();
					}else{
						block14Width += 100;
					}
					$("#block44").css({"height":"100%","background":"#fbee4e","width":block14Width+"px"})
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

});