window.Curate.Models.Post = Backbone.Model.extend({

	urlRoot: '/api/posts',

	user: function(){
		if (!this._user){
			this._user = new Curate.Models.User();
		}
		return this._user;
	},

	likes: function() {
	    if (!this._likes) {
	      this._likes = new Curate.Collections.Likes([], { post: this });
	    };
	    
	    return this._likes;
	  },

	parse: function(jsonResp){
		if (jsonResp.user){
			this.user().set(jsonResp.user, {parse: true});
			delete jsonResp.user;
		};

		if (jsonResp.likes) {
	      this.likes().set(jsonResp.likes, { parse: true });
	      delete response.likes
	    };
	    
		return jsonResp;
		
	}

});