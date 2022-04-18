class MainEx < ApplicationRecord
    has_many :progressions
    has_many :users, through: :progressions
    has_many :asst_exes
end
