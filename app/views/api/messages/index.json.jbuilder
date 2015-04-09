json.page_number params[:page]
json.total_pages @messages.total_pages


json.messages (@messages) do |message|
	json.partial!("api/messages/message", :message => message)
end