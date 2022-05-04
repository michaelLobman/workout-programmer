class AddCurrentWeekToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :current_week, :integer
  end
end
