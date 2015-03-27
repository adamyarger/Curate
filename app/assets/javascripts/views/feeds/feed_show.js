// window.Curate.Views.FeedShow = Backbone.CompositeView.extend({

// 	template: JST['feeds/feed'],

// 	className: 'feed-show',

// 	initialize: function(options){
// 		this.listenTo(this.model, 'sync unshift', this.render)
// 	},

// 	render: function(){
// 		var renderedContent = this.template({
// 			posts: this.model
// 		});

// 		this.$el.html(renderedContent);

// 		return this;
// 	}
		

// 	// renderTemplate: function(){
// 	// 	return this.template();
// 	// },

//  //    initialize: function () {
//  //      this.listenTo(this.model, 'sync', this.render);
//  //      // this.initFilterable();
//  //      // setInterval(this.nextPosts.bind(this), 1000);
//  //    },

//  //    addPost: function (post) {
//  //      var postShow = new Curate.Views.PostShow({
//  //        model: post
//  //        // displayAvatar: true
//  //      });
//  //      this.addSubview(".posts", postShow.render());
//  //    },

//  //    nextPosts: function () {
//  //      this.nextPage(this.model.posts());
//  //    }

//     // removePost: function (post) {
//     //   var subview = _.find(
//     //     this.subviews(".posts"),
//     //     function (subview) {
//     //       return subview.model === post;
//     //     }
//     //   );

// });