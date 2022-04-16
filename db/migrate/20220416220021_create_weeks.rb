class CreateWeeks < ActiveRecord::Migration[7.0]
  def change
    create_table :weeks do |t|

      t.timestamps
    end
  end
end
