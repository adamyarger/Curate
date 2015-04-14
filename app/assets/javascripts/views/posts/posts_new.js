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
		$('#post-body').preview({key:'77b9e769557a490e9e2ef087981131c3'})
		$('#post-body').on('loading', function(){$('.loading').show()});

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
				view.post.posts().unshift(newPost);
				
				view.render();

				Curate.Flash.success('Post success!');
				
				
			}
		});
	}

});