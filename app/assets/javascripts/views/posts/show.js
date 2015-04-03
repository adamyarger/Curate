window.Curate.Views.PostsShow = Backbone.View.extend({
	
	template: JST['posts/show'],

	events: {
		'click #delete-post': 'destroy'
	},

	destroy: function(event){
		if(confirm('Are you sure?')){	
			this.model.destroy();
		}	
	},

	render: function(){
		var renderedContent = this.template({
			post: this.model
		});

		this.$el.html(renderedContent);
		return this;
	}
});