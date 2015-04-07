Rails.application.routes.draw do

  
  devise_for :users
  
  
  root 'static_pages#root'
  
  
  namespace :api, :defaults => {:format => :json} do

    resources :users, :only => [:show, :index, :destroy] do
      member do
        get :following, :followers
      end
    end

    post 'relationships/:id/togglefollow', to: 'relationships#toggle_follow'
    
    resources :recipients, only: [:index]

    resources :likes, only: [:index, :show]
    
    resources  :posts, only: [:create, :destroy, :show, :index] do
      resources :likes, only: [:create, :destroy]
    end
    resources :relationships, only: [:create, :destroy] 

    resources :messages, only: [:create, :destroy, :index] do
      resources :likes, only: [:create, :destroy]
    end

  end

####################################
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
