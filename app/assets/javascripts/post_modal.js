// jQuery(document).ready(function($){
// 	var $form_modal = $('.cd-user-modal'),
// 		$form_login = $form_modal.find('#cd-login'),
// 		$form_signup = $form_modal.find('#cd-signup'),
// 		$form_forgot_password = $form_modal.find('#cd-reset-password'),
// 		$form_modal_tab = $('.cd-switcher'),
// 		$tab_login = $form_modal_tab.children('li').eq(0).children('a'),
// 		$tab_signup = $form_modal_tab.children('li').eq(1).children('a'),
// 		$forgot_password_link = $form_login.find('.cd-form-bottom-message a'),
// 		$back_to_login_link = $form_forgot_password.find('.cd-form-bottom-message a'),
// 		$main_nav = $('.post');

// 	//open modal
// 	$main_nav.on('click', function(event){

// 		if( $(event.target).is($main_nav) ) {
// 			// on mobile open the submenu
// 			$(this).children('ul').toggleClass('is-visible');
// 		} else {
// 			// on mobile close submenu
// 			$main_nav.children('ul').removeClass('is-visible');
// 			//show modal layer
// 			$form_modal.addClass('is-visible');	
// 			//show the selected form
// 			( $(event.target).is('.cd-signup') ) ? signup_selected() : login_selected();
// 		}

// 	});

// 	//close modal
// 	$('.cd-user-modal').on('click', function(event){
// 		if( $(event.target).is($form_modal) || $(event.target).is('.cd-close-form') ) {
// 			$form_modal.removeClass('is-visible');
// 		}	
// 	});
// 	//close modal when clicking the esc keyboard button
// 	$(document).keyup(function(event){
//     	if(event.which=='27'){
//     		$form_modal.removeClass('is-visible');
// 	    }
//     });

// 	function login_selected(){
// 		$form_login.addClass('is-selected');
// 		$form_signup.removeClass('is-selected');
// 		$form_forgot_password.removeClass('is-selected');
// 		$tab_login.addClass('selected');
// 		$tab_signup.removeClass('selected');

// 	}

	

// 	//REMOVE THIS - it's just to show error messages 
	


// 	//IE9 placeholder fallback
// 	//credits http://www.hagenburger.net/BLOG/HTML5-Input-Placeholder-Fix-With-jQuery.html
// 	if(!Modernizr.input.placeholder){
// 		$('[placeholder]').focus(function() {
// 			var input = $(this);
// 			if (input.val() == input.attr('placeholder')) {
// 				input.val('');
// 		  	}
// 		}).blur(function() {
// 		 	var input = $(this);
// 		  	if (input.val() == '' || input.val() == input.attr('placeholder')) {
// 				input.val(input.attr('placeholder'));
// 		  	}
// 		}).blur();
// 		$('[placeholder]').parents('form').submit(function() {
// 		  	$(this).find('[placeholder]').each(function() {
// 				var input = $(this);
// 				if (input.val() == input.attr('placeholder')) {
// 			 		input.val('');
// 				}
// 		  	})
// 		});
// 	}

// });


// //credits http://css-tricks.com/snippets/jquery/move-cursor-to-end-of-textarea-or-input/
// jQuery.fn.putCursorAtEnd = function() {
// 	return this.each(function() {
//     	// If this function exists...
//     	if (this.setSelectionRange) {
//       		// ... then use it (Doesn't work in IE)
//       		// Double the length because Opera is inconsistent about whether a carriage return is one character or two. Sigh.
//       		var len = $(this).val().length * 2;
//       		this.setSelectionRange(len, len);
//     	} else {
//     		// ... otherwise replace the contents with itself
//     		// (Doesn't work in Google Chrome)
//       		$(this).val($(this).val());
//     	}
// 	});
// };