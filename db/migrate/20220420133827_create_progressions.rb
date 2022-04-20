class CreateProgressions < ActiveRecord::Migration[7.0]
  def change
    create_table :progressions do |t|
      t.integer :main_ex_id
      t.integer :user_id
      t.integer :reps
      t.integer :weight
      t.integer :sets_completed

      t.timestamps
    end
  end
end