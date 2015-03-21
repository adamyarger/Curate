window.Curate.Routers.AppRouter = Backbone.Router.extend({

	routes: {
		'': 'postIndex'
	},

	postIndex: function(){
		var indexView = new Curate.Views.PostShow({
			collection: Curate.Collections.posts
		});

		Curate.Collections.posts.fetch();
		this._swapView(postView);
	},

	_swapView: function(view){
		if(this.currentView){
			this.currentView.remove();
		}
		this.currentView = view;

		$('.container').html(view.render().$el);
	}



});