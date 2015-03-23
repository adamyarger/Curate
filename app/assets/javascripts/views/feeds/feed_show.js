// window.Curate.Views.FeedShow = Backbone.CompositeView.extend({
// 	template: JST['feeds/feed'],

// 	initialize: function(options){
// 		this.listenTo(this.collection, 'sync add', this.render);
// 	},

// 	render: function(){
// 		var renderedContent = this.template({
// 			feed: this.collection
// 		});
// 		this.$el.html(renderedContent);

// 		return this;
// 	}
// });