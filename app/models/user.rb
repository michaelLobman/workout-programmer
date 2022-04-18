class User < ApplicationRecord
    has_secure_password
    has_many :progressions
    has_many :main_exes, through: :progressions
end
