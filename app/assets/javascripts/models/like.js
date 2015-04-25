window.Curate.Models.Like = Backbone.Model.extend({
	url: function () {
    return '/api/likes/' + this.user_id;
  }
});