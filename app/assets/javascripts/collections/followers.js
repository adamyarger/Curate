
window.Curate.Collections.Follower = Backbone.Collection.extend({
	model: Curate.Models.User,

  initialize: function (models, options) {
    this.add(models);
    //throws error but cant work with out it... strange
    this.user_id = options.user_id;
  },

  url: function () {
    return '/api/users/' + this.user_id + '/followers';
  },

  parse: function(response){
		this.page_number = parseInt(response.page_number);
    	this.total_pages = parseInt(response.total_pages);
		return response.users;
  }
});

window.Curate.Collections.followers = new Curate.Collections.Follower();
Curate.Collections.followers.fetch({
  data: { page: 1 }
});