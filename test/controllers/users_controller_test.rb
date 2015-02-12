require 'test_helper'

class UsersControllerTest < ActionController::TestCase
  
  include Devise::TestHelpers
  
  setup do
    @request.env["devise.mapping"] = Devise.mappings[:user]
    @user = users(:adam)
    @other_user = users(:archer)
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

  test "should redirect index when not logged in" do
    get :index
    assert_redirected_to new_user_session_path
  end

  test "should redirect following when not logged in" do
    get :following, id: @user
    assert_redirected_to new_user_session_path
  end

  test "should redirect followers when when not logged in" do
    get :followers, id: @user
    assert_redirected_to new_user_session_path
  end



  

end
