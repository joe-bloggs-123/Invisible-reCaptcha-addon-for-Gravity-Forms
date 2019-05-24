const axios = require('axios');

//var key = gfGoogleCaptchaScript_strings;
const key = '6LdeS6UUAAAAAPIm-3Ur5m2p8QYRQ0229JuGm_ll';

grecaptcha.ready(function() {
	for (var i = 0; i < document.forms.length; ++i) {
		var form = document.forms[i];

		var holder = form.querySelector('.gf-recaptcha-div');

		if (null === holder) continue;
		holder.innerHTML = '';

		(function(frm) {
			// This sets everything up for the form call
			var holderId = grecaptcha.render(holder, {
				sitekey: key,
				size: 'invisible',
				badge: 'inline',
			});

			// Here the form is submitted, using everything from, above
			frm.onsubmit = evt => {
				evt.preventDefault();
				// Execute and get token
				grecaptcha
					.execute(holderId, { action: 'homepage' })
					.then(function(token) {
						// Take token and pass to server
						tellServer(token);
					});
			};
		})(form);
	}
});

const tellServer = token => {
	console.log(token);
	console.log(gfGoogleCaptchaScriptFrontend_obj.ajaxurl);

	axios
		.post(gfGoogleCaptchaScriptFrontend_obj.ajaxurl, {
			action: 'example_ajax_request',
			name: 'My First AJAX Request',
		})
		.then(function(response) {
			// handle success
			console.log(response);
		})
		.catch(function(error) {
			// handle error
			console.log(error);
		})
		.finally(function() {
			// always executed
		});
};
