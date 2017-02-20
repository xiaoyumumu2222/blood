$(function(){
	var minheight=$(window).height()-82;
	console.log(minheight);
	$(".left").height(minheight);
	$(".center").height($(".left").height());
	$(".center1").height($(".left").height());
	$(".right").height($(".left").height());
	var n1=$(".left").height()-$(".l1").height()-20;
	$(".l2").height(n1);
	$("#time").jeDate({
			    format:"YYYY-MM-DD",
			    isTime:false, 
			    isinitVal:true,                      //是否初始化时间，默认不初始化时间
				initAddVal:[-7], 
			    minDate:"1990-09-19 00:00:00"
			})
	$(document).on("click",".nth1 p",function(){
			for (var i = 0; i < $(".nth1 p").length; i++) {
				$(".nth1 p").eq(i).find("input[type=checkbox]")[0].checked =false;
			}
			$(this).find("input[type=checkbox]")[0].checked =true;
			var n1=$(".nth1 p").index(this)+1;
			$(".s1").hide();
			$(".s2").hide();
			$(".s3").hide();
			$(".s4").hide();
			$(".s"+n1).show();
		})
})