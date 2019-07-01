<?php

if ( ! class_exists( 'GFForms' ) ) {
	die();
}

class Recaptcha_Score_GF_Field extends GF_Field {

	/**
	 * @var string $type The field type.
	 */

	/**
	 * Return the field title, for use in the form editor.
	 *
	 * @return string
	 */
	public function get_form_editor_field_title() {
		return esc_attr__( 'reCaptcha Score', 'gfgooglecaptchaaddon' );
	}

    public function is_conditional_logic_supported(){
		return false;
	}

	public function get_form_editor_button() {
	    return array(
	        'group' => 'advanced_fields',
	        'text'  => $this->get_form_editor_field_title(),
	    );
	}

	function get_form_editor_field_settings() {
		return array();
	}

	public function get_field_input( $form, $value = '', $entry = null ) {
		$form_id         = $form['id'];
		$is_entry_detail = $this->is_entry_detail();
		$is_form_editor  = $this->is_form_editor();

		$id       = (int) $this->id;
		$field_id = $is_entry_detail || $is_form_editor || $form_id == 0 ? "input_$id" : 'input_' . $form_id . "_$id";

		$disabled_text = $is_form_editor ? 'disabled="disabled"' : '';

		$field_type         = 'text';
		$class_attribute    = $is_entry_detail || $is_form_editor ? '' : "class='gform_hidden recaptcha-score'";
		$required_attribute = $this->isRequired ? 'aria-required="true"' : '';
		$invalid_attribute  = $this->failed_validation ? 'aria-invalid="true"' : 'aria-invalid="false"';

		return sprintf( "<input name='input_%d' id='%s' type='$field_type' data-type='recaptcha-score' {$class_attribute} {$required_attribute} {$invalid_attribute} value='%s' %s/>", $id, $field_id, esc_attr( $value ), $disabled_text );
	}

	public function get_field_content( $value, $force_frontend_label, $form ) {
		$form_id         = $form['id'];
		$admin_buttons   = $this->get_admin_buttons();
		$is_entry_detail = $this->is_entry_detail();
		$is_form_editor  = $this->is_form_editor();
		$is_admin        = $is_entry_detail || $is_form_editor;
		$field_id        = $is_admin || $form_id == 0 ? "input_{$this->id}" : 'input_' . $form_id . "_{$this->id}";
		$field_content   = ! $is_admin ? '{FIELD}' : $field_content = sprintf( "%s<label class='gfield_label' for='%s'>reCaptcha Score</label>{FIELD}", $admin_buttons, $field_id );

		return $field_content;
	}

}

GF_Fields::register( new Recaptcha_Score_GF_Field() );
