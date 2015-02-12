require 'test_helper'

class RelationshipsControllerTest < ActionController::TestCase
  
	include Devise::TestHelpers
  
	  setup do
	    @request.env["devise.mapping"] = Devise.mappings[:user]
	    @user = users(:adam)
	    @other_user = users(:archer)
	  end
  
	test "create should require logged-in user" do
		assert_no_difference 'Relationship.count' do
			post :create
		end
		assert_redirected_to new_user_session_path
	end

	test "destroy should require logged-in user" do
	    assert_no_difference 'Relationship.count' do
	      delete :destroy, id: relationships(:one)
	    end
	    assert_redirected_to new_user_session_path
	end

end
