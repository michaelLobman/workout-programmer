class AccessoryExSerializer < ActiveModel::Serializer
  attributes :id, :title, :sets, :reps, :test
  belongs_to :main_ex
end
