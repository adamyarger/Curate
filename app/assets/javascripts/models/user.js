window.Curate.Models.User = Backbone.Model.extend({

	urlRoot: '/api/users',

	posts: function(){
		if (!this._posts){
			this._posts = new Curate.Collections.Posts([], {
				user: this
			});
		}
		return this._posts;
	}

});