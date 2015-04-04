window.Curate.Collections.Messages = Backbone.Collection.extend({
	url: '/api/messages',
	model: Curate.Models.Message
});


window.Curate.Collections.messages = new Curate.Collections.Messages();