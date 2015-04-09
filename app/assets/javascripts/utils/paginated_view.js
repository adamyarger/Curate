Curate.PaginatedView = {

  listenForScroll: function(){
		$(window).off('scroll'); //remove previous listeners
		var throttledCallback = _.throttle(this.nextPage.bind(this), 200);
		$(window).on('scroll', throttledCallback);
	},

	nextPage: function () {
	    var view = this;
	    if (this.$('.spinner').visible()) {
	    	if(view.collection.page_number < view.collection.total_pages){
	    		view.collection.fetch({
	    			data: {page: view.collection.page_number + 1},
	    			remove: false
	    		});
	    	} else {
	    		view.$('.spinner').remove();
	    	}
	    }     
	}
};
