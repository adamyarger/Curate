json.(user, :id, :name, :created_at, :avatar)

posts ||= nil
unless posts.nil?
	json.posts(posts) do |post|
		json.partial!('api/posts/post', :post => post)
	end
end