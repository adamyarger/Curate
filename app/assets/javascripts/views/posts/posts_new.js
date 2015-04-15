window.Curate.Views.PostsNew = Backbone.View.extend({

	template: JST['posts/new'],

	events: {
		'submit form': 'submit',
		'click #post-body': 'loading'
	},

	loading: function(){
		$('#post-body').preview({key:'77b9e769557a490e9e2ef087981131c3'});
		 // $('.loading').show();
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
				view.post.posts().add(newPost);
				
				view.render();

				Curate.Flash.success('Post success!');
				
				
			}
		});
	}

});