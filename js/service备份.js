$(function() {
	var oC = document.getElementById('ocanvas');
	var oGC = oC.getContext('2d');
	var canWidth = oC.width;
	var canHeight = oC.height;
	var scrollX = 0;
	var scrollY = 0;
	
	var scrollFunc = function(e) {

		e = e || window.event;
		if(e.wheelDelta) { //判断浏览器IE，谷歌滑轮事件 
			if(e.wheelDelta > 0) { //当滑轮向上滚动时
				console.log("shang");
				if(scrollX<oC.width && scrollY==0){
					scrollX-=15;
					oGC.clearRect(0,0,canWidth,15);
					oGC.fillRect(0,0,scrollX,15);
				}else if(scrollX>oC.width){
					scrollY-=15;
					oGC.clearRect(canWidth-15,15,canHeight,15);
					oGC.fillRect(canWidth-15,0,15,scrollY);
				}
				
			}
			if(e.wheelDelta < 0) { //当滑轮向下滚动时
				console.log("xia")
				if(scrollX<oC.width && scrollY==0){
					scrollX+=15;
					oGC.clearRect(0,0,canWidth,15);
					oGC.fillRect(0,0,scrollX,15);
				}else if(scrollX>=oC.width){
					scrollY+=15;
					oGC.clearRect(canWidth-15,15,canHeight,15);
					oGC.fillRect(canWidth-15,0,15,scrollY);
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