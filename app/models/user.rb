class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :workouts, inverse_of: :user, dependent: :destroy

  validates :first_name, length: { in: 1..100, message: 'first_name length must be between 1 and 100 inclusive' }
  validates :last_name, length: { in: 1..100, message: 'last_name length must be between 1 and 100 inclusive' }
  validates :email, length: { in: 3..1000, message: 'email length must be between 3 and 1000 inclusive' }

  validates_uniqueness_of :email

  def to_s
    self.first_name + ' ' + self.last_name
  end
end
