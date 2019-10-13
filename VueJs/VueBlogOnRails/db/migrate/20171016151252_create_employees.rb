class CreateEmployees < ActiveRecord::Migration[5.1]
  def change
    create_table :employees do |t|
      t.string     :name,     null: false, default: ''
      t.string     :email,    null: false, default: ''
      t.boolean    :manager,  null: false, default: false
      t.timestamps            null: false
    end
  end
end
