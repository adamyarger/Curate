class CreateLikes < ActiveRecord::Migration
  def change
    create_table :likes do |t|
      t.integer :post_id
      t.integer :user_id

      t.timestamps
    end
    
    add_index :likes, [:post_id, :user_id], unique: true
  end
end
