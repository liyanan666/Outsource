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
	      } 
	    }
    });
    if(host == '#aboutus'){
    	swiper.slideTo(5, 1000, false);
    }
    
   
   
}
  