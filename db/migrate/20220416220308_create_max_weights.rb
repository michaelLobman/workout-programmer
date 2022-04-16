class CreateMaxWeights < ActiveRecord::Migration[7.0]
  def change
    create_table :max_weights do |t|
      t.integer :main_ex_id
      t.integer :user_id
      t.integer :reps

      t.timestamps
    end
  end
end
