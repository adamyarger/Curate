class Api::LikesController < ApplicationController

  def create
    @like = current_user.build.likes(like_params)

    if @like.save
      render :json => @like
    else
      render :json => @messages.errors, :status => :unprocessable_entity
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
