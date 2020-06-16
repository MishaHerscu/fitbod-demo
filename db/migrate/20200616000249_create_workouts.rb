class CreateWorkouts < ActiveRecord::Migration[6.0]
  def change
    create_table :workouts do |t|
      t.references :user, null: false, foreign_key: true
      t.date :date, null: false
      t.integer :duration, null: false

      t.timestamps null: false
    end
  end
end
