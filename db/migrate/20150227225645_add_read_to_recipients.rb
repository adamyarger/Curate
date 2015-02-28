class AddReadToRecipients < ActiveRecord::Migration
  def change
    add_column :recipients, :read, :boolean, null: false, default: false
  end
end
