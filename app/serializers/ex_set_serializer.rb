class ExSetSerializer < ActiveModel::Serializer
  attributes :id, :week_id, :num, :reps, :percentage

  # def plates
  #   binding.break
  #   # hash = {}

  #   # self.object.user.ex_sets


  #   # # each instance has a percentage
  #   # sets = self.object.user.ex_sets

  #   # # each instance of progression has a baseline_max
  #   # self.object.user.progressions.each |progression| do
  #   #   weight = progression.baseline_max
  #   # end



  # end

  # private

  # def nearest_five (float)
  #   (float/5.0).round * 5
  # end
end
