class AddHtmlToPosts < ActiveRecord::Migration
  def change
    add_column :posts, :html, :string
  end
end
