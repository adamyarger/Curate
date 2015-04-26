json.array!(@likes) do |like|
	json.partial!('api/likes/like', :like => like)
	json.avatar like.user.avatar.url(:thumb)
	json.name like.user.name
	
end

