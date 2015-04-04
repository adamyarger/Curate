window.Curate.Views.MessagesIndex = Backbone.View.extend({
	template: JST['messages/index'],

	render: function(){
		var renderedContent = this.template({
			message: this.model
		});
		this.$el.html(renderedContent);
		return this;
	}
});