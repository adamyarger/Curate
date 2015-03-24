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

