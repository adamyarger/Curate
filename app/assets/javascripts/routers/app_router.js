window.Curate.Routers.AppRouter = Backbone.Router.extend({

	routes: {
		'': 'postIndex',
		'users': 'userIndex',
		'users/:id': 'userShow'
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
	},

	// usersShow: function(id){
	// 	var model = Curate.Collections.users.getOrFetch(id);

	// 	var showUser = new Curate.Views.UsersShow({
	// 		model: model
	// 	});
	// 	$('container').html(showUser.render().$el);
	// }

	userShow: function(id){
		var profile = Curate.Collections.users.getOrFetch(id);
		

		var showView = new Curate.Views.UsersShow({
			model: profile
		});

		this._swapView(showView);
	},

	_swapView: function(view){
		if(this.currentView){
			this.currentView.remove();
		}
		this.currentView = view;

		$('.container').html(view.render().$el);
	}



});