json.(post, :id, :user_id, :body, :content, :created_at, :html)

json.is_liked post.is_liked_by?(current_user)
json.num_likes post.likes.count

json.user do
  json.(post.user, :id, :name, :avatar)
  json.thumb_avatar image_path(post.user.avatar.url(:thumb))
end


