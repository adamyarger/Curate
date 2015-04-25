window.Curate.Views.Likes = Backbone.View.extend(
	_.extend({}, Curate.PaginatedView,{

		template: JST['users/likes'],

		initialize: function(options){
			this.listenTo(this.collection, 'sync add', this.render)

		},

		render: function(){

			//allow us to us the users collection in the tempatre !important
			var renderedContent = this.template({
				likes: this.collection
			});

			console.log('hello world');
			

			this.$el.html(renderedContent);

			return this;
		}
	})
);