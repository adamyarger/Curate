window.Curate.Views.RightNav = Backbone.View.extend({
	template: JST['header/right-nav'],

	formTemplate: JST['header/post_modal'],

	events: {
		'click #notify': 'open',
		'click #message': 'openMessage'
	},

	render: function(){
		var renderedContent = this.template({
			posts: this.collection
		});

		this.$el.html(renderedContent);

		return this;
	},

	open: function(event){
		$('#post-form').slideToggle(200);

		

    


	},

	openMessage: function(event){

		 
		    $("#stream").toggle(200);
		 
		
	}

	
	
});