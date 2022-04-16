class AddColumnsToWeek < ActiveRecord::Migration[7.0]
  def change
    add_column :weeks, :num, :integer
    add_column :weeks, :phase, :integer
  end
end
