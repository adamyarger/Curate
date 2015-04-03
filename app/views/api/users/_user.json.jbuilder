json.(user, :id, :name, :created_at, :avatar)
json.thumb_avatar user.avatar.url(:thumb)
json.medium_avatar user.avatar.url(:medium)

posts ||= nil
unless posts.nil?
	json.posts(posts) do |post|
		json.partial!('api/posts/post', :post => post)
		json.thumb_avatar user.avatar.url(:thumb)
		json.username user.name
	end

	json.following_count user.following.count
	json.followers_count user.followers.count
end
	
json.is_owner current_user?(user)
json.is_followed current_user.following?(user)
	





