class Api::PostsController < ApplicationController

	before_action :authenticate_user!
	before_action :correct_user, only: :destroy

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
		  	@posts = current_user.feed.paginate(:page => params[:page], :per_page => 10)

		  	render 'api/posts/index'
		end
	end

	def show
		@user = User.find(params[:id])
		@posts = @user.posts

		render 'api/posts/show'
		# render :json => @posts
	end

	def destroy
	    @post.destroy
	    render "api/posts/show"
	end

	private

		def post_params
			params.require(:post).permit(:body, :content, :title, :thumbnail_url)
		end

		def correct_user
	      @post = current_user.posts.find_by(id: params[:id])
	      redirect_to root_url if @post.nil?
	    end

end