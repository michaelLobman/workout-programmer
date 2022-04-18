class MaxWeight < ApplicationRecord
    belongs_to :user
    belongs_to :main_ex

    def max 
        nearest_five(self.weight * self.reps * 0.0333 + self.weight)
    end
    
    def w_max
        increment= self.main_ex.upper_lower == 'upper' ? 5 : 10
        multiplier = self.user.current_week / 5
        increase = increment * multiplier
        
        nearest_five((self.max * 0.9) + increase)
    end
    
    private
    
    def nearest_five(float)
        (float/5.0).round * 5
    end
end
