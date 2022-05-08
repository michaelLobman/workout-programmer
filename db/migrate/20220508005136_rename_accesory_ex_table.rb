class RenameAccesoryExTable < ActiveRecord::Migration[7.0]
  def change
    rename_table :asst_exes, :accessory_exes
  end
end
