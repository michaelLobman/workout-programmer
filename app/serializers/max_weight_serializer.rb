class MaxWeightSerializer < ActiveModel::Serializer
  attributes :id, :reps, :weight, :exercise

  def exercise
    MainEx.find(self.object.main_ex_id).title
  end

end
