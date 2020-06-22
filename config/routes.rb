  Rails.application.routes.draw do
  devise_for :users, path: 'users', controllers: { registrations: 'users/registrations'  }

  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  scope '/api' do
    resources :users
    resources :workouts
    get 'users/check_for_user' => 'users#check_for_user'
  end

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
   !request.xhr? && request.format.html?
  end
end
