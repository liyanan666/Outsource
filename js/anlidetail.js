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
		},
		packing:{
			title:"品牌包装设计",
			titleEngilsh:"BRAND PACKAGING DESIGN",
			anli1:['packing1_1.png','packing1_2.png','packing1_3.png','packing1_4.png','packing1_5.png','packing1_6.png'],
			anli2:['packing2_1.png','packing2_2.png'],
			anli3:['packing3_1.png','packing3_2.png','packing3_3.png','packing3_4.png','packing3_5.png','packing3_6.png','packing3_7.png'],
			anli4:['packing4_1.png','packing4_2.png','packing4_3.png','packing4_4.png','packing4_5.png','packing4_6.png','packing4_7.png','packing4_8.png','packing4_9.png'],
			anli5:['packing5_1.png','packing5_2.png','packing5_3.png','packing5_4.png']
		},
		info:{
			title:"信息可视化设计",
			titleEngilsh:"INFORMATION VISUALIZATION DESIGN",
			anli1:['info1_1.png','info1_2.png','info1_3.png','info1_4.png','info1_5.png','info1_6.png','info1_7.png','info1_8.png','info1_9.png','info1_10.png'],
			anli2:['info2_1.png','info2_2.png','info2_3.png','info2_4.png'],
			anli3:['info3_1.png','info3_2.png','info3_3.png','info3_4.png','info3_5.png','info3_6.png','info3_7.png','info3_8.png','info3_9.png','info3_10.png','info3_11.png'],
			anli4:['info4_1.png','info4_2.png','info4_3.png','info4_4.png','info4_5.png','info4_6.png','info4_7.png'],
			anli5:['info5_1.png','info5_2.png','info5_3.png','info5_4.png','info5_5.png']
		},
		medias:{
			title:"互动媒体设计",
			titleEngilsh:"INTERACTIVE MEDIA DESIGN",
			anli1:['media1_1.png','media1_2.png','media1_3.png','media1_4.png','media1_5.png','media1_6.png'],
			anli2:['media2_1.png','media2_2.png','media2_3.png','media2_4.png']
		},
		art:{
			title:"网络艺术设计",
			titleEngilsh:"NETWORK ART DESIGN",
			anli1:['art1_1.png','art1_2.png','art1_3.png','art1_4.png','art1_5.png','art1_6.png'],
			anli2:['art2_1.png','art2_2.png','art2_3.png','art2_4.png'],
			anli3:['art3_1.png','art3_2.png','art3_3.png','art3_4.png','art3_5.png','art3_6.png','art3_7.png','art3_8.png','art3_9.png','art3_10.png','art3_11.png','art3_12.png']
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
