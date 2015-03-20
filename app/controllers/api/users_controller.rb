class Api::UsersController < ApplicationController

	def index
		@users = User.where(:user_id => params[:user_id])
		render "users/index"
	end

	def show
		
	end

end