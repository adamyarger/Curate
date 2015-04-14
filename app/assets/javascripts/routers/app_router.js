window.Curate.Routers.AppRouter = Backbone.Router.extend({

	routes: {
		'': 'postIndex',
		'posts/new': 'postsNew',
		'users': 'userIndex',
		'users/:id': 'userShow',
		'users/:id/following': 'following',
		'users/:id/followers': 'followers',
		'messages': 'messages',
		'likes/:id': 'likes'
	},

	postIndex: function(){
		var feed = new Curate.Models.Feed();
		var indexView = new Curate.Views.PostsIndex({
			model: feed
		});

		this._swapView(indexView);
	},

	userIndex: function(){
		var usersIndex = new Curate.Views.UsersIndex({
			collection: Curate.Collections.usersIndex
		});

		// Curate.Collections.users.fetch();
		this._swapView(usersIndex);
	},

	postsNew: function(){
		var newView = new Curate.Views.PostsNew();
		this._swapView(newView);
	},


	userShow: function(id){
		var profile = Curate.Collections.users.getOrFetch(id);
		profile.posts().fetch();
		var showView = new Curate.Views.UsersShow({
			model: profile
		});

		this._swapView(showView);
	},


	following: function (id) {
		// TODO: this should be prefetched at startup
		var follows = new Curate.Collections.Following(null, { user_id: parseInt(id) });
		var that = this;
		follows.fetch({
			data: { page: 1 },
		  success: function (follows) {
		    var user = Curate.Collections.users.findWhere({ id: parseInt(id) });
		    var followingIndex = new Curate.Views.Following({
		      collection: follows,
		      model: user
		    });

		    that._swapView(followingIndex);
		  }
		})
	},

	followers: function (id) {
	// TODO: this should be prefetched at startup
		var follows = new Curate.Collections.Follower(null, { user_id: parseInt(id) });
		var that = this;
		follows.fetch({
			data: { page: 1 },
		  success: function (follows) {
		    var user = Curate.Collections.users.findWhere({ id: parseInt(id) });
		    var followingIndex = new Curate.Views.Follower({
		      collection: follows,
		      model: user
		    });

		    that._swapView(followingIndex);
		  }
		})
	},

	messages: function(){
		var messageIndex = new Curate.Views.MessagesIndex({
			collection: Curate.Collections.messages
		});

		// Curate.Collections.messages.fetch();
		this._swapView(messageIndex);
	},

	likes: function(){
		var userLikes = new Curate.Views.Likes({
			collection: Curate.Collections.likes
		});

		var profile = Curate.Collections.likes.getOrFetch(id);
		this._swapView(userLikes);
	},

	_swapView: function(view){
		if(this.currentView){
			this.currentView.remove();
		}
		this.currentView = view;

		$('.container').html(view.render().$el);
	}



});