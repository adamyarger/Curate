json.(post, :id, :user_id, :body, :content, :created_at, :html)

json.is_liked post.is_liked_by?(current_user)
json.num_likes post.likes.count


json.user do
	json.name post.user.name
	json.thumb_avatar image_path(post.user.avatar.url(:thumb))
	json.id post.user.id
end







