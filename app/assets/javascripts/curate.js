window.Curate = {
	Models: {},
	Collections: {},
	Routers: {},
	Views: {},

	init: function(){

		var rightNav = new Curate.Views.RightNav();
		$('#right-nav').append(rightNav.render().$el);

		new Curate.Routers.AppRouter();
		Backbone.history.start();
	}
};

$(Curate.init);