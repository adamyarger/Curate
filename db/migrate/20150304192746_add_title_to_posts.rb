class AddTitleToPosts < ActiveRecord::Migration
  def change
  	add_column :posts, :title, :string
    add_column :posts, :author_url, :string
    add_column :posts, :provider_name, :string
    add_column :posts, :content, :string
  end
end

