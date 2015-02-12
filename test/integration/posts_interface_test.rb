# require 'test_helper'

# class PostsInterfaceTest < ActionDispatch::IntegrationTest
#   # include Devise::TestHelpers
#   include Warden::Test::Helpers
#   fixtures :all

#   def setup
#     @user = users(:adam)
#     # @request.env["devise.mapping"] = Devise.mappings[:user]
#   end

#   test "post interface" do
#     login_as(@user)
#     get root_path
#     assert_select 'div.pagination'
#     # Invalid submission
#     assert_no_difference 'post.count' do
#       post posts_path, post: { body: "" }
#     end
#     assert_select 'div#error_explanation'
#     # Valid submission
#     body = "This post really ties the room together"
#     assert_difference 'Post.count', 1 do
#       post posts_path, post: { body: body }
#     end
#     assert_redirected_to root_url
#     follow_redirect!
#     assert_match body, response.body
#     # Delete a post.
#     assert_select 'a', text: 'delete'
#     first_post = @user.posts.paginate(page: 1).first
#     assert_difference 'Post.count', -1 do
#       delete post_path(first_post)
#     end
#     # Visit a different user.
#     get user_path(users(:archer))
#     assert_select 'a', text: 'delete', count: 0
#   end
# end

