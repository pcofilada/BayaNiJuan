class CreateAccounts < ActiveRecord::Migration[6.0]
  def change
    create_table :accounts do |t|
      t.string :first_name
      t.string :last_name
      t.string :mobile_number
      t.string :auth_code

      t.timestamps
    end
  end
end
