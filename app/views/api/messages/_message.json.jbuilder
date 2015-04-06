json.(message, :id, :message_id, :user_id, :created_at, :read)

json.content 		message.message.content
json.sender  		message.message.sender.name
json.sender_id		message.message.sender_id
json.thumb_avatar  message.message.sender.avatar.url(:thumb)

if message.message.html.present?
	json.html	message.message.html
end

