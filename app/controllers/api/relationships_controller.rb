class Api::RelationshipsController < ApplicationController
  before_action :authenticate_user!

  def create
    @user = User.find(params[:followed_id])
    current_user.follow(@user)
    
    render json: @user
  end

  def destroy
    @user = Relationship.find(params[:id]).followed
    current_user.unfollow(@user)

    render json: @user
  end

  def toggle_follow
    @user = User.find(params[:id])
    if current_user.following?(@user)
      current_user.unfollow(@user)
    else
      current_user.follow(@user)
    end

    render json: @user
  end
end