class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :duration, :date, :user_id

  def user_id
    object.user.id
  end
end
