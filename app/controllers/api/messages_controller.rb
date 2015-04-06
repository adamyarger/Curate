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
	     @messages = Recipient.where(:user_id => @user.id)
	     # save message id then fetch through 
	     # @id = @messages.id
	     @sent_messages = Message.where(:sender_id => @user.id)
	    
	     # @message = Message.where(:id => @messages.message_id)

		render :json => @messages
	end

	private

		def message_params
			params.require(:message).permit(:body, :content, :title, :thumbnail_url, :sender_id, user_tokens: [])
		end
end


