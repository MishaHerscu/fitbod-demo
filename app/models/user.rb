class User < ApplicationRecord
  has_many :workouts, inverse_of: :user, dependent: :destroy

  validates :email_address, length: { in: 3..1000, message: 'email_address length must be between 3 and 1000 inclusive' }

  validates_uniqueness_of :email_address
end
