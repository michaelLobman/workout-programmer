class User < ApplicationRecord
    has_secure_password
    has_many :progressions
    has_many :main_exes, through: :progressions

    belongs_to :week
    # this is the line of code that breaks it
    # we don't need the weeks as a shared week_id to keep increase
    # that should be another variable, current_week

    has_many :ex_sets, through: :week

    attribute :week_id, :integer, default: 1
    attribute :current_week, :integer, default: 1
    attribute :phase, :integer, default: 1





end
