window.Curate.Views.PostsNew = Backbone.View.extend({

	template: JST['posts/new'],

	events: {
		'submit form': 'submit'
	},

	render: function(){
		var renderedContent = this.template();
		this.$el.html(renderedContent);

		return this;
	},

	submit: function(event){
		event.preventDefault();

		var newPost = new Curate.Models.Post();
		newPost.set('body', $('#post-body').val());
		newPost.save({}, {
			success: function(){
				Curate.Collections.posts.unshift(newPost);
			}
		});
	}

});