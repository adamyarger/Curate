window.Curate.Views.Likes = Backbone.View.extend({

	template: JST['users/likes'],

	initialize: function(options){
		this.listenTo(this.collection, 'sync add', this.render)
	},

	render: function(){

		//allow us to us the users collection in the tempatre !important
		var renderedContent = this.template({
			users: this.collection
		});
		

		this.$el.html(renderedContent);

		return this;
	}
});