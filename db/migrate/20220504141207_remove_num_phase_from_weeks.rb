class RemoveNumPhaseFromWeeks < ActiveRecord::Migration[7.0]
  def change
    remove_column :weeks, :num, :integer
    remove_column :weeks, :phase, :integer
  end
end
