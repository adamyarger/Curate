require 'test_helper'

class UserTest < ActiveSupport::TestCase
  
	def setup
		@user = User.new({
		:email => "hafizbadrie@hotmail.com",
		:name => "hafizblubis",
		:password => "devisetest",
		:password_confirmation => "devisetest"
		})
	end

	test "sign up" do
		assert @user.save, "User not signed up!"
	end

	test "user edit without password" do
		user = User.first
		new_data = {
		:email => "hafizbadrie@gmail.com",
		:name => "hafizlubis"
		}
		new_data = ActionController::Parameters.new(new_data)
		new_data = new_data.permit(:email, :name)
		user.update_without_password(new_data)

		assert_equal user.name, 'hafizlubis', "User is not updated"
	end

	test "user edit with password" do
		user = User.first
		new_data = {
		:name => "hafizlubis",
		:current_password => "hafizmelulu",
		:password => "devisetest",
		:password_confirmation => "devisetest"
		}
		new_data = ActionController::Parameters.new(new_data)
		new_data = new_data.permit(:email, :name, :current_password,
		:password, :password_confirmation)
		user.update_with_password(new_data)

		assert_equal user.name, 'hafizlubis', "Password is not updated"
	end

	test "user deletion" do
		user = User.first
		user.destroy
		deleted_user = User.first
		assert deleted_user.nil?, "User is not deleted"
	end

	test "associated posts should be destroyed when user is " do
		@user.save
		@user.posts.create!(body: "Lorem Ipsum")
		assert_difference 'Post.count', -1 do
			@user.destroy
		end
	end


	
end
