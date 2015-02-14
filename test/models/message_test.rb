require 'test_helper'

class MessageTest < ActiveSupport::TestCase
  
	def setup
		@user = users(:adam)
		@message = messages(:one)
	end

	test "should be valid" do
		assert @message.valid?
	end

	test "user id should be present" do
		@message.sender_id = nil
		assert_not @message.valid?
	end

	test "body should be present" do
		@message.body = "  "
		assert_not @message.valid?
	end

	test "body should be under 300 chars" do
		@message.body = "a" * 301
		assert_not @message.valid?
	end

	# test "order should be recent first" do
	# 	assert_equal Message.first, message(:most_recent)
	# end

end

