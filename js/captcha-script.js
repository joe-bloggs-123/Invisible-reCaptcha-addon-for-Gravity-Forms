var key = gfGoogleCaptchaScript_strings;

var initCaptchaMiddleMan = function() {
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
				callback: function(recaptchaToken) {
					// Because we stopped the form firing
					// in the submit function below, now
					// we need to finally fire it!
					jQuery(frm).submit();
					grecaptcha.reset(holderId);
					return;
				},
				'expired-callback': function() {
					// Waited too long, nothing happens now!
					grecaptcha.reset(holderId);
				},
			});

			// Here the form is submitted, using everything from, above
			frm.onsubmit = function(evt) {
				evt.preventDefault();
				grecaptcha.execute(holderId);
			};
		})(form);
	}
};
