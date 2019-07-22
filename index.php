<?php
/*
Plugin Name: Invisible reCaptcha addon for Gravity Forms
Plugin URI: https://github.com/fox-agency/gravityforms-google-captcha-v3-addon
Description: A simple Gravity Forms plugin to enable invisible Google reCaptcha V3 on all forms.
Version: 1.0.11
Author: Fox Agency
Author URI: fox.agency
*/

define( 'GF_GOOGLE_CAPTCHA_ADDON_VERSION', '1.1.0' );

add_action( 'gform_loaded', array( 'GF_Google_Captcha_AddOn_Bootstrap', 'load' ), 5 );

class GF_Google_Captcha_AddOn_Bootstrap {

    public static function load() {

        if ( ! method_exists( 'GFForms', 'include_addon_framework' ) ) {
            return;
        }

        require_once( 'class-gfgooglecaptchaaddon.php' );

        GFAddOn::register( 'gfgooglecaptchaaddon' );
    }

}

function gf_google_captcha_addon() {
    return gfgooglecaptchaaddon::get_instance();
}
