require 'test_helper'

class PostTest < ActiveSupport::TestCase
  

  def setup
    @user = users(:adam)
    # This code is not idiomatically correct.
    @post = @user.posts.build(body: "lorem ipsum")
  end

  test "should be valid" do
    assert @post.valid?
  end

  test "user id should be present" do
    @post.user_id = nil
    assert_not @post.valid?
  end

  test "content should be present" do
  	@post.body = "  "
  	assert_not @post.valid?
  end

  test "content should be at most 140 chars" do
  	@post.body = "a" * 141
  	assert_not @post.valid?
  end

  test "order should be most recent first" do
  	assert_equal Post.first, posts(:most_recent)
  end




end
