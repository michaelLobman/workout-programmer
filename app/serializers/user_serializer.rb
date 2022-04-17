class UserSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :username, :current_week

  has_many :max_weights
end
