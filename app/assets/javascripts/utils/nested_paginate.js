Curate.NestedPaginate = {
  // I set an interval-based callback to nextPage in my child views.

  nextPage: function (collection) {
    var self = this;
    if (this.$('.spinner').visible()) {
      if (collection.page < collection.total_pages) {
        collection.fetch({
          data: { page: parseInt(collection.page) + 1 },
          remove: false,
          wait: true
        });
      } else {
        self.$('.spinner').remove();
      }
    }
  }
};
