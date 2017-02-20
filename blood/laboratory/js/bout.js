$(function(){
			$(".b1 p").on('click',function(){
				$(".b1 p input").prop("checked",false);
				$(this).find("input").prop("checked",true);
				
		})
})
