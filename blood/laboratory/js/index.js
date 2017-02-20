$(function(){
	$(document).on("click",".left p span",function(){
			$(".left p input").prop("checked",false);
			$(this).find("input").prop("checked",true);
			var n1=$(".left p span").index(this)+1;
			$(".l1").hide();
			$(".l2").hide();
			$(".l3").hide();
			$(".l"+n1).show();
		})
})