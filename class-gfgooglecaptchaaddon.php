<?php

GFForms::include_addon_framework();

class GFGoogleCaptchaAddOn extends GFAddOn {

	protected $_version = GF_GOOGLE_CAPTCHA_ADDON_VERSION;
	protected $_min_gravityforms_version = '1.9';
	protected $_slug = 'gravityformsgooglecaptcha';
	protected $_path = 'gravityformsgooglecaptcha/index.php';
	protected $_full_path = __FILE__;
	protected $_title = 'Gravity Forms Google Captcha V3 Add-On';
	protected $_short_title = 'Google Captcha V3';

	private static $_instance = null;

	/**
	 * Get an instance of this class.
	 *
	 * @return GFGoogleCaptchaAddOn
	 */
	public static function get_instance() {
		if ( self::$_instance == null ) {
			self::$_instance = new GFGoogleCaptchaAddOn();
		}

		return self::$_instance;
	}

	/**
	 * Fire the GF hook to load Google holder
	 */
	public function init() {
		parent::init();
		add_filter( 'gform_form_tag', array( $this, 'gf_google_captcha' ), 10, 2 );
	}

	/**
	 * Loop through all forms and add a new div tag for Google scripts
	 * @param  string $form_tag The tag
	 * @param  [type] $form     The form
	 * @return string           The form string with the new code pre-pended
	 */
	function gf_google_captcha( $form_tag, $form  ){
		$form_tag = $form_tag . '<div class="gf-recaptcha-div"></div>';
		return $form_tag;
	}

	// # SCRIPTS & STYLES -----------------------------------------------------------------------------------------------

	/**
	 * Return the scripts which should be enqueued.
	 *
	 * @return array
	 */
	public function scripts() {

		$all_plugin_settings = $this->get_plugin_settings();
		$key                 = $this->get_plugin_setting( 'google_site_key');

		$scripts = array(
			array(
				'handle'  => 'googleRecaptcha',
				'src'     => 'https://www.google.com/recaptcha/api.js?onload=initCaptchaMiddleMan&render=explicit',
				'version' => $this->_version,
				'deps'    => array( 'jquery' ),
				'enqueue' => array(
	                array( $this, 'requires_script' )
	            )
			),
			array(
				'handle'  => 'gfGoogleCaptchaScript',
				'src'     => $this->get_base_url() . '/js/captcha-script.js',
				'version' => $this->_version,
				'deps'    => array( 'googleRecaptcha','jquery' ),
				'strings' => array(
					'key'  => $key,
				),
				'enqueue' => array(
	                array( $this, 'requires_script' )
	            )
			),
		);

		return array_merge( parent::scripts(), $scripts );
	}


	// # ADMIN FUNCTIONS -----------------------------------------------------------------------------------------------

	/**
	 * Configures the settings which should be rendered on the add-on settings tab.
	 *
	 * @return array
	 */
	public function plugin_settings_fields() {
		return array(
			array(
				'title'  => esc_html__( 'Google Recaptcha Keys', 'gfgooglecaptchaaddon' ),
				'fields' => array(
					array(
						'label'             => esc_html__( 'Site Key', 'gfgooglecaptchaaddon' ),
						'type'              => 'text',
						'name'              => 'google_site_key',
						'tooltip'           => esc_html__( 'This is the key for the client side. Users can see this.', 'gfgooglecaptchaaddon' ),
						'class'             => 'medium',
						'feedback_callback' => array( $this, 'is_valid_setting' ),
					),
					array(
						'label'             => esc_html__( 'Site Secret Key', 'gfgooglecaptchaaddon' ),
						'type'              => 'text',
						'name'              => 'google_site_secret_key',
						'tooltip'           => esc_html__( 'Keep secret! This is the key for the server site.', 'gfgooglecaptchaaddon' ),
						'class'             => 'medium',
						'feedback_callback' => array( $this, 'is_valid_setting' ),
					),
				)
			)
		);
	}

	/**
	 * Performing a custom action at the end of the form submission process.
	 *
	 * @param array $entry The entry currently being processed.
	 * @param array $form The form currently being processed.
	 */
	public function after_submission( $entry, $form ) {

		// Evaluate the rules configured for the custom_logic setting.
		$result = $this->is_custom_logic_met( $form, $entry );

		if ( $result ) {
			// Do something awesome because the rules were met.
		}
	}


	// # HELPERS -------------------------------------------------------------------------------------------------------

	/**
	 * The feedback callback for the 'mytextbox' setting on the plugin settings page and the 'mytext' setting on the form settings page.
	 *
	 * @param string $value The setting value.
	 *
	 * @return bool
	 */
	public function is_valid_setting( $value ) {
		return strlen( $value ) < 10;
	}

}
