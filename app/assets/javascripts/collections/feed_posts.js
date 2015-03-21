window.Curate.Collections.FeedPosts = Backbone.Collection.extend({

	url: 'api/posts',

	initialize: function(){
		this.fetch();
	},

	parse: function(response){
		return response.posts;
	}

});