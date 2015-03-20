class Api::PostsController < ApplicationController

	def create
		@post = current_user.posts.build(post_params)

		if @post.save  					
			render :json => @post
		else
			@feed_items = []
			render :json => @posts.errors, :status => :unprocessable_entity   
		end
	end

	# def destroy
	#     @post.destroy
	#     flash[:success] = "Post deleted"
	#     render ""
	# end

	private

		def post_params
			params.require(:post).permit(:body, :content, :title, :thumbnail_url)
		end

		def correct_user
	      @post = current_user.posts.find_by(id: params[:id])
	      redirect_to root_url if @post.nil?
	    end

end