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
		},
		cartoon:{
			title:"二维动画设计",
			titleEngilsh:"TWO - DIMENSINAL ANIMATION DESIGN",
			anli1:['manhua1.png','manhua2.png','manhua3.png','manhua4.png','manhua5.png','manhua6.png','manhua7.png','manhua8.png','manhua9.png','manhua10.png','manhua11.png','manhua12.png'],
			anli2:['manhua2_1.png','manhua2_2.png','manhua2_3.png','manhua2_4.png','manhua2_5.png','manhua2_6.png','manhua2_7.png','manhua2_8.png','manhua2_9.png','manhua2_10.png','manhua2_11.png','manhua2_12.png','manhua2_13.png','manhua2_14.png','manhua2_15.png','manhua2_16.png'],
			anli3:['manhua3_1.png','manhua3_2.png','manhua3_3.png','manhua3_4.png','manhua3_5.png','manhua3_6.png','manhua3_7.png']
		},
		dimensional:{
			title:"三维动画设计",
			titleEngilsh:"3D ANIMATION DESIGN",
			anli1:['dimensional1_1.png','dimensional1_2.png','dimensional1_3.png','dimensional1_4.png','dimensional1_5.png','dimensional1_6.png','dimensional1_7.png'],
			anli2:['dimensional2_1.png','dimensional2_2.png','dimensional2_3.png','dimensional2_4.png','dimensional2_5.png','dimensional2_6.png','dimensional2_7.png','dimensional2_8.png','dimensional2_9.png','dimensional2_10.png']
		},
		interactive:{
			title:"交互设计",
			titleEngilsh:"INTERACTIVE DESIGN",
			anli1:['interactive1_1.png','interactive1_2.png','interactive1_3.png','interactive1_4.png','interactive1_5.png','interactive1_6.png','interactive1_7.png','interactive1_8.png','interactive1_9.png','interactive1_10.png','interactive1_11.png','interactive1_12.png','interactive1_13.png'],
			anli2:['interactive2_1.png','interactive2_2.png','interactive2_3.png','interactive2_4.png','interactive2_5.png','interactive2_6.png','interactive2_7.png']
		},
		movie:{
			title:"影视后期设计",
			titleEngilsh:"FILM AND TELEVISION DESIGN",
			anli1:['movie1_1.png','movie1_2.png','movie1_3.png','movie1_4.png','movie1_5.png','movie1_6.png'],
			anli2:['movie2_1.png','movie2_2.png','movie2_3.png','movie2_4.png','movie2_5.png'],
			anli3:['movie3_1.png','movie3_2.png','movie3_3.png','movie3_4.png','movie3_5.png','movie3_6.png','movie3_7.png']
		},
		culture:{
			title:"文化设计",
			titleEngilsh:"CREATIVE DESIGN",
			anli1:['design1_1.png','design1_2.png','design1_3.png'],
			anli2:['design2_1.png','design2_2.png'],
			anli3:['design3_1.png','design3_2.png'],
			anli4:['design4_1.png','design4_2.png','design4_3.png','design4_4.png','design4_5.png']
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
