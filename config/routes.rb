Rails.application.routes.draw do

  

  get 'about' => 'static_pages#about'
  root 'static_pages#home'
  
  devise_for :users

  resources  :users, only: [:show, :index]

  resources  :posts, only: [:create]

  
  
end
