class CreateMainExes < ActiveRecord::Migration[7.0]
  def change
    create_table :main_exes do |t|
      t.string :title
      t.string :upper_lower

      t.timestamps
    end
  end
end
