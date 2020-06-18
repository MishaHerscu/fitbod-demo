class Workout < ApplicationRecord
  belongs_to :user, inverse_of: :workouts

  validates :duration, numericality: { only_integer: true, greater_than_or_equal_to: 0, less_than_or_equal_to: 10000, message: 'invalid numerical input; accepted range: 0-10000' }

  def to_s
    self.user.first_name + ' ' + self.user.last_name + ' ' + self.date.to_s
  end
end
