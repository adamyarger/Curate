// window.Curate.Views.PostModal = Backbone.View.extend({
// 	template: JST['header/post_modal'],

// 	initialize: function(options){
// 		this.listenTo(this.collection, 'sync unshift', this.render)
// 	},

	

// 	events: {
// 		'click .button-circle', 'toggle'
// 	},

// 	render: function(){
// 		var renderedContent = this.template({
// 			posts: this.collection
// 		});

// 		this.$el.html(renderedContent);

// 		return this;
// 	},

// 	toggle: function(event){
// 		event.preventDefault();

// 		alert('hello');
// 	}
// });