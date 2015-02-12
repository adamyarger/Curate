class Post < ActiveRecord::Base
  belongs_to :user
  default_scope -> { order(created_at: :desc) }
  validates :user_id, presence: true
  validates :body, presence: true, length: {maximum: 140}

    auto_html_for :body do
	    html_escape
	    image
	    youtube(:width => 400, :height => 250, :autoplay => false)
	    vimeo(:width => 400, :height => 250, :autoplay => false)
	    soundcloud
	    link :target => "_blank", :rel => "nofollow"
	    simple_format
	end
  
end
