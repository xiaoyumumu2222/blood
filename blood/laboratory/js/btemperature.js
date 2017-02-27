$(function(){
	$("#nav ul li a").each(function(){
		        $this = $(this);
		        if($this[0].href==String(window.location)){
		          		$("#nav ul li").removeClass("active");
                        $this.parent().parent().parent().addClass("active");
		        }
		   });
	var minHeight=$(window).height()-$(".header").height()-$(".footer").height()-$("#address").height()-22;
	$(".left").height(minHeight);
	$(".right").height(minHeight);
	$(".r2").height($(".right").height()-$(".r1").height()-10)
	$("#container").height($(".r2").height()-110)
	$("#container1").height($(".r2").height()-120);
		    $('#container').highcharts({
		    	credits: {
				    enabled:false
				},
		        title: {
		            text: '温度实时走势图',
		            x: 0 //center
		        },
		        xAxis: {
		        	title: {
		                text: '时间',
		                 max:12, // 定义Y轴 最大值  
//		                 min:0, // 定义最小值  
		                 minPadding: 0.2,   
		                 maxPadding: 0.2,  
		                 pointWidth: 30,  //柱子的宽度30px
		                 tickInterval:1, // 刻度值  
		                
		            },
//		            tickmarkPlacement:"on",
		            categories: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
		        },
		        yAxis: {
		        	tickPositions: [-10,-8,-6,-4,-2,0,2,4,6,8,10,12],
		            title: {
		                text: '温度(°C)',
		                 max:12, // 定义Y轴 最大值  
//		                 min:0, // 定义最小值  
		                 minPadding: 0.2,   
		                 maxPadding: 0.2,  
		                 pointWidth: 30,  //柱子的宽度30px
		                 tickInterval:1, // 刻度值  
		            },
		             plotLines: [{   
                            value: 6,  
                            color: '#fdd853',  
                            dashStyle: 'solid',  
                            width: 2,  
                            label: {  
                                text: '最高：6℃',
                                x:560,
                                y:-5
                            }  
                        },{  
                            value: 2,  
                            color: '#fdd853',  
                            dashStyle: 'solid',  
                            width: 2,  
                            label: {  
                                text: '最低：2℃',
                                x:560,
                                y:12
                        }   
                	}]  
		        },
		        tooltip: {
		            valueSuffix: '°C'
		        },
		        legend: {
		            layout: 'vertical',
		            align: 'right',
		            verticalAlign: 'middle',
		            borderWidth: 0
		        },
		        series: [{
		            name: '温度',
		            showInLegend: false, // 设置为 false 即为不显示在图例中
		            data: [3, 4.9, 3.5, 3.5, 4.2, 4.5, 4.2, 3.5, 3.3, 3.3, 2.9, 2.6,3, 4.9, 3.5, 3.5, 4.2, 4.5, 4.2, 3.5, 3.3, 3.3, 2.9, 2.6,3.3]
		        }]
		    });
		    $(".r2 p input[type='radio']").parent().on("click",function(){
		 		$(".r2 p input").prop("checked",false);
				$(this).find("input").prop("checked",true);
				$(".rr2>div").hide();
				if($(".r2 p input[type='radio']").eq(0).prop("checked")==true){
					$("#container").show();
				}
				if($(".r2 p input[type='radio']").eq(1).prop("checked")==true){
					$("#container1").show();
				}
		 })
		    
	$("#shade1 .t2").height($("#shade1 .t1").height()); 		    
})
