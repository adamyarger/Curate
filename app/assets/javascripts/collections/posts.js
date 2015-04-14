window.Curate.Collections.Posts = Backbone.Collection.extend({
	url: '/api/posts',
	model: Curate.Models.Post,

	// initialize: function(options){
	// 	if (options.user){
	// 		this.user = options.user;
	// 	}
	// },

	parse: function(response){
		this.page = response.page;
    	this.total_pages = response.total_pages;
		return response.posts;
	}
});


window.Curate.Collections.posts = new Curate.Collections.Posts();