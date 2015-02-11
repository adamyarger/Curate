require 'test_helper'

class UsersControllerTest < ActionController::TestCase
  
  include Devise::TestHelpers
  
  setup do
    @request.env["devise.mapping"] = Devise.mappings[:user]
  end

  test "should be redirected when not logged in" do
  	get :index
  	assert_redirected_to new_user_session_path
  end

  test "should sign in" do
  	# @request.env["devise.mapping"] = Devise.mappings[:user]
  	user = User.first
  	sign_in user

  	get :index
  	assert_response :success, "User id not signed in!"
  end



  

end
