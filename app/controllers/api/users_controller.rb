class Api::UsersController < ApplicationController
	
	# before_action :admin_user, only: :destroy

	def index
		@users = User.all.page(params[:page])
		render 'api/users/index'
	end

	def show
		@user = User.find(params[:id])
		@posts = @user.posts.page(params[:page])
		render 'api/users/show'
	end

	def posts
		@user = User.find(params[:id])
		@posts = @user.posts.page(params[:page])
		render 'api/posts/index'
	end

	def following
	  @title = "Following"
	  @user  = User.find(params[:id])
	  @users = @user.following.page(params[:page])
	  render 'api/users/index'
	end

	def likes
		@user = User.find(params[:id])
		@likes = @user.likes

    # render :json => @likes
    render 'api/likes/index'
	end

	def followers
	  @title = "Followers"
	  @user  = User.find(params[:id])
	  @users = @user.followers.page(params[:page])
	  render 'api/users/index'
	end

	def destroy
		
	end

	private

		# def admin_user
		# 	redirect_to(root_url) unless current_user.admin?
		# end

end