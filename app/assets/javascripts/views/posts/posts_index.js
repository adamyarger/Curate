window.Curate.Views.PostsIndex = Backbone.CompositeView.extend({
	template: JST['posts/index'],

	initialize: function(options){
		this.listenTo(this.collection, 'sync add', this.render);

		var postNewView = new Curate.Views.PostsNew({
			post: this.model
		});
		this.addSubview('#post-new', postNewView);
	},

	render: function(){
		var renderedContent = this.template({
			posts: this.collection
		});

		this.$el.html(renderedContent);

		this.renderSubviews();

		return this;
	}
});