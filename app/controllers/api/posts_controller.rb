class Api::PostsController < ApplicationController

	def create
		@post = current_user.posts.build(post_params)
		
		if @post.save  					
			render 'api/posts/show'
		else
			# @feed_items = []
			render :json => @posts.errors, :status => :unprocessable_entity   
		end
	end

	def index
		if user_signed_in?
		  	# @post  = current_user.posts.build
		  	@posts = current_user.feed
		  	render 'api/posts/index'
		end
	end

	# def index
	# 	@posts = Post.all
	# 	render 'api/posts/index'
	# end

	def show
		@user = User.find(params[:id])
		@posts = @user.posts

		render 'api/posts/show'
		# render :json => @posts
	end

	# def show 
	# 	@post = Post.find(params[:id])
	# 	render :json => @post

	# end

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