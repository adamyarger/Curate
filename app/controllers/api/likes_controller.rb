class Api::LikesController < ApplicationController
  def create
    @like = current_user.likes.create(like_params)

    user = (@like.likeable_type == "Post") ? @like.likeable.author : @like.likeable.user
    notify!(user, @like)

    if request.xhr?
      render json: @like
    else
      flash[:notices] = ["liked"]
      redirect_to :back
    end
  end

  def index
    @likes = Like.all

    render :json => @likes
  end

  def destroy
    @like = current_user.likes.where(id: params[:id]).first!

    @like.destroy

    if request.xhr?
      render json: @like
    else
      flash[:notices] = ["unliked"]
      redirect_to :back
    end
  end

  private

  def like_params
    params.require(:likes).permit(:user_id, :likeable_id, :likeable_type)
  end
end
