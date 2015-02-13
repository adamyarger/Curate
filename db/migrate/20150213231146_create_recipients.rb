class CreateRecipients < ActiveRecord::Migration
  def change
    create_table :recipients do |t|
      t.references :message, index: true
      t.references :user, index: true

      t.timestamps null: false
    end
    add_foreign_key :recipients, :messages
    add_foreign_key :recipients, :users
  end
end
