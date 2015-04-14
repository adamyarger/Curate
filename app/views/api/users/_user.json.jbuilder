json.(user, :id, :name, :created_at, :avatar)
json.thumb_avatar 		image_path(user.avatar.url(:thumb))
json.medium_avatar 		image_path(user.avatar.url(:medium))
json.is_owner 			current_user?(user)
json.is_followed 		current_user.following?(user)

posts ||= nil
unless posts.nil?
	json.page params[:page] || 1
	json.total_pages @posts.total_pages

	json.posts(posts) do |post|
		json.partial!('api/posts/post', :post => post)
		json.thumb_avatar image_path(user.avatar.url(:thumb))
		json.username user.name
		json.is_owner current_user?(user)
	end

	json.following_count user.following.count
	json.followers_count user.followers.count
end

likes ||= nil
unless likes.nil?
	json.likes(likes) do |likes|
		json.partial!('api/likes/like', :like => like)
	end
end

json.likes user.likes do |post|
  json.extract! post, :id, :likeable_type
end


	

	





