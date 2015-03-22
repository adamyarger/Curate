window.Curate.Views.PostsIndex = Backbone.View.extend({
	template: JST['posts/index'],

	initialize: function(options){
		this.listenTo(this.collection, 'sync unshift', this.render)
	},

	render: function(){
		var renderedContent = this.template({
			posts: this.collection
		});

		this.$el.html(renderedContent);

		return this;
	}
});