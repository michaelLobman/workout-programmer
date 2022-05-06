class RemoveUpperLowerFromAsstExes < ActiveRecord::Migration[7.0]
  def change
    remove_column :asst_exes, :upper_lower, :string
  end
end
