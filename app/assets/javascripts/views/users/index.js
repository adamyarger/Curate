window.Curate.Views.UsersIndex = Backbone.View.extend({

	template: JST['users/index'],

	initialize: function(options){
		this.listenTo(this.collection, 'sync add', this.render)
	},

	render: function(){

		//allow us to use the users collection in the tempatre !important
		var renderedContent = this.template({
			users: this.collection
		});
		

		this.$el.html(renderedContent);

		return this;
	}
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