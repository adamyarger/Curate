
window.Curate.Collections.Recipients = Backbone.Collection.extend({
	model: Curate.Models.Recipient,


  url: '/api/recipients'
  
  
});

window.Curate.Collections.recipients = new Curate.Collections.Recipients();