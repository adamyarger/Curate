// window.Curate.Views.PostsIndex = Backbone.CompositeView.extend({
// 	template: JST['posts/index'],

// 	initialize: function(options){
// 		this.listenTo(this.collection, 'sync add', this.render);

// 		var postNewView = new Curate.Views.PostsNew({
// 			post: this.model
// 		});
// 		this.addSubview('#post-new', postNewView);
// 	},

// 	events: {
// 		'click button#refresh': 'refresh'
// 	},

// 	refresh: function(){
// 		this.collection.fetch();
// 	},

// 	listenForScroll: function(){
// 		$(window).off('scroll'); //remove previous listeners
// 		var throttledCallback = _.throttle(this.nextPage.bind(this), 200);
// 		$(window).on('scroll', throttledCallback);
// 	},

// 	nextPage: function(){
// 		var view = this;
// 		if ($(window).scrollTop() > $(document).height() - $(window).height() - 50){
// 			if (view.collection.page_number < view.collection.total_pages) {
// 				view.collection.fetch({
// 					data: {page: view.collection.page_number + 1},
// 					remove: false
// 				});
// 			}
// 		}
// 	},

// 	render: function(){
// 		var renderedContent = this.template({
// 			posts: this.collection
// 		});

// 		this.$el.html(renderedContent);
// 		this.listenForScroll();

// 		this.renderSubviews();

// 		return this;
// 	}
// });