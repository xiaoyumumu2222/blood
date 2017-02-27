$(function(){
	$(".b1 p").on('click',function(){
		$(".b1 p input").prop("checked",false);
		$(this).find("input").prop("checked",true);
	})
	$("#shade2 .t2").height($("#shade2 .t1").height())
	$("#shade3 .t2").height($("#shade3 .t1").height())
	$("#shade3 .t3").height($("#shade3 .t1").height())
	$(document).on("click","#shade3 .t4 h3",function(){
		$("#shade3 .t4").find("h3").css({
			"border-bottom": "2px solid transparent"
		})
		$(this).css({
			"border-bottom": "2px solid #70c871"
		})
		$("#shade3 .t4").find("table").hide();
		$(this).siblings().show();
	})
})