window.Curate = {
	Models: {},
	Collections: {},
	Routers: {},
	Views: {},

	init: function(){

		var rightNav = new Curate.Views.RightNav();
		$('#right-nav').append(rightNav.render().$el);

		var messageForm = new Curate.Views.MessageNew();
		$('#stream').append(messageForm.render().$el);

		new Curate.Routers.AppRouter();
		Backbone.history.start();
	}
};

$(Curate.init);