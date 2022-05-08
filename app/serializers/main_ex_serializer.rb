class MainExSerializer < ActiveModel::Serializer
  attributes :id, :title, :upper_lower

  has_many :progressions
  has_many :accessory_exes

end
