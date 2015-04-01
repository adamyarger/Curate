json.(user, :id, :name, :created_at, :avatar)
json.thumb_avatar user.avatar.url(:thumb)
json.medium_avatar user.avatar.url(:medium)




posts ||= nil
unless posts.nil?
	json.posts(posts) do |post|
		json.partial!('api/posts/post', :post => post)
	end

	json.following_count user.following.count
	json.followers_count user.followers.count
end



