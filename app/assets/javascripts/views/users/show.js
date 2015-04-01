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

		return this;
	},

	toggleFollow: function(){
		$.ajax('/api/relationships/' + this.model.id , {
			type: 'POST',
			success: function(){
				this.model.set('is_followed', !this.model.get('is_followed'));
				this.render();
			}.bind(this),
			error: function(){
				console.log('You are in grave danger!');
			}
		})
	}
});