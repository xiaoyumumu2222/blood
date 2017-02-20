$(function(){
	$(".left").height($(".center").height());
	$(".right").height($(".center").height());
	$(".center1").height($(".center").height());
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