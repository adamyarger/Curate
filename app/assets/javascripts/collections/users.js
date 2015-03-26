window.Curate.Collections.Users = Backbone.Collection.extend({
	url: '/api/users',
	model: Curate.Models.User,

	getOrFetch: function(id){
		var model;
		var users =this

		if (model = this.get(id)){
			model.fetch();
			return model;
		} else{
			model = new Curate.Models.User({id: id});
			model.fetch({
				success: function(){users.add(model)}
			});
			return model;
		}
	}
});


window.Curate.Collections.users = new Curate.Collections.Users();