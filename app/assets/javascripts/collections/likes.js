// window.Curate.Collections.Likes = Backbone.Collection.extend({
// 	url: function () {
// 	    return '/api/likes/' + this.user_id;
// 	  },

// 	model: Curate.Models.User,

// 	getOrFetch: function(id){
// 		var model;
// 		var likes =this

// 		if (model = this.get(id)){
// 			model.fetch();
// 			return model;
// 		} else{
// 			model = new Curate.Models.Like({id: id});
// 			model.fetch({
// 				success: function(){likes.add(model)}
// 			});
// 			return model;
// 		}
// 	}
// });

window.Curate.Collections.Likes = Backbone.Collection.extend({
	model: Curate.Models.User,

  initialize: function (models, options) {
    this.add(models);
    //throws error but cant work with out it... strange
    this.user_id = options.user_id;
  },

  url: function () {
    return '/api/likes/' + this.user_id;
  },

  parse: function(response){
		this.page_number = parseInt(response.page_number);
    	this.total_pages = parseInt(response.total_pages);
		return response.users;
  }
});

window.Curate.Collections.likes = new Curate.Collections.Likes();
Curate.Collections.followers.fetch({
  data: { page: 1 }
});


