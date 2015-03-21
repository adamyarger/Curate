window.Curate = {
	Models: {},
	Collections: {},
	Views: {},

	init: function(){
		var view = new Curate.Views.PostsIndex({
			collection: Curate.Collections.posts
		});

		Curate.Collections.posts.fetch({
			success: function(){
				$('.container').append(view.render().$el);
			}
		});
	}
};



$(Curate.init);