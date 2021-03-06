Rails.application.routes.draw do

  
  devise_for :users
  
  
  root 'static_pages#root'
  
  
  namespace :api, :defaults => {:format => :json} do

    resources :users, :only => [:show, :index, :destroy] do
      member do
        get :following, :followers
        get :likes
        get :posts
      end
    end

    post 'relationships/:id/togglefollow', to: 'relationships#toggle_follow'
    post 'posts/:id/togglelike', to: 'posts#toggle_like'
    
    resources :recipients, only: [:index]

    resources :likes, only: [:index, :show, :create]
    
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
  resources  :posts, only: [:create, :destroy, :new]
  resources :relationships,       only: [:create, :destroy]

  resources :messages, only: [:create, :destroy, :index]

end
