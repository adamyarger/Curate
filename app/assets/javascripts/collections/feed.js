window.Curate.Collections.Feed = Backbone.Collection.extend({
	url: '/api/posts',
	model: Curate.Models.Post,

	parse: function(response){
		this.page = response.page;
	},

	initialize: function(){
		this.fetch();
	}
});


window.Curate.Collections.feed = new Curate.Collections.Feed();