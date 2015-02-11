class StaticPagesController < ApplicationController
  def home
  	@post = current_user.posts.build if user_signed_in?
  end

  def about
  end
end
