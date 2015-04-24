class Api::LikesController < ApplicationController

  def create
      @likeable = find_likeable
          @user = current_user
          @like = @user.likes.build(likeable: @likeable)

          if @like.save
              redirect_to @likeable, notice: "Liked!"
          else
              redirect_to @likeable, notice: "Not liked!"
          end
  end

  def destroy
    @like = Like.find(params[:id])
    @like.destroy
    render :json => @like
  end

  def index
    @likeable = find_likeable
    @likes = @likeable.all

    render :json => @likes
  end

  def show
    @user = User.find(params[:id])
    @likes = @user.likes

    render :json => @likes
    # render 'api/likes/show'
  end


  private

  def like_params
    params.require(:likes).permit(:user_id, :likeable_id, :likeable_type)
  end

  def find_likeable
    params.each do |name, value|
      if name =~ /(.+)_id$/
        return $1.classify.constantize.find(value)
      end
    end
    nil
  end
end
