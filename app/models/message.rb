class Message < ActiveRecord::Base
	
	attr_reader :user_tokens

	belongs_to :sender, :class_name => 'User'
	has_many :recipients
	has_many :users, :through => :recipients

	

	# validates :body, presence: true, length: {maximum: 300}
	validates :sender_id, presence: true
	validates :content, :presence => true
	
	after_create :update_from_embedly
	default_scope -> {order(created_at: :desc)}
  scope :recent, -> { order("updated_at DESC")}

	#this fixed the no id error
	def user_tokens=(ids)
	    self.user_ids = ids
	end

  def title_for_preview
    if title.blank?
      description
    else
      title
    end
  end

  def title_for_preview
    if title.blank?
      description
    else
      title
    end
  end
  
  def update_from_embedly
 
    link = self
 
    urls = [content]

    embedly_api = Embedly::API.new(:key => Setting.embedly_key)
    embedly_objs = embedly_api.oembed(:urls => urls, :maxwidth => 500, :width => 500)
    embedly_obj = embedly_objs[0]
 
    response_data = embedly_obj.marshal_dump
 
    
    link.title             =  response_data[:title]
    link.author_url        =  response_data[:author_url]
    link.provider_name     =  response_data[:provider_name]
    link.html              =  response_data[:html]
    
 
    link.save
  end

end