window.Curate.Collections.Users = Backbone.Collection.extend({
	url: '/api/users',
	model: Curate.Models.User,

	getOrFetch: function(id){
		var model;
		if (model = this.get(id)){
			return model;
		} else{
			model = new Curate.Models.User({id: id});
			model.fetch();
			return model;
		}
	}
});


window.Curate.Collections.users = new Curate.Collections.Users();