window.Curate.Views.MessagesIndex = Backbone.View.extend(
	_.extend({}, Curate.PaginatedView,{
		template: JST['messages/index'],

		initialize: function(options){
			this.listenTo(this.collection, 'sync add', this.render);
		},

		render: function () {
		    var renderedContent = this.template({
			     messages: this.collection 
			   });
		    
		    this.$el.html(renderedContent);
		    this.listenForScroll();
		    return this;
		}

	})
);