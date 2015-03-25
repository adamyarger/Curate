window.Curate = {
	Models: {},
	Collections: {},
	Routers: {},
	Views: {},

	init: function(){

		// var newView = new Curate.Views.PostsNew();
		// $('.container').append(newView.render().$el);

		new Curate.Routers.AppRouter();
		Backbone.history.start();
	}
};



$(Curate.init);