$(function(){
	$(".b1 p").on('click',function(){
		$(".b1 p input").prop("checked",false);
		$(this).find("input").prop("checked",true);
				
	})
	$("#shade4 table td p").on('click',function(){
		$(this).siblings().find("input").prop("checked",false)
		$(this).find("input").prop("checked",true);
				
	})
})