require 'test_helper'

class PostTest < ActiveSupport::TestCase
  

  def setup
    @user = users(:adam)
    # This code is not idiomatically correct.
    @post = Post.new(body: "Lorem ipsum", user_id: @user.id)
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




end
