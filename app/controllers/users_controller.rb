class UsersController < ApplicationController
  before_action :authenticate_user!
  before_action :admin_user, only: :destroy

  def index
  	@users = User.paginate(page: params[:page])
  end

  def show
  	@user = User.find(params[:id])
  	@posts = @user.posts.paginate(page: params[:page])
  end

  def destroy
    User.find(params[:id]).destroy
    flash[:success] = "User deleted"
    redirect_to users_url
  end

  def following
    @title = "Following"
    @user  = User.find(params[:id])
    @users = @user.following.paginate(page: params[:page])
    render 'show_follow'
  end

  def followers
    @title = "Followers"
    @user  = User.find(params[:id])
    @users = @user.followers.paginate(page: params[:page])
    render 'show_follow'
  end

  private

    # confirm an admin user
    def admin_user
      redirect_to(root_url) unless current_user.admin?
    end

end

