require 'test_helper'

class PostsControllerTest < ActionController::TestCase
  
	include Devise::TestHelpers

	def setup
		@request.env["devise.mapping"] = Devise.mappings[:user]
		@post = posts(:orange)
	end

	test "should redirect create when not logged in" do
		assert_no_difference 'Post.count' do
			post :create, post: { body: "Lorem ipsum" }
		end
		assert_redirected_to new_user_session_path
	end

	# test "should redirect destroy when not logged in" do
	# 	assert_no_difference 'Post.count' do
	# 		delete :destroy, id: @post
	# 	end
	# 	assert_redirected_to new_user_session_path
	# end

end



