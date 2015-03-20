class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # protect_from_forgery with: :exception
  # include AutoHtml
  protect_from_forgery with: :null_session

  

  before_filter :configure_permitted_parameters, if: :devise_controller?

  before_filter :unread
  before_filter :nav_message

	protected

	def configure_permitted_parameters
	  devise_parameter_sanitizer.for(:sign_up) { |u| u.permit(:name, :email, :password) }
	  devise_parameter_sanitizer.for(:account_update) { |u| u.permit(:name, :email, :password, :current_password, :avatar) }
	end

	def unread
		@count = Recipient.where(:user_id => current_user)
	end

	def nav_message
		@message = Message.new
		if user_signed_in?
			@recipients = current_user.following
		end
	end
end
