class Recipient < ActiveRecord::Base
  belongs_to :message
  belongs_to :user
  # validates :message_id, presence: true
  validates :user_id, presence: true

  scope :unread, -> {where(read: false)}
end
