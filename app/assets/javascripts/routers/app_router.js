window.Curate.Routers.AppRouter = Backbone.Router.extend({

	routes: {
		'': 'postIndex',
		'posts/new': 'postsNew',
		'users': 'userIndex',
		'users/:id': 'userShow',
		'users/:id/following': 'following'
	},

	postIndex: function(){
		var indexView = new Curate.Views.PostsIndex({
			collection: Curate.Collections.posts
		});

		// Curate.Collections.posts.fetch();
		// $('.container').html(indexView.render().$el)
		this._swapView(indexView);
	},

	userIndex: function(){
		var usersIndex = new Curate.Views.UsersIndex({
			collection: Curate.Collections.users
		});

		Curate.Collections.users.fetch();
		this._swapView(usersIndex);
	},

	postsNew: function(){
		var newView = new Curate.Views.PostsNew();
		this._swapView(newView);
	},


	userShow: function(id){
		var profile = Curate.Collections.users.getOrFetch(id);
		

		var showView = new Curate.Views.UsersShow({
			model: profile
		});

		this._swapView(showView);
	},

	// following: function(id){
	// 	var following = Curate.Collections.following.get(id);
	// 	var showView = new Curate.Views.FollowingIndex({
	// 		model: following
	// 	});

	// 	this._swapView(showView);
	// },

	  following: function (id) {
	    // TODO: this should be prefetched at startup
	    var follows = new Curate.Collections.Following(null, { user_id: parseInt(id) });
	    var that = this;
	    follows.fetch({
	      success: function (photos) {
	        var user = Curate.Collections.users.findWhere({ id: parseInt(id) });
	        var followingIndex = new Curate.Views.Following({
	          collection: follows,
	          model: user
	        });

	        that._swapView(followingIndex);
	      }
	    })
	  },

	_swapView: function(view){
		if(this.currentView){
			this.currentView.remove();
		}
		this.currentView = view;

		$('.container').html(view.render().$el);
	}



});