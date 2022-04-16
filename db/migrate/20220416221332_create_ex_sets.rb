class CreateExSets < ActiveRecord::Migration[7.0]
  def change
    create_table :ex_sets do |t|
      t.integer :week_id
      t.integer :num
      t.integer :reps
      t.float :percentage

      t.timestamps
    end
  end
end
