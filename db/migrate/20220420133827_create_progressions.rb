class CreateProgressions < ActiveRecord::Migration[7.0]
  def change
    create_table :progressions do |t|
      t.integer :main_ex_id
      t.integer :user_id
      t.integer :baseline_max
      t.integer :current_max
      t.boolean :sets_completed

      t.timestamps
    end
  end
end