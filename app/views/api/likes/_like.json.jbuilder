json.(like, :id, :post_id, :user_id, :created_at)

json.content like.post.content
json.html    like.post.html
json.body    like.post.body

json.is_liked like.post.is_liked_by?(current_user)
json.num_likes like.post.likes.count




