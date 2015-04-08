class Api::LikesController < ApplicationController

  # def create
  #   @like = current_user.build.likes(like_params)

  #   if @like.save
  #     render :json => @like
  #   else
  #     render :json => @messages.errors, :status => :unprocessable_entity
  #   end
  # end

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

  def index
    @likes = Like.all

    render :json => @likes

    # render :json => @likes
  end

  def show
    @user = User.find(params[:id])
    @likes = @user.likes

    render :json => @likes
    # render 'api/likes/show'
  end

  # def destroy
  #   @like = current_user.likes.where(id: params[:id]).first!

  #   @like.destroy

  #   if request.xhr?
  #     render json: @like
  #   else
  #     flash[:notices] = ["unliked"]
  #     redirect_to :back
  #   end
  # end

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
