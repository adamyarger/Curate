window.Curate.Routers.AppRouter = Backbone.Router.extend({

	routes: {
		'': 'postIndex',
		'users': 'userIndex'
	},

	postIndex: function(){
		var indexView = new Curate.Views.PostsIndex({
			collection: Curate.Collections.posts
		});

		Curate.Collections.posts.fetch();
		$('.container').html(indexView.render().$el)
		// this._swapView(postView);
	},

	userIndex: function(){
		var usersIndex = new Curate.Views.UsersIndex({
			collection: Curate.Collections.users
		});

		Curate.Collections.users.fetch();
		$('.container').html(usersIndex.render().$el)
	}

	// _swapView: function(view){
	// 	if(this.currentView){
	// 		this.currentView.remove();
	// 	}
	// 	this.currentView = view;

	// 	$('.container').html(view.render().$el);
	// }



});