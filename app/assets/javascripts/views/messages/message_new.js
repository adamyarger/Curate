window.Curate.Views.MessageNew = Backbone.View.extend({

	template: JST['messages/new'],

	initialize: function(options){
		this.listenTo(Curate.Collections.recipients, 'sync add', this.render)
	},

	events: {
		'submit form': 'submit'
	},

	render: function(){
		var renderedContent = this.template({
			users: Curate.Collections.recipients
		});
		this.$el.html(renderedContent);

		return this;
	},

	submit: function(event){
		event.preventDefault();

		var params = $(event.currentTarget).serializeJSON();
		console.log(params);
		var newMessage = new Curate.Models.Message(params);
		newMessage.save({}, {
			success: function(){
				Curate.Collections.messages.unshift(newMessage);
				
				Curate.Flash.success('message sent!');
			}
		});
	}

});