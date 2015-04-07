json.(post, :id, :user_id, :body, :content, :created_at, :html)

json.likes post.likes do |like|
  json.(like, :id, :likeable_id, :likeable_type, :user_id)
end



