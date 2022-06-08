class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :current_week, :phase

  has_many :progressions
  belongs_to :week
  has_many :ex_sets

  def name
    self.object.full_name.split[0]
  end

  def progressions
    self.object.progressions.order(main_ex_id: :asc)
  end

end
