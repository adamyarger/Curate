window.Curate.Models.Feed = Backbone.Model.extend({

	urlRoot: '/api/users',

	user: function(){
		if (!this._user){
			this._user = new Curate.Models.Feed();
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