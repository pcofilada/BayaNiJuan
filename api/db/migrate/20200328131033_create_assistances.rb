class CreateAssistances < ActiveRecord::Migration[6.0]
  def change
    create_table :assistances do |t|
      t.string :requester
      t.string :contact_number
      t.text :details
      t.decimal :lat
      t.decimal :lng
      t.string :status, default: 'pending'
      t.belongs_to :account, null: false, foreign_key: true

      t.timestamps
    end
  end
end
