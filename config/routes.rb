Rails.application.routes.draw do
  devise_for :users, path: 'users'

  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  scope '/api' do
    resources :users
    resources :workouts
  end

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
   !request.xhr? && request.format.html?
  end
end
