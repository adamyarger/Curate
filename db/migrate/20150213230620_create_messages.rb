class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
      t.text :body
      t.string :body_html
      t.integer :sender_id

      t.timestamps null: false
    end
    add_index :messages, :sender_id
  end
end
