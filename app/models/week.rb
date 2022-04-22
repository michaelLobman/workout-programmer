class Week < ApplicationRecord
    has_many :ex_sets
    has_many :users
end
