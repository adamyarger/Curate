json.array!(@recipients) do |user|
	json.partial!('api/users/user', :user => user)
	
end