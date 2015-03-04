class Link < ActiveRecord::Base
	belongs_to :owner, :class_name => "User", :foreign_key => :user_id

	 after_create :update_from_embedly
  
  validates :intro, :presence => true
  validates :content, :presence => true, :format => URI::regexp(%w(http https))
  

  scope :recent, -> { order("updated_at DESC")}

  def editable_by?(user)
    user && user == owner
  end

  def hit
    Page.increment_counter(:count_click, self.id)
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
    embedly_objs = embedly_api.oembed(:urls => urls)
    embedly_obj = embedly_objs[0]
 
    response_data = embedly_obj.marshal_dump
 
    link.favicon_url       =  response_data[:favicon_url]
    link.title             =  response_data[:title]
    link.author_name       =  response_data[:author_name]
    link.author_url        =  response_data[:author_url]
    link.provider_name     =  response_data[:provider_name]
    link.provider_url      =  response_data[:provider_url]
    link.description       =  response_data[:description]
    link.thumbnail_url     =  response_data[:thumbnail_url]
    link.thumbnail_width   =  response_data[:thumbnail_width]
    link.thumbnail_height  =  response_data[:thumbnail_height]
    link.html              =  response_data[:html]
    link.width             =  response_data[:width]
    link.height            =  response_data[:height]
 
    link.save
  end
end
