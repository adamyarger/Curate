window.Curate.Views.UsersIndex = Backbone.View.extend({

	template: JST['users/index'],

	render: function(){
		var renderedContent = this.template();
		this.$el.html(renderedContent);

		return this;
	}

});