class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :current_week, :phase
  has_many :progressions
  
  belongs_to :week
  has_many :ex_sets


  def name
    self.object.full_name.split[0]
  end

  # def week_sets
  #     week_num = self.object.week.num % 4 
  #     week_num = 4 unless week_num > 0

  #   ExSet.where(week_id: week_num).order(num: :asc)
  # end

  # def phase
  #   Week.find(self.object.current_week).phase
  # end

  def progressions
    self.object.progressions.order(main_ex_id: :asc)
  end

  


end
