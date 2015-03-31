json.array!(@users) do |user|
	json.partial!('api/users/user', :user => user)
	json.thumb_url user.avatar.url(:thumb)
end