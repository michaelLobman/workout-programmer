class User < ApplicationRecord
    has_secure_password
    has_many :progressions
    has_many :main_exes, through: :progressions
    belongs_to :week
    has_many :ex_sets, through: :week

    attribute :week_id, :integer, default: 1
    attribute :current_week, :integer, default: 1
    attribute :phase, :integer, default: 1

    validates :full_name, presence: true
    validates :email, presence: true, uniqueness: true





end
