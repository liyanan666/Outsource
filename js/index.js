window.onload=function(){
	
	var host = location.hash;
	
	
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
	        console.log(swiper.activeIndex);
	        if(swiper.activeIndex == 1 || swiper.activeIndex == 3 || swiper.activeIndex == 5 || swiper.activeIndex == 4){
	        	if(swiper.activeIndex == 4){
	        		$(".logo").find("img").eq(0).attr("src","img/logo.png");
	        		$(".index_nav a").mouseover(function(){
		        		$(this).css("color","#2A1046");
		        	});
		        	$(".index_nav a").mouseout(function(){
		        		if($(this).parent().hasClass("active")){
		        			return;
		        		}
		        		$(this).css("color","#aaa");
		        	});
		        	$("#active a").css("color","#2a1046");
		        	$("#active").css("border-bottom","3px solid #2a1046");
		        	return;
	        		
	        	}else if(swiper.activeIndex == 5){
	        		$(".logo").find("img").eq(0).attr("src","img/logo1.png");
	        	}else{
	        		$(".logo").find("img").eq(0).attr("src","img/logo.png");
	        	}
	        	
	        	$(".index_nav a").mouseover(function(){
	        		$(this).css("color","#fbee4e");
	        	});
	        	$(".index_nav a").mouseout(function(){
	        		if($(this).parent().hasClass("active")){
	        			return;
	        		}
	        		$(this).css("color","#aaa");
	        	});
	        	$("#active a").css("color","#fbee4e");
	        	$("#active").css("border-bottom","3px solid #fbee4e");
	        }else{
	        	$(".index_nav a").mouseover(function(){
	        		$(this).css("color","#2A1046");
	        	});
	        	$(".index_nav a").mouseout(function(){
	        		if($(this).parent().hasClass("active")){
	        			return;
	        		}
	        		$(this).css("color","#aaa");
	        	});
	        	$("#active a").css("color","#2a1046");
	        	$("#active").css("border-bottom","3px solid #2a1046");
	        }
	      }
	     
	    }
    });
    if(host == '#aboutus'){
    	swiper.slideTo(5, 1000, false);
    	$(".logo").find("img").eq(0).attr("src","img/logo1.png");
    	$(".index_nav a").mouseover(function(){
    		$(this).css("color","#fbee4e");
    	});
    	$(".index_nav a").mouseout(function(){
    		if($(this).parent().hasClass("active")){
    			return;
    		}
    		$(this).css("color","#aaa");
    	});
    	$("#active a").css("color","#fbee4e");
    	$("#active").css("border-bottom","3px solid #fbee4e");
    }
    

   
}
  