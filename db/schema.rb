# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_05_08_005136) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "accessory_exes", force: :cascade do |t|
    t.integer "main_ex_id"
    t.string "title"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "sets"
    t.integer "reps"
  end

  create_table "ex_sets", force: :cascade do |t|
    t.integer "week_id"
    t.integer "num"
    t.integer "reps"
    t.float "percentage"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "main_exes", force: :cascade do |t|
    t.string "title"
    t.string "upper_lower"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "progressions", force: :cascade do |t|
    t.integer "main_ex_id"
    t.integer "user_id"
    t.integer "baseline_max"
    t.integer "current_max"
    t.boolean "sets_completed"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "full_name"
    t.integer "week_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "email"
    t.string "password_digest"
    t.integer "current_week"
    t.integer "phase"
  end

  create_table "weeks", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
