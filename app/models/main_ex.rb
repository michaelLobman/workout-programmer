class MainEx < ApplicationRecord
    has_many :max_weights
    has_many :users, through: :max_weights
    has_many :asst_exes

end
