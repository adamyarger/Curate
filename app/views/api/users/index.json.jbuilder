json.array!(@users) do |user|
	json.partial!('api/users/user', :user => user)
	json.thumb_avatar user.avatar.url(:thumb)
end
