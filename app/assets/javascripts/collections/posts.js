window.Curate.Collections.Posts = Backbone.Collection.extend({
	
	url: function () {
	    if (this.user) {
	      return '/api/users/' + this.user.id + '/posts'
	    } else {
	      return '/api/posts'
	    
	    }
	  },

	

	model: Curate.Models.Post,

	initialize: function (models, options) {

	    if (options) {
	      if (options.user) {
	        this.user = options.user
	      }
	  }
	},

	parse: function(response){
		this.page = response.page;
    	this.total_pages = response.total_pages;
		return response.posts;
	}
});


window.Curate.Collections.posts = new Curate.Collections.Posts();