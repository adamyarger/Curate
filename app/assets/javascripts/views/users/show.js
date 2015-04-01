window.Curate.Views.UsersShow = Backbone.CompositeView.extend({
	template: JST['users/show'],

	initialize: function(options){
		this.listenTo(this.model, 'sync', this.render);
	},

	events: {
		'click #follow-toggle': 'toggleFollow',
	},

	render: function(){
		var renderedContent = this.template({
			user: this.model
		});

		this.$el.html(renderedContent);

		// if (Curate.current_user.following().findWhere({id: this.model.id})) {
		// 	this.$el.find('.follow-buttons').toggleClass('followed');
		// }

		return this;
	},

	followUser: function(){
		var userFollow = new Curate.Models.UserFollow
	},

	unfollowUser: function(){

	}
});