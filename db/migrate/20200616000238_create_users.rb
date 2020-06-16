class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :email_address, null: false

      t.timestamps null: false
    end
  end
end
