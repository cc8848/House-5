$(document).ready(function(){
	var video = $('video')[0],
		vol,
		currLi = -1,
		timer;
	video.volume = 0.5;
	vol = video.volume * 100;
	$('.show a,.menu').click(function(){
		if ($('.menu').hasClass('active')) {
			$('.block').hide();
			$('.menu').removeClass('active');
		}else{
			$('.block').show();
			$('.menu').addClass('active');
		}
	});
	$('.show a').bind({
		'mousedown':function(){
			$(this).addClass('shadow');
		},
		'mouseup':function(){
			$(this).removeClass('shadow');
		}
	});
	$('.mute').toggle(function(){
		vol = video.volume*100;
		video.volume = 0;
		$(this).addClass('active');
		$('.block li').eq(3).find('a:eq(1)').text(0);
	},function(){
		video.volume = vol/100;
		$(this).removeClass('active');
		$('.block li').eq(3).find('a:eq(1)').text(vol);
	});
	$('.power').toggle(function(){
		video.pause();
		video.currentTime = 0;
		$(this).addClass('active');
	},function(){
		video.play();
		$(this).removeClass('active');
	});
	$('.volume a').each(function(index){
		$(this).click(function(){
			if (index==1) {
				vol = (vol==100)?100:++vol;
			}else{
				vol = (vol==0)?0:--vol;
			}
			video.volume = vol/100;
			$('.block li').eq(3).find('a:eq(1)').text(vol);
		}).bind({
			'mousedown':function(e){
				$(this).addClass('active');
			},
			'mouseup':function(){
				$(this).removeClass('active');
			}
		});
	});
	$('.block li').bind({
		'mouseover':function(){
			$(this).css('background-color','rgba(0,0,0,0.2)').siblings().css('background-color','rgba(255,255,255,0.2)');
		}
	});
	$('.change li').each(function(index){
		$(this).click(function(){

		})
	})
})