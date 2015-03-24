class Api::UsersController < ApplicationController
	
	# before_action :admin_user, only: :destroy

	def index
		@users = User.all
		render :json => @users
	end

	def show
		@user = User.find(params[:id])
		@posts = @user.posts

		render :json => @user
		# render :json => @posts
	end

	def destroy
		
	end

	private

		# def admin_user
		# 	redirect_to(root_url) unless current_user.admin?
		# end

end