window.Curate.Collections.Messages = Backbone.Collection.extend({
	url: '/api/messages',
	model: Curate.Models.Message,

	parse: function(response){
		this.page_number = parseInt(response.page_number);
    	this.total_pages = parseInt(response.total_pages);
		return response.messages;
	}
});


window.Curate.Collections.messages = new Curate.Collections.Messages();
Curate.Collections.messages.fetch({
  data: { page: 1 }
});