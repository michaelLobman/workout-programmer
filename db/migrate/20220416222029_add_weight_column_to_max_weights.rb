class AddWeightColumnToMaxWeights < ActiveRecord::Migration[7.0]
  def change
    add_column :max_weights, :weight, :integer
  end
end
