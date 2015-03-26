
window.Curate.Collections.Following = Backbone.Collection.extend({
	model: Curate.Models.User,

  initialize: function (models, options) {
    this.add(models);
    this.user_id = options.user_id;
  },

  url: function () {
    return '/api/users/' + this.user_id + '/following';
  }
});

// window.Curate.Collections.following = new Curate.Collections.FollowingIndex();