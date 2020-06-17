class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :workouts, inverse_of: :user, dependent: :destroy

  validates :email, length: { in: 3..1000, message: 'email length must be between 3 and 1000 inclusive' }

  validates_uniqueness_of :email
end
