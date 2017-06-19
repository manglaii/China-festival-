$(function(){
	$('#myVideo').get(0).volume = 0.4;
	let videoState = 1;
	let videoVolumn = 1;
	$('#video-stop').on('click',function(){
		if(videoState == 1){
			$('#myVideo').get(0).pause();
			$('#video-stop span').addClass('glyphicon-play');
			$('#video-stop span').removeClass('glyphicon-pause');
			videoState = 0;
		}else{
			$('#myVideo').get(0).play();
			$('#video-stop span').addClass('glyphicon-pause');
			$('#video-stop span').removeClass('glyphicon-play');
			videoState = 1;
		}
	});
	
	$('#video-volumn').on('click', function(){
		if (videoVolumn == 1){
			$('#myVideo').get(0).volume = 0.0;
			$('#video-volumn span').addClass('glyphicon-volume-up');
			$('#video-volumn span').removeClass('glyphicon-volume-off');
			videoVolumn = 0;
		}else {
			$('#myVideo').get(0).volume = 0.4;
			$('#video-volumn span').addClass('glyphicon-volume-off');
			$('#video-volumn span').removeClass('glyphicon-volume-up');
			videoVolumn = 1;
		}
	});

});

$(function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		$('#myVideo').get(0).play();
	}
});