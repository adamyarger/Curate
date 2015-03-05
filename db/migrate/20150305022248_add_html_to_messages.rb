class AddHtmlToMessages < ActiveRecord::Migration
  def change
  	add_column :messages, :title, :string
    add_column :messages, :author_url, :string
    add_column :messages, :provider_name, :string
    add_column :messages, :content, :string
    add_column :messages, :html, :string
    add_column :messages, :thumbnail_url, :string
  end
end
