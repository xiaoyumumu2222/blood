$(function(){
	$("#nav ul li a").each(function(){
		        $this = $(this);
		        if($this[0].href==String(window.location)){
		          		$("#nav ul li").removeClass("active");
                        $this.parent().parent().parent().addClass("active");
		        }
		   });
	var minHeight=$(window).height()-$(".header").height()-$(".footer").height()-$("#address").height()-22;
	$(".b2").height($(".b1").height());
	$(".b3").height(minHeight-$(".b1").height()-10);
	if(minHeight<596){
			$(".b2").height($(".b1").height());
			$(".b3").height(596-$(".b1").height()-10);
		}
	
	var minHeight=$(window).height()-$(".header").height()-$(".footer").height()-$("#address").height()-22;
	$(".b2").height(minHeight-$(".b3").height()-$(".b1").height()-20);
	$("#shade .t2").height($("#shade .t1").height());
})
