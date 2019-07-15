=== Invisible reCaptcha addon for Gravity Forms ===

Contributors:      robertmarshall
Plugin Name:       Invisible reCaptcha addon for Gravity Forms
Plugin URI:        https://github.com/fox-agency/Invisible-reCaptcha-addon-for-Gravity-Forms
Tags:              Gravity Forms, Addon, Forms, Google reCaptcha, reCaptcha 3, Invisible reCaptcha
Author URI:        http://fox.agency
Author:            Fox Agency
Requires at least: 5.0
Tested up to:      5.2.2
Requires PHP:      7.0
Stable tag:        1.1.0
Version:           1.1.0
License: GPLv3

== Description ==

A simple Gravity Forms plugin to enable invisible Google Captcha V3 on all forms.

== Installation ==

=== From within WordPress ===

1. Visit 'Plugins > Add New'
1. Search for 'Invisible reCaptcha addon for Gravity Form'
1. Activate Invisible reCaptcha addon for Gravity Form within your Plugins page.
1. Go to "after activation" below.

=== Adding Google reCaptcha Keys ===

1. Visit: https://www.google.com/u/1/recaptcha/admin
1. Press the + button in the top right
1. Fill in all details (select reCAPTCHA v3) and press "Submit"
1. Copy these keys into the settings area of Gravity Forms - Google reCaptcha

== Logging reCaptcha Score ==

In some situations you may want to keep a track of your submissions, and the scores that Google has allocated them. This may help if you are having an influx of spam.

If this is the case, we have include a "reCaptcha Score" field that can be found in the Advanced Fields field section.

Just add this to your form once, and it will be populated with the score.

== Google reCaptcha Badge ==

The Google reCaptcha badge is shown by default. This can be removed in the plugin settings, but Google require their terms and conditions to be shown within the user flow. This is up to you to manage.

See their FAQs for more information: https://developers.google.com/recaptcha/docs/faq
