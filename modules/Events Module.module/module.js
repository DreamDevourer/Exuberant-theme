	postbox = $(".eventsModule").size();
		x = 3;
		//post = 3;
		//post = (post + 3 <= postbox) ? post + 3 : postbox;
		if (x == postbox) {
	$('.event_button').hide();
  }
		$('.eventsModule:lt(' + x + ')').fadeIn();
	$('.eventsModule:gt(' + (x-1) + ')').hide();
	   
$('.event_button span').click(function() {
	x = (x + 2 <= postbox) ? x + 2 : postbox;
			$('.eventsModule:lt(' + x + ')').fadeIn();
			if (x == postbox) $('.event_button').hide();
});
	 
	 