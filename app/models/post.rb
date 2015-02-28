class Post < ActiveRecord::Base
  belongs_to :user
  default_scope -> { order(created_at: :desc) }
  validates :user_id, presence: true
  validates :body, presence: true, length: {maximum: 140}
  validates :body_html, presence: true, length: {maximum: 140}
  # validates :body_html, :format => URI::regexp(%w(http https)) 

    auto_html_for :body do
	    html_escape
	    image
	    youtube(:width => '100%', :height => 320, :autoplay => false)
	    vimeo(:width => 400, :height => 250, :autoplay => false)
	    soundcloud(:show_artwork => true, :color => '1E90FF')
	    link :target => "_blank", :rel => "nofollow"
	    simple_format
	end
  
end
