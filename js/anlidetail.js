$(function(){
	var belong = GetQueryString('belong');
	var form = GetQueryString('form');
	var list = {
		design:{
			title:'品牌设计',
			titleEngilsh:'BRAND DESIGN',
			anli1:['anli1_1.png','anli1_2.png','anli1_3.png','anli1_4.png','anli1_5.png'],
			anli2:['anli2_1.png','anli2_2.png','anli2_3.png'],
			anli3:['anli3_1.png','anli3_2.png','anli3_3.png','anli3_4.png'],
			anli4:['anli4_1.png','anli4_2.png','anli4_3.png','anli4_4.png','anli4_5.png','anli4_6.png','anli4_7.png'],
		},
		advertisement:{
			title:"广告设计",
			titleEngilsh:"ADVERTISEMENT DESIGN",
			anli1:['advertisement1.png','advertisement2.png','advertisement3.png','advertisement4.png','advertisement5.png','advertisement6.png','advertisement7.png']
		}
	}
	
	$(".content_title").text(list[belong].title);
	$(".content_english").text(list[belong].titleEngilsh);
	var str = '';
	for(var i=0;i<list[belong][form].length;i++){
		str +='<li><img src="../img/'+list[belong][form][i]+'"/></li>';
	}
	$(".fenleilist").html(str);
	
	
	function GetQueryString(name)
	{
	     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	     var r = window.location.search.substr(1).match(reg);
	     if(r!=null)return  unescape(r[2]); return null;
	}
});
