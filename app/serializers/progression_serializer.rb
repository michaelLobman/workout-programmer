class ProgressionSerializer < ActiveModel::Serializer
  attributes :id, :exercise, :baseline_max, :current_max, :w_max, :sets_completed, :main_ex_id

  def exercise
    MainEx.find(self.object.main_ex_id).title
  end

  # def w_max
  #   nearest_five(self.object.max * 0.9)
  # end

  # private

  # def nearest_five(float)
  #   (float/5.0).round * 5
  # end
  

end
