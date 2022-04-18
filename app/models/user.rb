class User < ApplicationRecord
    has_secure_password
    has_many :max_weights
    has_many :main_exes, through: :max_weights
end
