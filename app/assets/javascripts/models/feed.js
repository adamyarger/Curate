window.Curate.Models.Feed = Backbone.Model.extend({
  posts: function () {
    if (!this._posts) {
      this._posts = new Curate.Collections.Posts();
    }
    return this._posts;
  },
  
  initialize: function () {
    this.posts().fetch({
      remove: false,
      data: { page: 1 }
    });
  }
});