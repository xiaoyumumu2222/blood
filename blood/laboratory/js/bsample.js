$(function(){
	var minHeight=$(window).height()-$(".header").height()-$(".footer").height()-$("#address").height()-22;
	$(".b2").height(minHeight-$(".b3").height()-$(".b1").height()-20);
	$("#shade .t2").height($("#shade .t1").height());
})