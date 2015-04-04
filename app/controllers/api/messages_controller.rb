class Api::MessagesController < ApplicationController
	before_action :authenticate_user!

	def new
		@message = Message.new
		@user = current_user.following
		@users = User.all
	end

	def create
		@message = current_user.messages.build(message_params)

		if @message.save
			render 'api/messages/show'
		else
			render :json => @messages.errors, :status => :unprocessable_entity
		end
	end

	def index
		@user = User.find(current_user)
		# @unread = Recipient.where(:user_id => @user).order("created_at DESC")
		# @unread.unread.update_all(read: true, updated_at: Time.now.utc)
		# @messages = @user.messages

		@messages = Message.all

		render :json => @messages
	end

	private

		def message_params
			params.require(:message).permit(:body, :content, :title, :thumbnail_url, :sender_id, user_tokens: [])
		end
end


