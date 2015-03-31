window.Curate.Views.PostsIndex = Backbone.CompositeView.extend({
	template: JST['posts/index'],

	initialize: function(options){
		this.listenTo(this.collection, 'sync unshift', this.render)
	},

	render: function(){
		var renderedContent = this.template({
			posts: this.collection
		});

		this.$el.html(renderedContent);

		var newPost = new Curate.Views.PostsNew();
		$('.container').prepend(newPost.render().$el);


		return this;
	}
});