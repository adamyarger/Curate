class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.text :body
      t.string :body_html
      t.references :user, index: true

      t.timestamps null: false
    end
    add_index :posts, [:user_id, :created_at]
  end
end
