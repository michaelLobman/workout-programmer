class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :current_week, :week_sets
  has_many :max_weights

  def name
    self.object.full_name.split[0]
  end

  def week_sets
    week_num = self.object.current_week % 4
    ExSet.where(week_id: week_num).order(num: :asc)
  end
end
