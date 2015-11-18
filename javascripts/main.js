$(function() {

	var $mcForm = $('.mc-form');
	if ($mcForm.length) $mcForm.ajaxChimp({
		url: '//movitos.us4.list-manage.com/subscribe/post-json?u=3bc400c69874a5f5dce5bfbe2&amp;id=61abe68bdf',
		callback: function(resp) {
			if (resp.result === 'success') {
				window.location = 'thank-you.html';
			}
		}
	});

});

// If there is a twitter button on page
if ($('.twitter-event').length) {

	// then load twitter library
	window.twttr = (function(d, s, id) {
		var js, fjs = d.getElementsByTagName(s)[0],
		t = window.twttr || {};
		if (d.getElementById(id)) return t;
		js = d.createElement(s);
		js.id = id;
		js.src = "https://platform.twitter.com/widgets.js";
		fjs.parentNode.insertBefore(js, fjs);

		t._e = [];
		t.ready = function(f) {
			t._e.push(f);
		};

		return t;
	}(document, "script", "twitter-wjs"));

	// and bind twitter events when loaded
	twttr.ready(function() {
		twttr.events.bind(
			'tweet',
			function (event) { 
				console.log(event);
				var redirect = $(event.target).data('redirect');
				if (redirect) {
					window.location = redirect;
				}
			}
		);
	});

}

