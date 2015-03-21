window.Curate.Routers.AppRouter = Backbone.Router.extend({

	routes: {
		'': 'postIndex'
	},

	feedShow: function(){
		var indexView = new Curate.Views.FeedShow({
			collection: Curate.Collections.feed
		});

		Curate.Collections.feed.fetch();
		this._swapView(feedView);
	},

	_swapView: function(view){
		if(this.currentView){
			this.currentView.remove();
		}
		this.currentView = view;

		$('.container').html(view.render().$el);
	}



});