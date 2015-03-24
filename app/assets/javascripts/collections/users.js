window.Curate.Collections.Users = Backbone.Collection.extend({
	url: '/api/users',
	model: Curate.Models.User
});


window.Curate.Collections.users = new Curate.Collections.Users();