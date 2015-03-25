window.Curate = {
	Models: {},
	Collections: {},
	Routers: {},
	Views: {},

	init: function(){

		// var popOver = new Curate.Views.PopoverMenu();
		// $('.nav_avatar').append(popOver.render().$el);

		new Curate.Routers.AppRouter();
		Backbone.history.start();
	}
};



$(Curate.init);