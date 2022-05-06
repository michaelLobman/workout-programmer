class ProgressionSerializer < ActiveModel::Serializer
  attributes :id, :exercise, :baseline_max, :current_max, :w_max, :sets_completed, :main_ex_id, :weights_plates
  # :asst_exes

  # I believe below line is redundant

  belongs_to :main_ex


  @@plates = [45,35,25,10,5, 2.5]


  #sloppy way of doing this too...

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
  end


  # sloppy way of doing this... 

  def asst_exes
    MainEx.find(self.object.main_ex_id).asst_exes
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
