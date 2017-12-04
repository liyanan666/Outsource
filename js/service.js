$(function() {
	var oC = document.getElementById('ocanvas');
	var oGC = oC.getContext('2d');
	var canWidth = oC.width;
	var canHeight = oC.height;
	var scrollX = 0;
	var scrollY = 0;
	oGC.lineWidth = 30;
	
	

//	oGC.fillRect(0, 0, 15, 15);

	var scrollFunc = function(e) {

		e = e || window.event;
		if(e.wheelDelta) { //判断浏览器IE，谷歌滑轮事件 
			if(e.wheelDelta > 0) { //当滑轮向上滚动时
				console.log("shang");
				if(scrollX<oC.width && scrollY==0){
					scrollX-=15;
				}else if(scrollX>oC.width){
					scrollY-=15;
				}
				
				fillblock(scrollX,scrollY);
			}
			if(e.wheelDelta < 0) { //当滑轮向下滚动时
				console.log("xia")
				if(scrollX<oC.width && scrollY==0){
					scrollX+=15;
				}else if(scrollX>=oC.width){
					scrollY+=15;
				}
				fillblock(scrollX,scrollY);
			}
		} else if(e.detail) { //Firefox滑轮事件
			if(e.detail > 0) { //当滑轮向上滚动时
			}
			if(e.detail < 0) { //当滑轮向下滚动时
			}
		}
	}
	
	function fillblock(scrollX,scrollY){
		oGC.clearRect(0,0,oC.width,oC.height);
		if(scrollX<canWidth && scrollY<canHeight){
			console.log(1)
			oGC.beginPath();
			oGC.moveTo(0,0);
			oGC.lineTo(scrollX,0);
			oGC.closePath();
			oGC.stroke();
			oGC.save()
		}else if(scrollX>=canWidth && scrollY<canHeight){
			oGC.beginPath();
			oGC.moveTo(oC.width,0);
			oGC.lineTo(oC.width,scrollY);
			oGC.closePath();
			oGC.stroke();
			oGC.save()
		}
//		if(scrollX>=canWidth){
//			oGC.lineTo(scrollX,scrollY);
//			oGC.stroke();
////			oGC.fillRect(0,0,15,scroll);
//		}else if(scrollX<canWidth){
////			oGC.fillRect(0,0,scroll,15);
//			oGC.lineTo(scrollX,scrollY);
//			oGC.stroke();
//		}
	}
	
	//给页面绑定滑轮滚动事件
	if(document.addEventListener) { //firefox
		document.addEventListener('DOMMouseScroll', scrollFunc, false);
	}
	//滚动滑轮触发scrollFunc方法 //ie 谷歌
	window.onmousewheel = document.onmousewheel = scrollFunc;

});