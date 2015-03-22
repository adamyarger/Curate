window.Curate = {
	Models: {},
	Collections: {},
	Views: {},

	init: function(){
		var indexView = new Curate.Views.PostsIndex({
			collection: Curate.Collections.posts
		});

		Curate.Collections.posts.fetch();
		$('.container').append(indexView.render().$el);

		var newView = new Curate.Views.PostsNew();
		$('.container').append(newView.render().$el);
	}
};



$(Curate.init);