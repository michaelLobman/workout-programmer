class AsstExSerializer < ActiveModel::Serializer
  attributes :id, :title, :sets, :reps, :test

  belongs_to :main_ex

  def test
    'test'

  end
end
