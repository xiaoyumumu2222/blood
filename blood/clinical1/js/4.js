$(function(){
	var minheight=$(window).height()-133;
	console.log(minheight);
	$(".left").height(minheight);
	$(".center").height($(".left").height());
	$(".right").height($(".left").height());
	if(minheight<600){
		$(".left").height(600);
		$(".center").height($(".left").height());
		$(".right").height($(".left").height());
	}
	$(window).resize(function(){
 	    var minheight=$(window).height()-132;
		$(".left").height(minheight);
		$(".center").height($(".left").height());
		$(".right").height($(".left").height());
		if(minheight<600){
			$(".left").height(600);
			$(".center").height($(".left").height());
			$(".right").height($(".left").height());
		}
	});
	var n1=$(".right").height()-$(".r1").height()-30
	$(".r2").height(n1);
	$(".r3").height(n1);
	$(".r4").height(n1);
})