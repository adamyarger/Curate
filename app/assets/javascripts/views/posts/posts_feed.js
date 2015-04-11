window.Curate.Views.PostsIndex = Backbone.CompositeView.extend(
	_.extend({}, Curate.NestedPaginate,{
		template: JST['posts/feed'],

		initialize: function(options){
			this.listenTo(this.model, 'sync', this.render);
			this.listenTo(this.model.posts(), 'add', this.addPost);
			// this.listenTo(this.model.posts(), 'remove', this.removePost);

			this.model.posts().each(this.addPost.bind(this));

			setInterval(this.nextPosts.bind(this), 1000);

			var postNewView = new Curate.Views.PostsNew({
				post: this.model
			});

			this.addSubview('#post-new', postNewView);
		},

		addPost: function (post) {
			var postShow = new Curate.Views.PostsShow({
				model: post
			});
			
			this.addSubview("#feed-posts", postShow.render());
	    },

	    nextPosts: function () {
	      this.nextPage(this.model.posts());
	    },

	    renderTemplate: function(){
	    	return this.template();
	    },

		render: function(){
			var renderedContent = this.template({
				posts: this.collection
			});

			this.$el.html(renderedContent);

			this.renderSubviews();

			return this;
		}
	})
);