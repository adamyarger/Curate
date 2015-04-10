window.Curate.Models.Feed = Backbone.Model.extend({
  posts: function () {
    if (!this._posts) {
      this._posts = new Allonsy.Collections.Feed();
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