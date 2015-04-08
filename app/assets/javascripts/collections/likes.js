window.Curate.Collections.Likes = Backbone.Collection.extend({
	url: function () {
	    return '/api/likes/' + this.user_id;
	  },

	model: Curate.Models.User,

	getOrFetch: function(id){
		var model;
		var likes =this

		if (model = this.get(id)){
			model.fetch();
			return model;
		} else{
			model = new Curate.Models.Like({id: id});
			model.fetch({
				success: function(){likes.add(model)}
			});
			return model;
		}
	}
});


window.Curate.Collections.likes = new Curate.Collections.Likes();