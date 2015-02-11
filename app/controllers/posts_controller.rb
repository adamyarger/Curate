class PostsController < ApplicationController
	before_action :authenticate_user!
	
	def create
		@post = current_user.posts.build(post_params)
		if @post.save
			flash[:success] = "Hizzah! Post Created!"   					# should flash a success message
			redirect_to root_url
		else
			render 'static_pages/home'   #change to render home page if you want to not have a posts/new url
		end
	end

	private

		def post_params
			params.require(:post).permit(:body)
		end

end
