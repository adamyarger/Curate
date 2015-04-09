window.Curate.Collections.UsersIndex = Backbone.Collection.extend({
	url: '/api/users',
	model: Curate.Models.User,

	parse: function(response){
		this.page_number = parseInt(response.page_number);
    	this.total_pages = parseInt(response.total_pages);
		return response.users;
	}
});




window.Curate.Collections.usersIndex = new Curate.Collections.UsersIndex();
Curate.Collections.usersIndex.fetch({
  data: { page: 1 }
});