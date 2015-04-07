window.Curate.Collections.Likes = Backbone.Collection.extend({

	model: Curate.Models.Like,

	url: function(){
		return '/users/' + this.likeable.get('recipient').get('id') + '/posts/' + this.likeable.get('id') + '/likes';
	},

	initialize: function(models, options){
		this.likeable = options.likeable;
		this.add(models);
	}

});