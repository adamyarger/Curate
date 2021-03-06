class Post < ActiveRecord::Base
  belongs_to :user
  has_many :likes, dependent: :destroy
  has_many :users_liked_by, through: :likes, source: :user

  default_scope -> { order(created_at: :desc) }
  validates :user_id, presence: true
  # validates :body, presence: true, length: {maximum: 500}
  # validates :content, :presence => true, :format => URI::regexp(%w(http https))

	after_create :update_from_embedly
 
  # validates :content, :presence => true, :format => URI::regexp(%w(http https))
  

  scope :recent, -> { order("updated_at DESC")}

  def is_liked_by?(user)
    self.users_liked_by.include?(user)
  end
  
  def update_from_embedly
 
    link = self
 
    urls = [content]

    embedly_api = Embedly::API.new(:key => Setting.embedly_key)
    embedly_objs = embedly_api.oembed(:urls => urls, :maxwidth => 500, :width => 500, :autoplay => false)
    embedly_obj = embedly_objs[0]
 
    response_data = embedly_obj.marshal_dump
 
    
    link.title             =  response_data[:title]
    link.author_url        =  response_data[:author_url]
    link.provider_name     =  response_data[:provider_name]
    link.html              =  response_data[:html]
    
 
    link.save
  end

  
  
end
