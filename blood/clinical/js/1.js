$(function(){
	$(".left").height($(".right").height());
	$(".center").height($(".right").height());
	$(".top>h3 span").click(function(){
		$("#shade").hide();
	})
	$(".right h4 input[type='radio']").eq(0).prop("checked",true);
	$(".right h4 input[type='radio']").on("click",function(){
		 		$(".right h4 input").prop("checked",false);
				$(this).prop("checked",true);
		 })
//	if($(window).height()<600){
//		console.log($(window).height())
//		$(".top").height($(window).height());
//		$(".top").css({
//			overflow:"scroll"
//		})
//	}
})

