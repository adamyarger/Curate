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

		var params = $(event.currentTarget).serializeJSON()['post'];
		var newPost = new Curate.Models.Post(params);
		newPost.save({}, {
			success: function(){
				Curate.Collections.feed.add(newPost);
				Curate.Flash.success('Post success!');
				console.log('success');
				
			}
		});
	}

});