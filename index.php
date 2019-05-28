<?php
/*
Plugin Name: Gravity Forms Google Captcha V3
Plugin URI: https://github.com/fox-agency/gravityforms-google-captcha-v3-addon
Description: A simple Gravity Forms plugin to enable invisible Google Captcha V3 on all forms.
Version: 1.0.9
Author: Fox Agency
Author URI: fox.agency
*/

define( 'GF_GOOGLE_CAPTCHA_ADDON_VERSION', '2.1' );

add_action( 'gform_loaded', array( 'GF_Google_Captcha_AddOn_Bootstrap', 'load' ), 5 );

class GF_Google_Captcha_AddOn_Bootstrap {

    public static function load() {

        if ( ! method_exists( 'GFForms', 'include_addon_framework' ) ) {
            return;
        }

        require_once( 'class-gfgooglecaptchaaddon.php' );

        GFAddOn::register( 'GFGoogleCaptchaAddOn' );
    }

}

function gf_google_captcha_addon() {
    return GFGoogleCaptchaAddOn::get_instance();
}
