class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :workouts

  def workouts
    object.workouts.pluck(:id)
  end
end
