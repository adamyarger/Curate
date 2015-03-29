json.array!(@posts) do |post|
	json.partial!('api/posts/feed', :post => post)
end



