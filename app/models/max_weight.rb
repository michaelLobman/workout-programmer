class MaxWeight < ApplicationRecord
    belongs_to :user
    belongs_to :main_ex

    def max 
        nearest_five(self.weight * self.reps * 0.0333 + self.weight)
    end
    
    def w_max
        nearest_five(self.max * 0.9)
    end
    
    private
    
    def nearest_five(float)
        (float/5.0).round * 5
    end
end
