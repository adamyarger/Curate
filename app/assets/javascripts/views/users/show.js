window.Curate.Views.UsersShow = Backbone.CompositeView.extend({
	template: JST['users/show'],

	initialize: function(options){
		this.listenTo(this.model, 'sync', this.render);
		this.listenTo(this.model.posts(), 'add', this.addPost);

		this.model.posts().each(this.addPost.bind(this));
	},

	events: {
		'click .follow': 'toggleFollow',
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

	toggleFollow: function(){
		$.ajax('/api/relationships/' + this.model.id + '/togglefollow', {
			type: 'POST',
			success: function(){
				this.model.set('is_followed', !this.model.get('is_followed'));
				this.render();
			}.bind(this),
			error: function(){
				console.log('You are in grave danger!');
			}
		})
	}
});