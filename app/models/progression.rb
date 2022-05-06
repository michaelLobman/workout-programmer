class Progression < ApplicationRecord
    attribute :sets_completed, :boolean, default: false
    attribute :current_max, :integer, default: 0

    belongs_to :user
    belongs_to :main_ex

    
    def w_max
        increment = self.main_ex.upper_lower == 'upper' ? 5 : 10
        multiplier = self.user.phase - 1
        increase = increment * multiplier
        nearest_five((self.baseline_max * 0.9) + increase)
    end
    
    private
    
    def nearest_five(float)
        (float/5.0).round * 5
    end
end
