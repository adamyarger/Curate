window.Curate.Models.Post = Backbone.Model.extend({

	urlRoot: '/api/posts',

	user: function(){
		if (!this._user){
			this._user = new Curate.Models.Post();
		}
		return this._user;
	},

	parse: function(jsonResp){
		if (jsonResp.user){
			this.user().set(jsonResp.user, {parse: true});
			delete jsonResp.user;
		}
		return jsonResp;
		
	}

});