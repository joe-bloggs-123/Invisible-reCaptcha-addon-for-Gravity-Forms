grecaptcha.ready( function() {
  jQuery( function( $ ) {
    var key = gfGoogleCaptchaScriptFrontend_strings.key;

    $( 'form' ).each( function() {
      var $holder = $( '.gf-recaptcha-div', this );
      if ( $holder.length ) {
        $holder.html( '' );
        var holder = $holder[ 0 ];
        var holderId = grecaptcha.render( holder, {
          sitekey: key,
          size: 'invisible',
          badge: 'inline',
        } );

        $holder.data( 'holderId', holderId );

        $( this ).on( 'submit', function( event ) {
          var $form = $( this );
          if ( $form.data( 'submitted' ) ) {
            return;
          }

          event.preventDefault();
          var $holder  = $form.find( '.gf-recaptcha-div' );
          var holderId = $holder.data( 'holderId' );
          // parse to comply with Google reCaptcha action rules
          var action   = $form.attr( 'id' ).replace( /[^a-zA-Z0-9_]/, '' );

          grecaptcha
            .execute( holderId, { action: action } )
            .then( function( token ) {
              tellServer( token, $form );
            } );
        } );
      }
    } );

    function tellServer( token, $form ) {
      $.ajax( {
        type: "POST",
        url: gfGoogleCaptchaScriptFrontend_strings.ajaxurl,
        data: {
          action: 'check_google_token_request',
          token: token,
          security: gfGoogleCaptchaScriptFrontend_strings.security,
        },
        success: function( response ) {
          if ( response.success ) {
            $( '[data-type="recaptcha-score"]', $form ).val( response.score );
            $form.data( 'submitted', true ).trigger( 'submit' );
          } else {
            console.warn( 'Submitter is a bot' );
          }
        },
        error: function( error ) {
          console.error( error )
        }
      } );
    }
  } );
} );

