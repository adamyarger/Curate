class StaticPagesController < ApplicationController
  def home
  	if user_signed_in?
  		@message = Message.new
  		@user = current_user.following
	  	@post  = current_user.posts.build
      @feed_items = current_user.feed.paginate(:page => params[:page], :per_page => 10)
      @recipients = Recipient.where(:user_id => current_user)
	end
  end

  def about
  end


end
