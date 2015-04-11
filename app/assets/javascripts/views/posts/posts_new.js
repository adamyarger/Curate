window.Curate.Views.PostsNew = Backbone.View.extend({

	template: JST['posts/new'],

	events: {
		'submit form': 'submit'
	},

	initialize: function(options){
		this.post = options.post;
	},

	render: function(){
		var renderedContent = this.template();
		this.$el.html(renderedContent);

		return this;
	},

	submit: function(event){
		event.preventDefault();
		var view = this;

		var params = $(event.currentTarget).serializeJSON()['post'];
		var newPost = new Curate.Models.Post(params);
		newPost.save({}, {
			success: function(){
				console.log('success');
				// Curate.Collections.feed.unshift(newPost);
				view.post.posts().unshift(newPost);

				Curate.Flash.success('Post success!');
				
				
			}
		});
	}

});