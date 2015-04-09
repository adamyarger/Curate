
window.Curate.Collections.Following = Backbone.Collection.extend({
	model: Curate.Models.User,

  initialize: function (models, options) {
    this.add(models);
    this.user_id = options.user_id;
  },

  url: function () {
    return '/api/users/' + this.user_id + '/following';
  },

  parse: function(response){
		this.page_number = parseInt(response.page_number);
    	this.total_pages = parseInt(response.total_pages);
		return response.users;
  }
});

window.Curate.Collections.following = new Curate.Collections.Following();
Curate.Collections.following.fetch({
  data: { page: 1 }
});