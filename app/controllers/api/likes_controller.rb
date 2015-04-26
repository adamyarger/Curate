class Api::LikesController < ApplicationController

  def create
     @like = current_user.likes.build(message_params)

    if @like.save
      render :json => @like 
    else
      render :json => @like.errors, :status => :unprocessable_entity
    end
  end

  def destroy
    @like = Like.find(params[:id])
    @like.destroy
    render :json => @like
  end

  def index
    @likes = Like.where(user_id: current_user.id).paginate(:page => params[:page], :per_page => 10)
    # @like = Like.all
    # render :json => @likes
    render "api/likes/index"
  end

  def show
    @user = User.find(params[:id])
    @likes = @user.likes

    render :json => @likes
    # render 'api/likes/show'
  end


  private

  def like_params
    params.require(:likes).permit(:user_id, :post_id)
  end

end
