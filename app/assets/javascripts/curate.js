window.Curate = {
	Models: {},
	Collections: {},
	Routers: {},
	Views: {},

	init: function(){
		// var indexView = new Curate.Views.PostsIndex({
		// 	collection: Curate.Collections.posts
		// });

		// Curate.Collections.posts.fetch();
		// $('.container').append(indexView.render().$el);

		// var newView = new Curate.Views.PostsNew();
		// $('.container').append(newView.render().$el);

		var popOver = new Curate.Views.PopoverMenu();
		$('.nav_avatar').append(popOver.render().$el);

		new Curate.Routers.AppRouter();
		Backbone.history.start();
	}
};



$(Curate.init);