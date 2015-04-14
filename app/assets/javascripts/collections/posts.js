window.Curate.Collections.Posts = Backbone.Collection.extend({
	url: '/api/posts',
	model: Curate.Models.Post,

	parse: function(response){
		this.page = response.page;
    	this.total_pages = response.total_pages;
		return response.posts;
	}
});


// window.Curate.Collections.posts = new Curate.Collections.Posts();