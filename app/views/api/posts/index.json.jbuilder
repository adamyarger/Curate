json.page params[:page] || 1
json.total_pages @posts.total_pages


json.posts @posts do |post|
  json.partial! 'api/posts/feed', post: post
end







