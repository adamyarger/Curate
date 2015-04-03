window.Curate.Collections.Feed = Backbone.Collection.extend({
	url: '/api/posts',
	model: Curate.Models.Post,

	parse: function(response){
		this.page_number = parseInt(response.page_number);
    	this.total_pages = parseInt(response.total_pages);
		return response.posts;
	}
});


window.Curate.Collections.feed = new Curate.Collections.Feed();
Curate.Collections.feed.fetch({
  data: { page: 1 }
});