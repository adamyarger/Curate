Rails.application.routes.draw do

  

  get 'about' => 'static_pages#about'
  root 'static_pages#home'
  
  devise_for :users

  resources :users, only: [:show, :index] # change to resources :users if you want to set up admin
  resources :users do
    member do
      get :following, :followers
    end
  end

  resources  :posts, only: [:create]
  resources :relationships,       only: [:create, :destroy]

  
  
end
