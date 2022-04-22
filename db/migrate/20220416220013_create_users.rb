class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :full_name
      t.integer :week_id

      t.timestamps
    end
  end
end
