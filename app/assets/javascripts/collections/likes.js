
window.Curate.Collections.Likes = Backbone.Collection.extend({
  model: Curate.Models.Like,

  initialize: function (models, options) {
    this.add(models);
    //throws error but cant work with out it... strange
    this.user_id = options.user_id;
  },

  url: function () {
    return '/api/users/' + this.user_id + '/likes';
  },

  parse: function(response){
    this.page_number = parseInt(response.page_number);
    this.total_pages = parseInt(response.total_pages);
    return response.likes;
  }
});

window.Curate.Collections.likes = new Curate.Collections.Likes();
Curate.Collections.likes.fetch({
  data: { page: 1 }
});