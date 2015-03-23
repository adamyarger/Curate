window.Curate.Views.PopoverMenu = Backbone.View.extend({

	template: JST['header/popover'],

	

	render: function(){
		var renderedContent = this.template();
		this.$el.html(renderedContent);

		return this;
	}

	

});