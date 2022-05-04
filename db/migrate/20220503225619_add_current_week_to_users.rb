class AddCurrentWeekToUsers < ActiveRecord::Migration[7.0]
  def change
    unless column_exists? :users, :current_week
      add_column :users, :current_week, :integer
    end
  end
end
