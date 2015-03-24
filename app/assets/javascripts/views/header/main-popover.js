window.Curate.Views.PopoverMenu = Backbone.View.extend({

	template: JST['header/popover'],
	

	events:{
		'click .nav_avatar': 'togglePop'
	},

	

	render: function(){
		var renderedContent = this.template();
		this.$el.html(renderedContent);

		return this;
	},

	togglePop: function(event){
		// event.preventDefault();
		
		// var popOver = new Curate.Views.PopoverMenu();
		// $('.nav_avatar').append(popOver.render().$el);
		
		// return this;
		alert("sup dude");	

	}
});