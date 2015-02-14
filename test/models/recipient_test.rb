require 'test_helper'

class RecipientTest < ActiveSupport::TestCase

  	def setup
		@recipient = Recipient.new(message_id: 1, user_id: 2)
  	end

  	test "should be valid" do
  		assert @recipient.valid?
  	end

	# test "message id should be present" do
	# 	@recipient.message_id = nil
	# 	assert_not @recipient.valid?
	# end

	test "user id should be present" do
		@recipient.user_id = nil
		assert_not @recipient.valid?
	end

end
