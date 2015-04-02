window.Curate.Collections.Feed = Backbone.Collection.extend({
	url: '/api/posts',
	model: Curate.Models.Feed,

	getOrFetch: function(id){
		var model;
		var feed = this;

		if(model = this.get(id)){
			model.fetch();
			return model;
		} else{
			model = new Curate.Models.Feed({id: id});
			model.fetch({
				success: function(){feed.add(model)}
			});
			return model;
		}
	},

	parse: function(response){
		this.page = response.page;
		this.total_pages = response.total_pages;
		return response.posts;
	}
});


window.Curate.Collections.feed = new Curate.Collections.Feed();
Curate.Collections.feed.fetch({
  data: { page: 1 }
});