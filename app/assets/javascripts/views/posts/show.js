window.Curate.Views.PostsShow = Backbone.View.extend({
	
	template: JST['posts/show'],

	events: {
		'click #delete-post': 'destroy',
		'click #like': 'toggleLike'
	},

	destroy: function(event){
		if(confirm('Are you sure?')){	
			this.model.destroy();
			Curate.Flash.warning('Post deleted');
		}	
	},

	toggleLike: function (event) {
	    $.ajax('/api/posts/' + this.model.id + '/togglelike', {
	      type: 'POST',
	      success: function (response) {
	        this.model.set('is_liked', response.is_liked);
	        this.model.set('num_likes', response.num_likes);
	        this.render();
	      }.bind(this),
	      error: function () {
	        console.log('Something went wrong!');
	      }
	    });
	},

	render: function(){
		var renderedContent = this.template({
			post: this.model
		});

		this.$el.html(renderedContent);
		return this;
	}
});