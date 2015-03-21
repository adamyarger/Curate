window.Curate.Collections.FeedPosts = Backbone.Collection.extend({

	url: '/api/posts',
	model: Curate.Models.Post,

	initialize: function(){
		this.fetch();
	},

	parse: function(response){
		return response.posts;
	}

});