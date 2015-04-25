class Like < ActiveRecord::Base
  
  belongs_to :post

  belongs_to :user

  def self.find_by_ids(post_id, user_id)
  	Like.where("post_id = ? AND user_id = ?", post_id, user_id).first
  end
  
end
