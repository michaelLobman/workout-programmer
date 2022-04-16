class CreateAsstExes < ActiveRecord::Migration[7.0]
  def change
    create_table :asst_exes do |t|
      t.integer :main_ex_id
      t.string :title
      t.string :upper_lower

      t.timestamps
    end
  end
end
