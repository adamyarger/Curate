Curate.Collections.Likes = Backbone.Collection.extend({
  model: Curate.Models.Like,
  
  url: "/api/likes",
  
  getOrFetch: function (id) {
      var like = this.get(id);

      if(!like) {
        like = new Curate.Models.Like({ id: id });
        like.fetch({
          success: function () {
            Curate.Likes.add(like)
          }
        });
      } else {
        like.fetch();
      }
      
      return like;
    }
})

window.Curate.Collections.likes = new Curate.Collections.Likes();