window.Curate.Views.PostsIndex = Backbone.CompositeView.extend(
	_.extend({}, Curate.PaginatedView,{
		template: JST['posts/index'],

		initialize: function(options){
			this.listenTo(this.collection, 'sync add', this.render);

			var postNewView = new Curate.Views.PostsNew({
				post: this.model
			});
			this.addSubview('#post-new', postNewView);
		},

		events: {
			'click button#refresh': 'refresh',
			'click button#flash': 'flash'
		},

		flash: function(){
			Curate.Flash.success('Post success!');
		},

		refresh: function(){
			this.collection.fetch();
		},

		render: function(){
			var renderedContent = this.template({
				posts: this.collection
			});

			this.$el.html(renderedContent);
			this.listenForScroll();

			this.renderSubviews();

			return this;
		}
	})
);