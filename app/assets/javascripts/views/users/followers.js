window.Curate.Views.Follower = Backbone.View.extend(
_.extend({}, Curate.PaginatedView,{

	template: JST['users/following'],

	initialize: function(options){
		this.listenTo(this.collection, 'sync add', this.render)
	},


	render: function(){

		//allow us to us the users collection in the tempatre !important
		var renderedContent = this.template({
			users: this.collection
		});
		

		this.$el.html(renderedContent);

		this.listenForScroll();

		return this;
	}
})
);