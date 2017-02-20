$(function(){
	var minheight=$(window).height()-133;
	$(".left").height(minheight);
	$(".center").height($(".left").height());
	$(".center1").height($(".left").height());
	$(".right").height($(".left").height());
	$(".top>h3 span").click(function(){
		$("#shade").hide();
	})
	$("#time").jeDate({
			    format:"YYYY-MM-DD",
			    isTime:false, 
			    isinitVal:true,                      //是否初始化时间，默认不初始化时间
				initAddVal:[-7], 
			    minDate:"1990-09-19 00:00:00"
			})
})