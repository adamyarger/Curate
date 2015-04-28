window.Curate.Views.UsersShow = Backbone.CompositeView.extend(
	_.extend({}, Curate.NestedPaginate,{
		template: JST['users/show'],

		initialize: function(options){
			this.listenTo(this.model, 'sync', this.render);
			this.listenTo(this.model.posts(), 'add', this.addPost);
			this.listenTo(this.model.posts(), 'remove', this.removePost);

			setInterval(this.nextPosts.bind(this), 1000);
			
			//used to remove zombie views
			this.model.posts().each(this.addPost.bind(this));
		},

		events: {
			'click .follow': 'toggleFollow'
		},

		render: function(){
			var renderedContent = this.template({
				user: this.model
			});

			this.$el.html(renderedContent);
			this.renderSubviews();
			return this;
		},

		addPost: function(post){
			var postShow = new Curate.Views.PostsShow({
				model: post
			});

			this.addSubview('.profile-posts', postShow);
			postShow.render();
		},

		nextPosts: function () {
	      this.nextPage(this.model.posts());
	    },

		removePost: function(post){
			var postDelete = 
				_(this.subviews()['.profile-posts']).find(function(subview){
					return subview.model == post;
				});
			this.removeSubview('.profile-posts', postDelete)
		},

		toggleFollow: function(){
			$.ajax('/api/relationships/' + this.model.id + '/togglefollow', {
				type: 'POST',
				success: function(){
					this.model.set('is_followed', !this.model.get('is_followed'));
					
					//fetch an updated feed when new user is followed
					Curate.Collections.feed.fetch();
					this.render();
				}.bind(this),
				error: function(){
					console.log('You are in grave danger!');
				}
			})
		}
	})
);