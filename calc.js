$(document).ready(function () {
	var slider = document.getElementById('slider');
	var slider2 = document.getElementById('slider-2');
	var min,max;
	var rangeSum =getRangeSum(1);
	var range = getRange(1);
	$('#sum-1').html(rangeSum[0]);
	$('#sum-2').html(rangeSum[1]);
	$('#sec-1').html(range[0]);
	$('#sec-2').html(range[1]);

	noUiSlider.create(slider, {
		start:  5000,
		connect: [true, false],
		range: {
		    'min': rangeSum[0],
		    'max': rangeSum[1]
		},
		step:1000,
	});
	noUiSlider.create(slider2, {
		start:  6,
		connect: [true, false],
		range: {
		    'min': range[0],
		    'max': range[1]
		},
		step:1,
	});	
	slider.noUiSlider.on('update', function (values, handle) {

		var sum = parseInt(values[handle]);
		var month = parseInt(slider2.noUiSlider.get());
		var num = parseInt($('.calculator-block-wrapper__select').val());
		$('#slider').find('.noUi-base .noUi-origin .noUi-handle .noUi-touch-area .slider-value').html(sum);
		$('.calculator-block__result-3 .calculator-block__result-right').html(calcRes(num,sum,month));  
	});
	slider2.noUiSlider.on('update', function (values, handle) {

		var month = parseInt(values[handle]);
		var sum = parseInt(slider.noUiSlider.get());
		var num = parseInt($('.calculator-block-wrapper__select').val());
		$('#slider-2').find('.noUi-base .noUi-origin .noUi-handle .noUi-touch-area .slider-value').html(month);
		$('.calculator-block__result-3 .calculator-block__result-right').html(calcRes(num,sum,month));  
	});
	var width = $(window).width();
	if(width<=768){
	 	$('.calculator-block__result-m').show();
	}else{
		slider.noUiSlider.on('start', function () { 
			$('#slider').find('.noUi-base .noUi-origin .noUi-handle .noUi-touch-area .slider-value').stop(false,false).slideDown(400);
		});
		slider.noUiSlider.on('end', function () { 
			$('#slider').find('.noUi-base .noUi-origin .noUi-handle .noUi-touch-area .slider-value').stop(false,false).slideUp(400);
		});
		slider2.noUiSlider.on('start', function () { 
		$('#slider-2').find('.noUi-base .noUi-origin .noUi-handle .noUi-touch-area .slider-value').stop(false,false).slideDown(400);
		});
		slider2.noUiSlider.on('end', function () { 
			$('#slider-2').find('.noUi-base .noUi-origin .noUi-handle .noUi-touch-area .slider-value').stop(false,false).slideUp(400);
		});
	}
	
	$('.calculator-block-wrapper__select').on('change',function(){

		var month = parseInt(slider2.noUiSlider.get());
		var sum = parseInt(slider.noUiSlider.get());
		var num = parseInt($(this).val());
		changeRange(num,slider2);
		changeRangeSum(num,slider);
		$('.calculator-block__result-3 .calculator-block__result-right').html(calcRes(num,sum,month)); 
	});
	setTimeout(function(){
 
		$('#slider').find('.noUi-base .noUi-origin .noUi-handle .noUi-touch-area').append('<div class="slider-value">5000</div>');
			
		$('#slider-2').find('.noUi-base .noUi-origin .noUi-handle .noUi-touch-area').append('<div class="slider-value">3</div>');	

	},100);
});
	


	function getRange(num){
		var min,max;
		var href = window.location.href;
		if((href.indexOf('sberezheniya') + 1)&&(href.indexOf('sber-capital') + 1)) {
			if(num==1){
				min = 3;
				max = 12;
			}else if(num==2){
				min = 6;
				max = 18;
			}else if(num==3){
				min = 13;
				max = 24;
			} 
		}else if((href.indexOf('potrebitelskie-zajmy') + 1)&&(href.indexOf('sber-capital') + 1)) {
			if(num==1){
				min = 1;
				max = 2;
			}else if(num==2){
				min = 6;
				max = 12;
			}else if(num==3){
				min = 4;
				max = 12;
			} 
		}else if((href.indexOf('sberezheniya') + 1)&&(href.indexOf('kpkdobrobud') + 1)) {
			if(num==1){
				min = 18;
				max = 24;
			}else if(num==5){
				min = 6;
				max = 18;
			}else if(num==3){
				min = 13;
				max = 24;
			}else {
				min = 6;
				max = 12;
			} 
		}else if((href.indexOf('potrebitelskie-zajmy') + 1)&&(href.indexOf('kpkdobrobud') + 1)) {
			if(num==1){
				min = 0;
				max = 1;
			}else if(num==2){
				min = 4;
				max = 12;
			}else if(num==3){
				min = 4;
				max = 12;
			} 
		}else{
			if(num==1){
				min = 6;
				max = 12;
			}else if(num==2){
				min = 3;
				max = 12;
			}else if(num==3){
				min = 3;
				max = 18;
			}else if(num==4){
				min = 6;
				max = 12;
			}else if(num==5){
				min = 18;
				max = 24;
			}
		}
		return [min,max];
	}
	function getRangeSum(num){
		var min,max;
		var href = window.location.href;
		if((href.indexOf('sberezheniya') + 1)&&(href.indexOf('sber-capital') + 1)) {
			if(num==1){
				min = 5000;
				max = 1500000;
			}else if(num==2){
				min = 10000;
				max = 1500000;
			}else if(num==3){
				min = 50000;
				max = 1500000;
			} 
		}else if((href.indexOf('potrebitelskie-zajmy') + 1)&&(href.indexOf('sber-capital') + 1)) {
			if(num==1){
				min = 5000;
				max = 30000;
			}else if(num==2){
				min = 15000;
				max = 30000;
			}else if(num==3){
				min = 30000;
				max = 60000;
			} 
		}else if((href.indexOf('sberezheniya') + 1)&&(href.indexOf('kpkdobrobud') + 1)) {
		 
			min = 5000;
			max = 1500000;
			 
		}else if((href.indexOf('potrebitelskie-zajmy') + 1)&&(href.indexOf('kpkdobrobud') + 1)) {
			if(num==1){
				min = 5000;
				max = 30000;
			}else if(num==2){
				min = 15000;
				max = 30000;
			}else if(num==3){
				min = 30000;
				max = 60000;
			} 
		}else{
			min = 5000;
			max = 1500000;
		}
		return [min,max];
	}
	function changeRange(num,slider){
		var resArr = getRange(num); 
		slider.noUiSlider.updateOptions({
		    range: {
		        'min': resArr[0],
		        'max': resArr[1]
		    }
		});
		$('#sec-1').html(resArr[0]);
		$('#sec-2').html(resArr[1]);
		return true;
	}
	function changeRangeSum(num,slider){
		var resArr = getRangeSum(num); 
		slider.noUiSlider.updateOptions({
		    range: {
		        'min': resArr[0],
		        'max': resArr[1],
		    }
		});
		$('#sum-1').html(resArr[0]);
		$('#sum-2').html(resArr[1]);
		return true;
	}
	function getResult(num,sum,month){
		var res;
		var href = window.location.href;
		if((href.indexOf('sberezheniya') + 1)&&(href.indexOf('sber-capital') + 1)) {
			if(num==1){
				res = (sum*0.10/12*month)+sum;
			}else if(num==2){
				res = (sum*0.11/12*month)+sum;
			}else if(num==3){
				res = (sum*0.117/12*month)+sum;
			} 
		}else if((href.indexOf('potrebitelskie-zajmy') + 1)&&(href.indexOf('sber-capital') + 1)) {
			if(num==1){
				res = (sum*0.098/12*month)+sum;
			}else if(num==2){ 
				res = (sum*0.06/12*month)+sum;
			}else if(num==3){
				res = (sum*0.03/12*month)+sum;
			} 
 
		}else if((href.indexOf('sberezheniya') + 1)&&(href.indexOf('kpkdobrobud') + 1)) {
			if(num==1){
				 
				 res = (sum*0.115/12*month)+sum;
			}else if(num==2){
				res = (sum*0.11/12*month)+sum;
			}else if(num==3){
				res = (sum*0.10/12*month)+sum;
			}else if(num==4){
				res = (sum*0.11/12*month)+sum;
			}else if(num==5){
				res = (sum*0.10/12*month)+sum;
			}else if(num==6){
				res = (sum*0.11/12*month)+sum;
			}    
		}else if((href.indexOf('potrebitelskie-zajmy') + 1)&&(href.indexOf('kpkdobrobud') + 1)) {
			if(num==1){
				res = (sum*0.215/12*month)+sum;
			}else if(num==2){
				res = (sum*0.06333/12*month)+sum;
			}else if(num==3){
				res = (sum*0.03/12*month)+sum;
			} 
		}else{
			if(num==1){
				res = (sum*0.11/12*month)+sum;
			}else if(num==2){
				res =  sum*Math.pow((1+0.1/12),month);
			}else if(num==3){
				res =  sum*Math.pow((1+0.1/12),month);
			}else if(num==4){
				res = (sum*0.11/12*month)+sum;
			}else if(num==5){
				res = (sum*0.115/12*month)+sum;
			}
		}
		return res;
	}
	function calcRes(num,sum,month){
		var res;
 
		if(month==parseInt($('#sec-2').html())){
			$('.slider-right-1').addClass('slider-l-active');
			$('.calculator-slider-block-text-2').addClass('slider-line-active');
		}else{
			$('.slider-right-1').removeClass('slider-l-active');
			$('.calculator-slider-block-text-2').removeClass('slider-line-active');
		}
		res = getResult(num,sum,month);

		var format = wNumb({
	        thousand: ' ',
	        suffix: ' рублей'
	    });
	    var format2 = wNumb({
	        thousand: '',
	        suffix: ' месяц/месяцев'
	    });

 		$('.calculator-block__result-1 .calculator-block__result-right').html(format.to(sum));
 		$('.calculator-block__result-2 .calculator-block__result-right').html(month+' '+plural(month,'месяц','месяца','месяцев'));
		return format.to(Math.round(res* 100)/100);
	}

	function plural(number, one, two, five) {
	    if ((number - number % 10) % 100 != 10) {
			if (number % 10 == 1) {
				result = one;
			} else if (number % 10 >= 2 && number % 10 <= 4) {
				result = two;
			} else {
				result = five;
			}
		} else {
			result = five;
		}
		return result;
}