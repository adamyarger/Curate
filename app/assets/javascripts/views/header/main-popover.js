// window.Curate.Views.PopoverMenu = Backbone.View.extend({

// 	template: JST['header/popover'],
	

// 	events:{
// 		'click .nav_avatar': 'togglePop'
// 	},

	

// 	render: function(){
// 		// var renderedContent = this.template({
// 		// 	user: this.model
// 		// });
// 		var renderedContent = this.template();
// 		this.$el.html(renderedContent);

// 		return this;
// 	},

// 	togglePop: function(event){
// 		// event.preventDefault();
		
// 		// var popOver = new Curate.Views.PopoverMenu();
// 		// $('.nav_avatar').append(popOver.render().$el);
		
// 		// return this;
// 		alert("sup dude");	

// 	}
// });

// $(document).ready(function() {
//   $(".nav_avatar").on("click", "img", function() { 
//     $("#popover").toggle();
//   });
// });

$(document).on('click', 'img', function(){
 $("#popover").slideToggle(100); 
});


$("#popover").click(function(e){
  e.stopPropagation(); 
});

$(function() {
   $('.alert').delay(500).slideDown('normal', function() {
      $(this).delay(2500).slideUp();
   });
});



// $('.nav_avatar').click(function(){
// 	$('#popover').fadeToggle(300);
// });

// $(document).click(function(){
// 	$('#popover').hide();
// });

// $('.nav_avatar').click(function(){
// 	return false;
// });