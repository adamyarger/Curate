class Message < ActiveRecord::Base

	attr_reader :user_tokens

	belongs_to :sender, :class_name => 'User'
	has_many :recipients
	has_many :users, :through => :recipients

	default_scope -> {order(created_at: :desc)}

	validates :body, presence: true, length: {maximum: 300}
	validates :sender_id, presence: true


	#this fixed the no id error
	def user_tokens=(ids)
	    self.user_ids = ids
	end

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