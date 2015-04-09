json.array!(@users) do |user|
	json.partial!('api/users/user', :user => user)
	json.thumb_avatar image_path(user.avatar.url(:thumb))
	
end
