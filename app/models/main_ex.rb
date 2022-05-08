class MainEx < ApplicationRecord
    has_many :progressions
    has_many :users, through: :progressions
    has_many :accessory_exes
    
end
