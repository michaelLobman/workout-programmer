class ProgressionSerializer < ActiveModel::Serializer
  attributes :id, :exercise, :baseline_max, :current_max, :w_max, :sets_completed, :main_ex_id, :weights_plates


  @@plates = [45,35,25,10,5, 2.5]
  def exercise
    MainEx.find(self.object.main_ex_id).title
  end


  def weights_plates
    base = self.object.w_max
    arr = []
    self.object.user.ex_sets.each do |set|
      # arr << nearest_five(set.percentage * base)
      weight = nearest_five(set.percentage * base)

      arr << { weight: weight, plates: determine_plates(weight, @@plates) }

    end

    arr


  #   hash = {}

  #   self.object.user.ex_sets


  #   # each instance has a percentage
  #   sets = self.object.user.ex_sets

  #   # each instance of progression has a baseline_max
  #   self.object.user.progressions.each |progression| do
  #     weight = progression.baseline_max
  #   end


  #   binding.break

  end

  private

  def nearest_five (float)
    (float/5.0).round * 5
  end

  def determine_plates(weight, plates, plate_hash = {})
    side = (weight.to_f - 45) / 2

    if side % plates.first == 0 
        plate_hash[plates.first] = side / plates.first
        return plate_hash
    elsif side > plates.first
        num = (side / plates.first).to_i
        plate_hash[plates.first] = num 
        weight = weight - plates.first * num * 2
    end

    determine_plates(weight, plates[1..-1], plate_hash)
end

end
