window.Curate.Collections.Feed = Backbone.Collection.extend({
	url: '/api/posts',
	model: Curate.Models.Feed
});


window.Curate.Collections.feed = new Curate.Collections.Feed();