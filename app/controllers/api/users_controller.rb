class Api::UsersController < ApplicationController
	
	# before_action :admin_user, only: :destroy

	def index
		@users = User.all
		render 'api/users/index'
	end

	def show
		# @user = User.includes(:posts).find(params[:id])
		@user = User.find(params[:id])
		@posts = @user.posts
		
		render 'api/users/show'
	end

	def following
	  @title = "Following"
	  @user  = User.find(params[:id])
	  @users = @user.following.paginate(page: params[:page])
	  render 'api/users/index'
	end

	def followers
	  @title = "Followers"
	  @user  = User.find(params[:id])
	  @users = @user.followers.paginate(page: params[:page])
	  render 'api/users/index'
	end

	def destroy
		
	end

	private

		# def admin_user
		# 	redirect_to(root_url) unless current_user.admin?
		# end

end