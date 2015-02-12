class PostsController < ApplicationController
	before_action :authenticate_user!
	
	def create
		@post = current_user.posts.build(post_params)
		if @post.save
			flash[:success] = "Hizzah! Post Created!"   					
			redirect_to root_url
		else
			@feed_items = []
			render 'static_pages/home'   
		end
	end

	private

		def post_params
			params.require(:post).permit(:body)
		end

		# def correct_user
		# 	@post = current_user.posts.find_by(id: params[:id])
		# 	redirect_to root_url if @post.nil?
		# end

end
