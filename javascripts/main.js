$(function() {

	$('.mc-form').ajaxChimp({
		url: '//movitos.us4.list-manage.com/subscribe/post-json?u=3bc400c69874a5f5dce5bfbe2&amp;id=61abe68bdf',
		callback: function(resp) {
			if (resp.result === 'success') {
				window.location='thank-you.html';
			}
		}
	});

});
