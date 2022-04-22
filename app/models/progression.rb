class Progression < ApplicationRecord
    attribute :sets_completed, :boolean, default: false
    attribute :current_max, :integer, default: 0

    belongs_to :user
    belongs_to :main_ex

    # because max is now stored in column, do not need this here.
    # def max 
    #     nearest_five(self.weight * self.reps * 0.0333 + self.weight)
    # end

    # change to using baseline_max value
    
    def w_max
        increment = self.main_ex.upper_lower == 'upper' ? 5 : 10
        multiplier = self.user.week.phase - 1
        increase = increment * multiplier
        
        nearest_five((self.baseline_max * 0.9) + increase)
    end
    
    private
    
    def nearest_five(float)
        (float/5.0).round * 5
    end
end
