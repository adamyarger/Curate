json.(post, :id, :user_id, :body, :content, :created_at, :html)

json.user do
  json.(post.user, :id, :name, :avatar)
end