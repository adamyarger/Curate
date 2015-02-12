require 'test_helper'

class PostsInterfaceTest < ActionDispatch::IntegrationTest
  include Warden::Test::Helpers
  fixtures :all

  def setup
    @user = users(:adam)
  end

  # test "profile display" do
  #   get user_path(@user)
  #   assert_template 'users/show'
  #   assert_select 'title', full_title(@user.name)
  #   assert_select 'h1', text: @user.name
    
  #   assert_match @user.posts.count.to_s, response.body
  #   assert_select 'div.pagination'
  #   @user.posts.paginate(page: 1).each do |post|
  #     assert_match post.body, response.body
  #   end
  # end

  
  
end