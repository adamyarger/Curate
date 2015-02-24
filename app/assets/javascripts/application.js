// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


//*********************************** Navbar *****************************************//

$(function() {
   $('.alert').delay(500).fadeIn('normal', function() {
      $(this).delay(2500).fadeOut();
   });
});

// $(function () {
//   $('.click-nav > ul').toggleClass('no-js js');
//   $('.click-nav .js ul').hide();
//   $('.click-nav .js').click(function(e) {
//     $('.click-nav .js ul').slideToggle(200);
//     $('.clicker').toggleClass('active');
//     e.stopPropagation();
//   });
//   $(document).click(function() {
//     if ($('.click-nav .js ul').is(':visible')) {
//       $('.click-nav .js ul', this).slideUp();
//       $('.clicker').removeClass('active');
//     }
//   });
// });


