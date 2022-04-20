class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :current_week, :week_sets
  has_many :progressions


  def name
    self.object.full_name.split[0]
  end

  def week_sets
    # if self.object.current_week / 4 == 1
    #   week_num = 4
    # else
      week_num = self.object.current_week % 4 
      week_num = week_num + 4 unless week_num > 0

    ExSet.where(week_id: week_num).order(num: :asc)
  end

  def progressions
    self.object.progressions.order(main_ex_id: :asc)
  end


end
