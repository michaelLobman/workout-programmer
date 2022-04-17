class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :current_week
  has_many :max_weights

  def name
    self.object.full_name.split[0]
  end
end
