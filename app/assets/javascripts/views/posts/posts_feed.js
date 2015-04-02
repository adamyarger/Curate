window.Curate.Views.PostsIndex = Backbone.CompositeView.extend({
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
		'click button#next': 'nextPage'
	},

	refresh: function(){
		this.collection.fetch();
	},

	listenForScroll: function(){
		$(window).off('scroll'); //remove previous listeners
		var throttledCallback = _.throttle(this.nextPage.bind(this), 200);
		$(window).on('scroll', throttledCallback);
	},

	nextPage: function(){
		var view = this;
		Curate.Collections.feed.fetch({
			data: {page:  view.page_number + 1},
			remove: false
		});
		
	},

	render: function(){
		var renderedContent = this.template({
			posts: this.collection
		});

		this.$el.html(renderedContent);
		// this.listenForScroll();

		this.renderSubviews();

		return this;
	}
});