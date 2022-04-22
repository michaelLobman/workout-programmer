class ProgressionSerializer < ActiveModel::Serializer
  attributes :id, :exercise, :baseline_max, :current_max, :w_max, :sets_completed, :main_ex_id

  def exercise
    MainEx.find(self.object.main_ex_id).title
  end

end
