$(function(){
	$(".btn button").on("click",function(){
		$(this).siblings().css({
			background:"#f4f8f9",
			color:"#666",
			border:"1px solid #e9ebea"
		})
		$(this).css({
			background:"#45a7f2",
			color:"#fff",
			border:"1px solid #45a7f2"
		})
	})
	var minheight=$(window).height()-132;
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
	$(".right h4 input[type='radio']").eq(0).prop("checked",true);
	$(".right h4 input[type='radio']").on("click",function(){
		 		$(".right h4 input").prop("checked",false);
				$(this).prop("checked",true);
		})

})

