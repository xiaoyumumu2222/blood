$(function(){
	$(".left p").on('click',function(){
		$(".left p input").prop("checked",false);
		$(this).find("input").prop("checked",true);
				
	})
	var minHeight=$(window).height()-$(".header").height()-$(".footer").height()-$("#address").height()-22;
	$(".b1").height(minHeight);
	$(".b2").height($(".b1").height());
})

