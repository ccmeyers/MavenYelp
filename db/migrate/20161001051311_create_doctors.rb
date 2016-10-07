class CreateDoctors < ActiveRecord::Migration
  def change
    create_table :doctors do |t|
      t.string :first_name
      t.string :last_name
      t.string :practice_name
      t.string :address
      t.string :phone
      t.string :website
      t.float :rating
      t.text :review
      t.references :doctor_category, index: true

      t.timestamps
    end
  end
end
