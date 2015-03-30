window.Curate.Views.RightNav = Backbone.View.extend({
	template: JST['header/right-nav'],

	// initialize: function(options){
	// 	this.listenTo(this.collection, 'sync unshift', this.render)
	// },

	

	events: {
		'click #notify': 'toggle'
	},

	render: function(){
		var renderedContent = this.template({
			posts: this.collection
		});

		this.$el.html(renderedContent);

		return this;
	},

	toggle: function(event){
		event.preventDefault();

		alert('hello');
	}
});