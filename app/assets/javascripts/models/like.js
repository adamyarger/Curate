window.Curate.Models.Like = Backbone.Model.extend({

	urlRoot: '/api/likes',

	toJSON: function () {

	  var data = {
			"likeable_id" : this.get('likeable_id'),
			"likeable_type" : this.get('likeable_type')
		};

	  return data;
	}

});