json.(user, :id, :name, :created_at, :avatar)
json.thumb_avatar user.avatar.url(:thumb)

posts ||= nil
	unless posts.nil?
		json.posts(posts) do |post|
			json.partial!('api/posts/post', :post => post)
		end
end

