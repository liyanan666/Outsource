window.onload=function(){
	var imgurl = {
		img1:"../img/shouye-1.png",
		img2:"../img/shouye-2.png",
		img3:"../img/shouye-3.png",
		img4:"../img/shouye-4.png"
	};
	var host = location.hash;
	var imgindex = 0;
	var loaddiv = $(".loadimg").find(".load_font");
	var loadlength = $(".loadimg").find(".load_font").length;
	var timer = setInterval(function(){
		imgindex++;
		if(imgindex >=loadlength){
			imgindex=0;
		}
		loaddiv.eq(imgindex).show().siblings("div").hide();
	},1000);
	setTimeout(function(){
		clearInterval(timer);
		$(".loadimg").addClass("fadeOutLeft animated");
	},7000);
	loadImages(imgurl,function(){
		clearInterval(timer);
		$(".loadimg").addClass("fadeOutLeft animated");
	})
	var swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        speed:600,
        slidesPerView: 1,
        spaceBetween: 120,
        mousewheel: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        on:{
	      init: function(){
	        swiperAnimateCache(this); //隐藏动画元素 
	        swiperAnimate(this); //初始化完成开始动画
	      }, 
	      slideChangeTransitionEnd: function(){ 
	        swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
	      } 
	    }
    });
    if(host == '#aboutus'){
    	swiper.slideTo(5, 1000, false);
    }
    
    function loadImages(sources, callback){  
	    var count = 0,  
	        images ={},  
	        imgNum = 0;  
	    for(src in sources){  
	        imgNum++;  
	    }  
	    for(src in sources){  
	    	
	        images[src] = new Image();  
	        images[src].onload = function(){  
	            if(++count >= imgNum){  
	                callback(images);  
	            }  
	        }  	
	    }  
	}  
    
}
  