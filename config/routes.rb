Rails.application.routes.draw do

  

  get 'about' => 'static_pages#about'
  root 'static_pages#home'
  
  devise_for :users

  resources :users, :only => [:show, :index, :destroy] do
    member do
      get :following, :followers
    end
  end

  resources :links
  resources  :posts, only: [:create, :destroy]
  resources :relationships,       only: [:create, :destroy]

  resources :messages, only: [:create, :destroy, :index]

end
