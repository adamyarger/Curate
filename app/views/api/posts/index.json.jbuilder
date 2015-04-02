json.page_number params[:page]
json.total_pages @posts.total_pages


json.posts @posts do |post|
  json.partial! 'api/posts/feed', post: post
end





