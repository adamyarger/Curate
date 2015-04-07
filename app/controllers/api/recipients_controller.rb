class Api::RecipientsController < ApplicationController
	before_action :authenticate_user!

	def index
		 @recipients = current_user.followers

		render 'api/recipients/index'
	end

end


