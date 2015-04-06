window.Curate.Views.MessageNew = Backbone.View.extend({

	template: JST['messages/new'],

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
				Curate.Collections.posts.unshift(newPost);
				Curate.Collections.feed.fetch({
				  data: { page: 1 }
				});
				Curate.Flash.success('Post success!');
			}
		});
	}

});