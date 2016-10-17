(function(){
	var $alerts = $('.alert.alert-danger');
	if ($alerts.length > 0){
		$('html, body').animate({
			scrollTop: $alerts.first().offset().top
		}, 2000);
	}
})();
