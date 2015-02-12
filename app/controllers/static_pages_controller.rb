class StaticPagesController < ApplicationController
  def home
  	@post = current_user.posts.build if user_signed_in?
  	@feed_items = current_user.feed.paginate(:page => params[:page], :per_page => 5)
  end

  def about
  end
end
