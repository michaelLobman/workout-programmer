class AddColumnsToAsstExes < ActiveRecord::Migration[7.0]
  def change
    add_column :asst_exes, :sets, :integer
    add_column :asst_exes, :reps, :integer
  end
end
