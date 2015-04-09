json.page_number params[:page]
json.total_pages @users.total_pages

json.users @users do |user|
	json.partial!('api/users/user', :user => user)
	json.thumb_avatar image_path(user.avatar.url(:thumb))
end