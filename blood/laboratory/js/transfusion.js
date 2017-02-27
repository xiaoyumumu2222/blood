$(function(){

		   $("#nav ul li a").each(function(){
		        $this = $(this);
		        	if($this[0].href==String(window.location)){
			            if($this.text()=="首页"){
	                        $this.parent().addClass("active");
			            }else{
	                        $this.parent().parent().parent().addClass("active");
			            }
	
			        }
		    });
		var minHeight=$(window).height()-$(".header").height()-$(".footer").height()-$("#address").height()-22;
		$(".left").height(minHeight);
		$(".center").height($(".left").height());
		$(".right").height($(".left").height());
		$(".b1").height(minHeight-$(".b2").height()-10);
		if(minHeight<596){
			$(".left").height(596);
			$(".center").height($(".left").height());
			$(".right").height($(".left").height());
		}
		
		$("#dateStart").jeDate({
			    format:"YYYY-MM-DD",
			    isTime:false, 
			    isinitVal:true,                      //是否初始化时间，默认不初始化时间
				initAddVal:[-7], 
			    minDate:"1990-09-19 00:00:00"
			})
		$("#dateEnd").jeDate({
			    format:"YYYY-MM-DD",
			    isTime:false, 
			    isinitVal:true,                      //是否初始化时间，默认不初始化时间
			    minDate:"2014-09-19 00:00:00"
			})
		$("#collectStart").jeDate({
			    format:"YYYY-MM-DD",
			    isTime:false, 
			    isinitVal:true,                      //是否初始化时间，默认不初始化时间
				initAddVal:[-7], 
			    minDate:"2014-09-19 00:00:00"
			})
		$("#collectEnd").jeDate({
			    format:"YYYY-MM-DD",
			    isTime:false, 
			    isinitVal:true,                      //是否初始化时间，默认不初始化时间
			    minDate:"2014-09-19 00:00:00"
			})
		$("#sendStart").jeDate({
			    format:"YYYY-MM-DD",
			    isTime:false, 
			    isinitVal:true,                      //是否初始化时间，默认不初始化时间
				initAddVal:[-7], 
			    minDate:"2014-09-19 00:00:00"
			})
		$("#sendEnd").jeDate({
			    format:"YYYY-MM-DD",
			    isTime:false, 
			    isinitVal:true,                      //是否初始化时间，默认不初始化时间
			    minDate:"2014-09-19 00:00:00"
			})
		$("dl dd p input").on('click',function(){
				$("dl dd p input").prop("checked",false);
				$(this).prop("checked",true);
				if($("dl dd p input").eq(0).prop("checked")==true){
					$("#bottom button").hide();
					$(".barcode1").show();
				}
				if($("dl dd p input").eq(1).prop("checked")==true){
					$("#bottom button").hide();
					$(".barcode2").show();
				}
				if($("dl dd p input").eq(2).prop("checked")==true){
					$("#bottom button").hide();
					$(".barcode3").show();
				}
				if($("dl dd p input").eq(3).prop("checked")==true){
					$("#bottom button").hide();
					$(".barcode4").show();
				}
		})
		
		
		$(document).on("click",".bmessage li",function(){
				$(".d4").hide();
		        $(".bmessage li").removeClass("bactive");
		     	$(".bmessage li span").text(">");
                $(this).addClass("bactive");
                $(this).find("span").text("");
                $(".d3>div").hide();
                var n=$(this).index()+1;
                $(".in"+n).show();
               if(n==1){
               	 $(".right .d3 h3 button").text("输血核对");
               }
                if(n==2){
               	 $(".right .d3 h3 button").text("输血开始");
               }
                 if(n==3){
               	 $(".right .d3 h3 button").text("输血保存");
               	 $(".d3 .in3 dt input[type='radio']").eq(1).prop("checked",false);
               	 $(".d3 .in3 dt input[type='radio']").eq(0).prop("checked",true);
               }
                  if(n==4){
               	 $(".right .d3 h3 button").text("输血保存");
               	 $(".d3 .in4 dt input[type='radio']").eq(1).prop("checked",false);
               	 $(".d3 .in4 dt input[type='radio']").eq(0).prop("checked",true);
 			   }
		 });
		 $("#shade .top h3 span").click(function(){
		 	$("#shade").hide();
		 })
		 $("#shade1 .top h3 span").click(function(){
		 	$("#shade1").hide();
		 })
		 
		 $(".d3 .in3 dt input[type='radio']").on("click",function(){
		 		$(".d3 .in3 dt input").prop("checked",false);
				$(this).prop("checked",true);
				console.log($(".d3 .in3 dt input").eq(1).val());
				$(".d4").hide();
				if($(".d3 .in3 dt input[type='radio']").eq(1).prop("checked")==true){
					$(".d4").show();
				}
		 })
		  $(".d3 .in4 dt input[type='radio']").on("click",function(){
		 		$(".d3 .in4 dt input").prop("checked",false);
				$(this).prop("checked",true);
				console.log($(".d3 .in4 dt input").eq(1).val());
				$(".d4").hide();
				if($(".d3 .in4 dt input[type='radio']").eq(1).prop("checked")==true){
					$(".d4").show();
				}
		 })
		  
		  
	$("#address button").on("mouseover",function(){
		$(this).css({
			background:"#45a7f2",
			color:"#fff",
			border:"1px solid #45a7f2",
			cursor:"pointer"
		})
	})
	$("#address button").on("mouseout",function(){
		$("#address button").css({
			background:"#f4f8f9",
			color:"#666",
			border:"1px solid #e9ebea"
		})
	})
	$(":button").each(function(){
		if($(this).attr("disabled")=="disabled"){
		$(this).css({
			cursor:"not-allowed"
			})
		}
	});
	})
				