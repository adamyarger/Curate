window.Curate.Collections.Posts = Backbone.Collection.extend({
	url: '/api/posts',
	model: Curate.Models.Post
});


// window.Curate.Collections.posts = new Curate.Collections.Posts();