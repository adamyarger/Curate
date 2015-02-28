class DropNotificationsTable < ActiveRecord::Migration
   def up
    drop_table :notifications
  end
end
