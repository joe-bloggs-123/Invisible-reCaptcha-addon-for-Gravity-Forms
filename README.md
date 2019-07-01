# Gravity Forms Google Captcha v3 Addon

A simple Gravity Forms plugin to enable invisible Google Captcha V3 on all forms.

## Add Add On to Gravity Forms

1. Download plugin
2. Navigate to your WordPress plugins page
3. Press "Add New"
4. Press "Upload Plugin"
5. Select the .zip file that was just downloaded
6. Press "Install Now"
7. Press "Activate Plugin"
8. Navigate to Gravity Forms Settings
9. In the left hand bar, press "Google Captcha V3"
10. Add the Google Captcha API keys

## Creating Google Captcha Keys

1. Visit: https://www.google.com/u/1/recaptcha/admin
2. Press the + button in the top right
3. Fill in all details (select reCAPTCHA v3) and press "Submit"
4. Copy the site keys into the settings for this Add On

## Logging reCaptcha Score

In some situations you may want to keep a track of your submissions, and the scores that Google has allocated them. This may help if you are having an influx of spam.

If this is the case, we have include a "reCaptcha Score" field that can be found in the Advanced Fields field section.

Just add this to your form once, and it will be populated with the score.

# Google reCaptcha Badge

The Google reCaptcha badge is shown by default. This can be removed in the plugin settings, but Google require their terms and conditions to be shown within the user flow.

See their FAQs for more information: https://developers.google.com/recaptcha/docs/faq
