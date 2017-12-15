$(function() {
	$("#services_content3").scrollTop(0);
	$(document).scrollTop(0);
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
			
			if(e.wheelDelta > 0) { //当滑轮向上滚动时
				if($("#services_content5").scrollTop()>0){
					return;
				}
				if(block144Width>0 && block133Height>0 && block122Width>0){
					block144Width -= 100;
					$("#block444").css({"height":"100%","background":"#2a1046","width":block144Width+"px"});
				}else if(block133Height>0 && block144Width<=0){
					block133Height-=100;
					$("#block333").css({"width":"100%","background":"#2a1046","height":block133Height+"px"});
				}else if(block122Width>0 && block133Height<=0){
					block122Width -= 100;
					$("#block222").css({"height":"100%","background":"#2a1046","width":block122Width+"px"});
				}else if(block11Height>0 && block12Width>0 && block13Height>0 && block14Width>0 && block111Height>0){
					block111Height-=100;
					$("#block111").css({"width":"100%","background":"#2a1046","height":block111Height+"px"});
				}else if(block11Height>0 && block12Width<=0 && block13Height<=0 && block14Width<=0){
					block11Height -= 100;
					showsecond1();
					$("#block11").css({"height":block11Height+"px","background":"#fbee4e","width":"100%"})
				}else if(block11Height >=$(".block1").height() && block13Height<=0 && block14Width<=0 && block12Width>=0 ){
					
					block12Width-=100;
					if(block12Width<$(".block2").width()/2){
						showsecond2();
					}
					$("#block22").css({"height":"100%","background":"#fbee4e","width":block12Width+"px"})
				}else if(block11Height >=$(".block1").height() &&block12Width>=$(".block2").width() && block13Height>=0 && block14Width<=0 ){
				
					block13Height-=100;
					if(block13Height<$(".block3").height()/3){
						showsecond3();
					}
					$("#block33").css({"height":block13Height+"px","background":"#fbee4e","width":"100%"})
				}else if(block11Height >=$(".block1").height() &&block12Width>=$(".block2").width() && block13Height>=$(".block3").height() && block14Width>=0){
					
					block14Width-=100;
					if(block14Width<$(".block4").width()/4){
						$("#logo1").show();
						$("#logo2").hide();
						showsecond4();
					}
					if($(".block4").width()-block14Width>400){
						$(".introduction_nav .introactive a").css("color","#fbee4e");
						$(".introduction_nav .introactive").css("border-bottom","3px solid #fbee4e");
						$(".introduction_nav a").hover(function(){
							$(this).css("color","#fbee4e");
						},function(){
							if($(this).parent().hasClass("introactive")){
								return;
							}
							$(this).css("color","#aaa");
						});
					}
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
					if(block12Width>$(".block2").width()/2){
						showsecond2();
						
					}
					$("#block22").css({"height":"100%","background":"#fbee4e","width":block12Width+"px"})
				}else if(block12Width==$(".block2").width() && block13Height<$(".block3").height()){
					if($(".block3").height()-block13Height<100){
						block13Height = $(".block3").height();
					}else{
						block13Height += 100;
					}
					if(block13Height>$(".block3").height()/3){
						showsecond3();
						
					}
					$("#block33").css({"height":block13Height+"px","background":"#fbee4e","width":"100%"})
				}else if(block13Height==$(".block3").height() && block14Width<$(".block4").width()){
					if($(".block4").width()-block14Width<100){
						block14Width = $(".block4").width();
					}else{
						block14Width += 100;
					}
					if($(".block4").width()-block14Width<300){
						$(".introduction_nav .introactive a").css("color","#2A1046");
						$(".introduction_nav .introactive").css("border-bottom","3px solid #2A1046");
						$(".introduction_nav a").hover(function(){
							$(this).css("color","#2A1046");
						},function(){
							if($(this).parent().hasClass("introactive")){
								return;
							}
							$(this).css("color","#aaa");
						});
					}
					$("#logo1").hide();
					$("#logo2").show();
					if(block14Width>$(".block4").width()/3){
						showsecond4();
					}
					$("#block44").css({"height":"100%","background":"#fbee4e","width":block14Width+"px"})
				}else if(block14Width==$(".block4").width() && block111Height<$("#block11").height()){
					if($("#block11").height()-block111Height<100){
						block111Height = $("#block11").height();
					}else{
						block111Height += 100;
					}
					
					if(block111Height>0){
						$("#services_content1").hide().find("ul").removeClass("bounceInDown animated");
						$("#services_content4").hide().find("#content4font").removeClass("bounceInDown animated");
						$("#services_content2").hide().find("ul").removeClass("bounceInDown animated");
						$("#services_content3").hide().find("#liuchengpic").removeClass("bounceInDown animated");
						$("#services_content5").show().find("#content5hetong").addClass("bounceInDown animated");
					}
					$("#block111").css({"width":"100%","background":"#2a1046","height":block111Height+"px"})
				}else if(block111Height == $("#block11").height() && block122Width<$("#block22").width()){
					if($("#block22").width()-block122Width<100){
						block122Width = $("#block22").width();
					}else{
						block122Width += 100;
					}
					$("#block222").css({"height":"100%","background":"#2a1046","width":block122Width+"px"})
				}else if(block122Width == $("#block222").width() && block133Height<$("#block33").height()){
					if($("#block33").height()-block133Height<100){
						block133Height = $("#block33").height();
					}else{
						block133Height += 100;
					}
					$("#block333").css({"width":"100%","background":"#2a1046","height":block133Height+"px"});
				}else if(block133Height == $("#block33").height() && block144Width<$("#block44").width()){
					if($("#block44").width()-block144Width<100){
						block144Width = $("#block44").width();
					}else{
						block144Width += 100;
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
	
	
	$("#viewhetong").click(function(){
		if($("#hetongpic").css("display") == "none"){
			$(".down_mid").css({"overflow":"atuo","height":"auto"});
		}else{
			$(".down_mid").css({"overflow":"hidden","height":"229px"});
		}
		$("#hetongpic").slideToggle();
		
		
	});
	$("#yewufanwei").click(function(){
		showsecond2();
	});
	$("#yewuliucheng").click(function(){
		showsecond3();
	});
	$("#fuwulinian").click(function(){
		showsecond4();
	});
	$("#hetongxiazai").click(function(){
		$("#services_content1").hide().find("ul").removeClass("bounceInDown animated");
		$("#services_content4").hide().find("#content4font").removeClass("bounceInDown animated");
		$("#services_content2").hide().find("ul").removeClass("bounceInDown animated");
		$("#services_content3").hide().find("#liuchengpic").removeClass("bounceInDown animated");
		$("#services_content5").show().find("#content5hetong").addClass("bounceInDown animated");
					
	})
	
	function showsecond1(){
		$("#services_content1").show().find("ul").addClass("bounceInDown animated");
		$("#services_content2,#services_content3,#services_content4,#services_content5").hide();		
	}
	function showsecond2(){
		$("#services_content1,#services_content3,#services_content4,#services_content5").hide();
		$("#services_content2").show().find("ul").addClass("bounceInDown animated");
						
	}
	function showsecond3(){
		$("#services_content1,#services_content2,#services_content4,#services_content5").hide();
		$("#services_content3").show().find("#liuchengpic").addClass("bounceInDown animated");
					
	}
	function showsecond4(){
		
		$("#services_content1,#services_content2,#services_content3,#services_content5").hide();
		$("#services_content4").show().find("#content4font").addClass("bounceInDown animated");
						
	}
});