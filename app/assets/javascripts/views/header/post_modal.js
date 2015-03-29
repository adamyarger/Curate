window.Curate.Views.PostModal = Backbone.View.extend({
	template: JST['header/post_modal'],

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